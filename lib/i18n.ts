export type Locale = 'en' | 'es' | 'ca';

export const locales: Locale[] = ['en', 'es', 'ca'];
export const defaultLocale: Locale = 'en';

export const translations = {
  en: {
    title: 'Martí Espinosa - iOS Developer | ITRAM',
    description: 'Martí Espinosa - iOS Developer building mobile apps with Swift and SwiftUI',
    jobTitle: 'iOS Developer',
    sections: {
      doing: 'doing',
      done: 'done',
      experience: 'experience',
      contact: 'contact',
    },
    footer: 'inspired by mds',
  },
  es: {
    title: 'Martí Espinosa - Desarrollador iOS | ITRAM',
    description: 'Martí Espinosa - Desarrollador iOS creando apps móviles con Swift y SwiftUI',
    jobTitle: 'Desarrollador iOS',
    sections: {
      doing: 'en progreso',
      done: 'hecho',
      experience: 'experiencia',
      contact: 'contacto',
    },
    footer: 'inspirado en mds',
  },
  ca: {
    title: 'Martí Espinosa - Desenvolupador iOS | ITRAM',
    description: 'Martí Espinosa - Desenvolupador iOS creant apps mòbils amb Swift i SwiftUI',
    jobTitle: 'Desenvolupador iOS',
    sections: {
      doing: 'en curs',
      done: 'fet',
      experience: 'experiència',
      contact: 'contacte',
    },
    footer: 'inspirat en mds',
  },
} as const;

export function getTranslations(locale: Locale) {
  return translations[locale] || translations[defaultLocale];
}

export function generateHreflang(pathname: string) {
  return locales.map(locale => ({
    hreflang: locale,
    href: locale === defaultLocale ? pathname : `/${locale}${pathname}`,
  }));
}