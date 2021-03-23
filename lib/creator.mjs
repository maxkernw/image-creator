import sharp from 'sharp';

const svg = (width, height, text, color) => `
<svg width="${width}" height="${height}" viewBox="0 0 ${height} ${height + 2}">
  <rect x="0" y="0" width="100%" height="100%" fill="rgba(0,0,0,0)"/>
  <text font-family="Arial, Helvetica, sans-serif" x="50%" y="50%" text-anchor="middle" fill="${color}" font-size="${width * 2}" dy="0.25em">${text}</text>
</svg>
`;

export async function createImage({ width, height, format }) {
    const color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    const text = `${width}x${height}`;
    const svgElement = svg(width, height, text, color);

    await sharp({
        create: {
            width: parseInt(width),
            height: parseInt(height),
            channels: 4,
            background: { r: 255, g: 255, b: 255, alpha: .5 },
        }
    })
        .composite([{
            input: await Buffer.from(svgElement),
            top: 0,
            left: 0,
        }]).toFile(`${text}.${format}`);
}