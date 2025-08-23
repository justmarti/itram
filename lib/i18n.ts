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
      'worked in': 'worked in',
      contact: 'contact',
    },
    footer: 'inspired by mds',
  },
  es: {
    title: 'Martí Espinosa - Desarrollador iOS | ITRAM',
    description: 'Martí Espinosa - Desarrollador iOS creando apps móviles con Swift y SwiftUI',
    jobTitle: 'Desarrollador iOS',
    sections: {
      doing: 'haciendo',
      done: 'hecho',
      'worked in': 'trabajé en',
      contact: 'contacto',
    },
    footer: 'inspirado en mds',
  },
  ca: {
    title: 'Martí Espinosa - Desenvolupador iOS | ITRAM',
    description: 'Martí Espinosa - Desenvolupador iOS creant apps mòbils amb Swift i SwiftUI',
    jobTitle: 'Desenvolupador iOS',
    sections: {
      doing: 'fent',
      done: 'fet',
      'worked in': 'he treballat a',
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