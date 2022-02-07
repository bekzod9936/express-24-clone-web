export interface ISProps {
  path: string;
  icon: string;
  alt: string;
}

export interface IPProps {
  path: string;
  title: string;
}

export interface ILProps {
  value: string;
  label: string;
}

export const socialList: ISProps[] = [
  { path: '/', icon: '/icons/facebook.svg', alt: 'facebook' },
  { path: '/', icon: '/icons/instagram.svg', alt: 'instagram' },
  { path: '/', icon: '/icons/email.svg', alt: 'email' },
];

export const pagesList: IPProps[] = [
  { path: '/about', title: 'about' },
  { path: '/', title: 'agreement' },
  { path: '/', title: 'contacts' },
];

export const linkList: IPProps[] = [
  { path: '/', title: 'answer' },
  { path: '/', title: 'application' },
];

export const langList = [
  { value: 'ru', label: 'russian' },
  { value: 'en', label: 'english' },
  { value: 'uz', label: 'uzbek' },
];
