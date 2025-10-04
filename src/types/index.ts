export interface Language {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
}

export interface NavigationItem {
  id: string;
  labelEn: string;
  labelAr: string;
}

export interface Service {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
}

export interface Solution {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  technologies: string[];
}
