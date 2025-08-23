import { Locale, getTranslations } from "@/lib/i18n"
import HomeClient from './HomeClient'

interface Props {
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleHome({ params }: Props) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return <HomeClient translations={t} />;
}