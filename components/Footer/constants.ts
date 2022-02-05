import Email from 'public/icons/email.svg';
import FaceBook from 'public/icons/facebook.svg';
import Instagram from 'public/icons/instagram.svg';

export interface ISProps {
  path: string;
  icon: any;
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
  { path: '/', icon: FaceBook, alt: 'facebook' },
  { path: '/', icon: Instagram, alt: 'instagram' },
  { path: '/', icon: Email, alt: 'email' },
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
