// Company facts. Source of truth = https://sgmsprojects.com/ (see README: items marked VERIFY).
export const site = {
  name: 'SGMS Projects Private Limited', short: 'SGMS PROJECTS', url: 'https://sgmsprojects.com/',
  tagline: 'Turnkey interior execution, space planning and consultation for residential and hospitality spaces.',
  contact: {
    phone: '8310125704',
    email: 'sgmsprojectspvtltd@gmail.com',
    address: 'Bangalore, Karnataka (India)',
    hours: 'Mon-Fri: 9am-6pm',
    mapsUrl: '',
  },
  social: [], // e.g. [{label:'Instagram', href:'https://...'}]
  // Formspree / Web3Forms / your API URL. Empty = demo mode (nothing is sent).
  formEndpoint: import.meta.env.VITE_FORM_ENDPOINT || '',
  stats: [{ value: 250, suffix: '+', label: 'Happy clients' }, { value: 36, suffix: '', label: 'Years of experience' }],
}
export const nav = [['Home','#home'],['About','#about'],['Services','#services'],['Projects','#projects'],['Portfolio','#portfolio'],['Our Approach','#approach'],['Contact','#contact']]
// Image references are centralised here. Replace with real SGMS photos (see README).
const u = (id, w = 1600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&q=75&w=${w}`
export const img = {
  hero: u('photo-1618221195710-dd6b41faaea6', 2200),
  intro: u('photo-1600210492486-724fe5c67fb0'),
  turnkey: u('photo-1616486338812-3dadae4b4ace'),
  space: u('photo-1600607687939-ce8a6c25118c'),
  consult: u('photo-1560448204-e02f11c3d0e2'),
  residential: u('photo-1600585154340-be6161a56a0c'),
  hospitality: u('photo-1631679706909-1844bbd07221'),
  detail: u('photo-1615874959474-d609969a20ed', 1000),
}
