const hostingerImage = name => `https://horizons-cdn.hostinger.com/cd7c3a5d-83ed-4ed4-a504-c8991e3f8911/${name}.jpg`

export const featuredCollection = [
  {
    id: 'luxury-sports-lounge',
    category: 'Commercial',
    name: 'Luxury Sports Lounge',
    alt: 'Luxury sports lounge with patterned seating and warm ambient lighting',
    description: 'Sophisticated sports entertainment venue featuring circular ceiling design, elegant black and white patterned seating, dark wood furnishings, and warm ambient lighting.',
    image: hostingerImage('3b0ca279e900a5d3cb0ebf0fe5441f00'),
  },
  {
    id: 'wine-dine-unwind-bar',
    category: 'Commercial',
    name: 'Wine Dine & Unwind Bar',
    alt: 'Upscale wine bar with warm ceiling lighting and dark wood bar',
    description: 'Upscale wine bar with warm golden oval ceiling lighting, a dark wood bar counter with green paneling, and arched glass display cabinets.',
    image: hostingerImage('18680ca5e8bbfa046ae1d69ef3dc388f'),
  },
  {
    id: 'modern-retail-showroom',
    category: 'Commercial',
    name: 'Modern Retail Showroom',
    alt: 'Contemporary retail space with marble counter and display cases',
    description: 'Contemporary retail space with a brown marble counter, professional display cases, and recessed ceiling lighting. Warm wood tones meet a neutral palette.',
    image: hostingerImage('93d2fbb13b421dd1c8594625bc373c06'),
  },
  {
    id: 'elegant-private-dining-room',
    category: 'Commercial',
    name: 'Elegant Private Dining Room',
    alt: 'Private dining room with botanical wall panels and cream and gold details',
    description: 'Luxury private dining space with botanical wall panels, a cream and gold color scheme, and refined table settings.',
    image: hostingerImage('bfcbc4dcc583caac52c2c9c7a4f0360b'),
  },
]

export const premiumCollection = [
  {
    id: 'grand-event-hall',
    category: 'Premium',
    name: 'Grand Event Hall',
    alt: 'Grand event hall with ornate gold ceiling and purple velvet seating',
    description: 'A grand event hall with ornate gold ceiling panels, purple velvet chairs with gold frames, marble flooring, and large windows.',
    features: ['Ornate gold ceiling panels', 'Baroque detailing', 'Marble flooring'],
    image: hostingerImage('066f89ab5a11ff4791d4554e3d7e0f92'),
  },
  {
    id: 'marble-foyer-entrance',
    category: 'Premium',
    name: 'Marble Foyer Entrance',
    alt: 'Elegant foyer with dark marble and an ornate gold-framed doorway',
    description: 'An elegant entrance foyer with dark marble walls and flooring, gold veining, and an ornate gold-framed doorway.',
    features: ['Marble with gold veining', 'Gold-framed doorway', 'Intricate detailing'],
    image: hostingerImage('1888c761af052082128fe90a9ac30f23'),
  },
  {
    id: 'classical-library-lounge',
    category: 'Premium',
    name: 'Classical Library Lounge',
    alt: 'Refined library lounge with gold details and built-in bookshelves',
    description: 'A refined library and reading room with gold ceiling beams, built-in glass-fronted bookshelves, elegant furniture, and dark marble flooring.',
    features: ['Gold ceiling beams', 'Built-in bookshelves', 'Gold-accented furniture'],
    image: hostingerImage('6c9a5eb3d7a8914ae491dcef94672029'),
  },
]
