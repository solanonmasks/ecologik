// Business details used across the whole site.
// Change something here and it updates on every page.

export const SITE = {
  name: 'Ecologik Services Ltd.',
  shortName: 'Ecologik',
  url: 'https://ecologik.ca',
  phone: '778-855-6843',
  phoneHref: 'tel:17788556843',
  email: 'daniel@ecologik.ca',
  street: '1625 Grand Boulevard',
  city: 'North Vancouver',
  region: 'BC',
  postalCode: '', // Add the postal code here when known.
  country: 'CA',
};

// Quote form handler.
// 1. Create a free form at https://formspree.io (send it to daniel@ecologik.ca).
// 2. Paste the form ID below, e.g. 'xyzabcd' (the part after formspree.io/f/).
// Until this is filled in, the form tells visitors to call or email instead.
export const FORMSPREE_ID = '';

export const NAV = [
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];
