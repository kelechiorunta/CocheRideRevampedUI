import fs from 'fs/promises';
import path from 'path';
import { Readable } from 'stream';
import sharp from 'sharp';
import { NextResponse } from 'next/server';
import slides from 'src/app/slides';

export const handler = async (req, res) => {
    if (req.method === 'GET') {
        try {
            const imagePath = path.resolve(`./public/${slides[0].heroPic}`);
            const imageBuffer = await fs.readFile(imagePath);

            // Resize the image
            const placeholderBuffer = await sharp(imageBuffer).resize(20).toBuffer();

            // Convert buffer to readable stream
            const readStream = (bufferImg) => {
                const readable = new Readable();
                readable.push(bufferImg);
                readable.push(null);
                return readable;
            };

            const readStreamer = readStream(placeholderBuffer);

            // Handle stream errors
            readStreamer.on('error', (err) => {
                console.error(err.message, "Unable to read Stream");
                NextResponse.json({ error: "Error in reading stream" }, {status: 500});
            });

            // Stream the image
            //res.setHeader('Content-Type', 'image/jpeg');
            // Return the stream response
        return new NextResponse(readStreamer, {
            headers: { 'Content-Type': 'image/jpeg' },
        });
            // readStreamer.pipe(res);
        } catch (err) {
            console.error('Error processing image:', err);
            NextResponse.json({ error: 'Image processing failed' }, {status: 500});
        }
    } else {
        NextResponse.json({ error: 'Method not allowed' }, {status: 405}); // Return a response for non-GET methods
    }
};

export { handler as GET };

