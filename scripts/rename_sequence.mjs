import fs from 'fs';
import path from 'path';

const dir = path.join(process.cwd(), 'public/sequence');

// Get all files
try {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp'));

    // Sort files naturally to ensure frame_000 comes before frame_001
    files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    console.log(`Found ${files.length} files.`);

    files.forEach((file, index) => {
        const ext = path.extname(file);
        const newName = `${index.toString().padStart(3, '0')}${ext}`; // 000.webp
        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, newName);

        if (oldPath !== newPath) {
            fs.renameSync(oldPath, newPath);
            // console.log(`Renamed ${file} to ${newName}`);
        }
    });

    console.log('Renaming complete.');
} catch (e) {
    console.error('Error processing files:', e);
}
