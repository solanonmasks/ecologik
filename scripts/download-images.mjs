// Downloads every original photo from the old Wix site into public/images.
// Run on your own computer with:  npm run download-images
// Then open src/data/images.ts and add a `local` path for each new file.
import { mkdir, writeFile } from 'node:fs/promises';

const PHOTOS = {
  mech: 'f7ebc9_310f83dba4124830a7c655c6599686b9~mv2.png',
  fire: 'f7ebc9_83dba79331ee453e893eb0eab4c20b0d~mv2.png',
  rad: 'f7ebc9_324a541ba6da4334aca05cc3efed6b87~mv2.png',
  man: 'f7ebc9_3d6ace04367143808b9202154f6e13ab~mv2.png',
  bath: 'f7ebc9_6c1d6913310744dc82ca6f443be20775~mv2.jpeg',
  marb: 'f7ebc9_b3c6716b1d904152bc0102fb302c0686~mv2.jpg',
  pipe: 'f7ebc9_c0eaf019e60645179de2b0b0d382aff4~mv2.png',
  splash: 'f7ebc9_678d3123f7f6459f9dbf0cac401ee3be~mv2.jpg',
};

await mkdir('public/images', { recursive: true });
for (const [name, id] of Object.entries(PHOTOS)) {
  // Ask Wix for a large JPG version of each photo.
  const url = `https://static.wixstatic.com/media/${id}/v1/fit/w_2400,h_2400,q_85/${name}.jpg`;
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed: ${name} (${res.status})`);
    continue;
  }
  const file = `public/images/${name}.jpg`;
  await writeFile(file, Buffer.from(await res.arrayBuffer()));
  console.log(`Saved ${file}  ->  add  local: '/images/${name}.jpg'  to "${name}" in src/data/images.ts`);
}
