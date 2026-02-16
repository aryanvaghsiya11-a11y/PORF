'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Load images
    useEffect(() => {
        const loadImages = async () => {
            const loadedImages: HTMLImageElement[] = [];
            const frameCount = 120; // Exact count from user's folder

            for (let i = 0; i < frameCount; i++) {
                const img = new Image();
                const fileName = `${i.toString().padStart(3, '0')}.webp`;
                img.src = `/sequence/${fileName}`;
                await new Promise((resolve, reject) => {
                    img.onload = resolve;
                    img.onerror = reject;
                });
                loadedImages.push(img);
            }
            setImages(loadedImages);
            setIsLoaded(true);
        };
        loadImages();
    }, []);

    // Render logic
    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Object-fit: cover logic
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
    };

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Redraw current frame
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
        handleResize(); // Initial size

        return () => window.removeEventListener('resize', handleResize);
    }, [images, scrollYProgress]);


    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        const index = Math.min(
            images.length - 1,
            Math.floor(latest * images.length)
        );
        requestAnimationFrame(() => render(index));
    });

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#121212]">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                />
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center text-white z-50">
                        <div className="animate-pulse">Loading Experience...</div>
                    </div>
                )}
            </div>
            {scrollYProgress && <Overlay scrollYProgress={scrollYProgress} />}
        </div>
    );
}
