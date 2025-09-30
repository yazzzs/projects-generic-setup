import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readdirSync, writeFileSync } from 'fs';

// Simula __dirname in ESM:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Percorso corretto per leggere gli SVG
const iconsDir = join(__dirname, '../src/components/atoms/Icon/icons');

// Percorso corretto dove generare il file
const outputFile = join(__dirname, '../src/components/atoms/Icon/iconNames.ts');

// Leggi i file .svg
const files = readdirSync(iconsDir).filter(file => file.endsWith('.svg'));

// Estrai i nomi
const iconNames = files.map(file => file.replace('.svg', ''));

// Contenuto TypeScript da scrivere
const fileContent = `export const iconNames = ${JSON.stringify(iconNames, null, 2)} as const;

export type IconNames = (typeof iconNames)[number];
`;

// Scrivi il file
writeFileSync(outputFile, fileContent);

console.log(`✅ iconNames updated with ${iconNames.length} icons!`);
