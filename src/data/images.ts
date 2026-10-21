// Every photo on the site, in one place.
//
// Photos with a `local` file are stored in /public/images.
// The rest still load from the client's current Wix image server.
// Run `npm run download-images` on your own computer to copy those
// into /public/images too, then add a `local` path for each one below.

type Photo = { wix: string; local?: string };

export const PHOTOS = {
  logo: { wix: 'f7ebc9_fca7b0ccde644a8192cd26dadb5b48db~mv2.png', local: '/images/logo.png' },
  kitchen: { wix: 'f7ebc9_40a9167fa7bc47f2b84b81bb341933a1~mv2.jpg', local: '/images/kitchen.jpg' },
  view: { wix: 'f7ebc9_af0bbb1bb3d7436fba2de8730fa3bfae~mv2.jpg', local: '/images/view.jpg' },
  boiler: { wix: 'f7ebc9_5f3153ddd442435cb709484d0435b70e~mv2.png', local: '/images/boiler.jpg' },
  tub: { wix: 'f7ebc9_63dfd5d7c07343eb89307e03e26eebdf~mv2.png', local: '/images/tub.jpg' },
  hex: { wix: 'f7ebc9_05f5184aaa4b4087b1b31eaaa86909bb~mv2.jpg', local: '/images/bath-hex.jpg' },
  mech: { wix: 'f7ebc9_310f83dba4124830a7c655c6599686b9~mv2.png' },
  fire: { wix: 'f7ebc9_83dba79331ee453e893eb0eab4c20b0d~mv2.png' },
  rad: { wix: 'f7ebc9_324a541ba6da4334aca05cc3efed6b87~mv2.png' },
  man: { wix: 'f7ebc9_3d6ace04367143808b9202154f6e13ab~mv2.png' },
  bath: { wix: 'f7ebc9_6c1d6913310744dc82ca6f443be20775~mv2.jpeg' },
  marb: { wix: 'f7ebc9_b3c6716b1d904152bc0102fb302c0686~mv2.jpg' },
  pipe: { wix: 'f7ebc9_c0eaf019e60645179de2b0b0d382aff4~mv2.png' },
  splash: { wix: 'f7ebc9_678d3123f7f6459f9dbf0cac401ee3be~mv2.jpg' },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof PHOTOS;

/** Returns the URL for a photo. `width` only applies to Wix-hosted photos. */
export function img(key: PhotoKey, width = 1600): string {
  const p: Photo = PHOTOS[key];
  if (p.local) return p.local;
  return `https://static.wixstatic.com/media/${p.wix}/v1/fit/w_${width},h_${width},q_85/${key}.jpg`;
}
