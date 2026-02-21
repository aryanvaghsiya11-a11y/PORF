'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useScroll, useMotionValueEvent, motion, useTransform } from 'framer-motion';
import Overlay from './Overlay';

const FRAME_COUNT = 120;
const BATCH_SIZE = 10;

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [loadProgress, setLoadProgress] = useState(0);
    const [hasError, setHasError] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Blur effect tied to load progress
    const blurAmount = isLoaded ? 0 : Math.max(0, 20 - (loadProgress / 100) * 20);

    // Load a single image with error handling
    const loadImage = useCallback((index: number): Promise<HTMLImageElement> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            const fileName = `${index.toString().padStart(3, '0')}.webp`;
            img.src = `/sequence/${fileName}`;
            img.onload = () => resolve(img);
            img.onerror = () => reject(new Error(`Failed to load frame ${fileName}`));
        });
    }, []);

    // Parallel batch loading
    useEffect(() => {
        const loadAllImages = async () => {
            const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
            let loadedCount = 0;

            for (let batch = 0; batch < FRAME_COUNT; batch += BATCH_SIZE) {
                const batchEnd = Math.min(batch + BATCH_SIZE, FRAME_COUNT);
                const batchPromises: Promise<void>[] = [];

                for (let i = batch; i < batchEnd; i++) {
                    batchPromises.push(
                        loadImage(i)
                            .then(img => {
                                loadedImages[i] = img;
                                loadedCount++;
                                setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                            })
                            .catch(() => {
                                loadedCount++;
                                setLoadProgress(Math.round((loadedCount / FRAME_COUNT) * 100));
                            })
                    );
                }

                await Promise.all(batchPromises);

                // Render first frame as soon as it's available
                if (batch === 0 && loadedImages[0]) {
                    setImages([...loadedImages.filter(Boolean)]);
                }
            }

            const validImages = loadedImages.filter(Boolean);
            if (validImages.length === 0) {
                setHasError(true);
                return;
            }

            setImages(loadedImages);
            setIsLoaded(true);
        };

        loadAllImages();
    }, [loadImage]);

    // Cache canvas context
    useEffect(() => {
        if (canvasRef.current) {
            ctxRef.current = canvasRef.current.getContext('2d');
        }
    }, []);

    // Memoized render function
    const render = useCallback((index: number) => {
        const canvas = canvasRef.current;
        const ctx = ctxRef.current;
        if (!canvas || !ctx || images.length === 0) return;

        const img = images[index];
        if (!img) return;

        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        const imgRatio = img.width / img.height;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, offsetX, offsetY;

        if (canvasRatio > imgRatio) {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
            offsetX = 0;
            offsetY = (canvasHeight - drawHeight) / 2;
        } else {
            drawWidth = canvasHeight * imgRatio;
            drawHeight = canvasHeight;
            offsetX = (canvasWidth - drawWidth) / 2;
            offsetY = 0;
        }

        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }, [images]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-cache context after resize (canvas reset clears it)
                ctxRef.current = canvasRef.current.getContext('2d');

                if (images.length > 0) {
                    const currentScroll = scrollYProgress.get();
                    const index = Math.min(
                        images.length - 1,
                        Math.floor(currentScroll * images.length)
                    );
                    render(index);
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [images, scrollYProgress, render]);

    // Scroll-linked frame drawing
    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (images.length === 0) return;
        const index = Math.min(
            images.length - 1,
            Math.floor(latest * images.length)
        );
        requestAnimationFrame(() => render(index));
    });

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                {/* Canvas with blur-to-sharp transition */}
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block transition-[filter] duration-700 ease-out"
                    style={{ filter: `blur(${blurAmount}px)` }}
                    aria-label="Scrollable animation sequence showcasing portfolio"
                    role="img"
                />

                {/* Loading overlay with progress */}
                {!isLoaded && (
                    <motion.div
                        className="absolute inset-0 flex flex-col items-center justify-center z-50 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: isLoaded ? 0 : 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Progress ring */}
                        <div className="relative w-20 h-20 mb-6">
                            <svg className="w-20 h-20 -rotate-90" viewBox="0 0 80 80">
                                {/* Background circle */}
                                <circle
                                    cx="40" cy="40" r="34"
                                    fill="none"
                                    stroke="rgba(255,255,255,0.1)"
                                    strokeWidth="3"
                                />
                                {/* Progress circle */}
                                <circle
                                    cx="40" cy="40" r="34"
                                    fill="none"
                                    stroke="url(#progressGradient)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 34}`}
                                    strokeDashoffset={`${2 * Math.PI * 34 * (1 - loadProgress / 100)}`}
                                    className="transition-all duration-300 ease-out"
                                />
                                <defs>
                                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#ef4444" />
                                        <stop offset="100%" stopColor="#3b82f6" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Percentage text */}
                            <span className="absolute inset-0 flex items-center justify-center text-white/80 text-sm font-mono font-medium">
                                {loadProgress}%
                            </span>
                        </div>

                        {/* Loading text */}
                        <p className="text-white/50 text-sm font-light tracking-widest uppercase">
                            Loading Experience
                        </p>
                    </motion.div>
                )}

                {/* Fade-in overlay when loaded */}
                {isLoaded && (
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    />
                )}

                {/* Error state */}
                {hasError && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-50 gap-4">
                        <p className="text-white/60 text-lg">Failed to load experience</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-colors text-sm"
                        >
                            Retry
                        </button>
                    </div>
                )}
            </div>
            {scrollYProgress && <Overlay scrollYProgress={scrollYProgress} />}
        </div>
    );
}
