import { getTranslations, parseLocale } from "@/lib/i18n"
import HomeClient from './HomeClient'

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function LocaleHome({ params }: Props) {
  const { locale: localeParam } = await params;
  const locale = parseLocale(localeParam);
  const t = getTranslations(locale);

  return <HomeClient translations={t} />;
}