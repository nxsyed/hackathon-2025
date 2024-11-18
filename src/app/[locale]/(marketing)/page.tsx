import { FAQ } from '@/components/FAQ';
import { Sponsors } from '@/components/Sponsors';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type IIndexProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: IIndexProps) {
  const { locale } = await props.params;
  const t = await getTranslations({
    locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default async function Index(props: IIndexProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  return (
    <>
      <h2 className="mt-5 text-2xl font-bold">
        What is Bits and Bites Hackthon?
      </h2>
      <p className="text-base">
        Bits and Bites is a 2 - day restaurant-themed competition where participants get a chance to solve a problem relating to modern day restaurants. Problems could relate to POS Systems, Data collecting for reservations and waitlists, staff scheduling, etc.
      </p>
      <h2 className="mt-5 text-2xl font-bold">FAQs</h2>
      <FAQ />
      <h2 className="mt-5 text-2xl font-bold">Speakers</h2>
      <h2 className="mt-5 text-2xl font-bold">Awards Categories</h2>
      <h2 className="mt-5 text-2xl font-bold">Sponsors and Business Partners</h2>
      <Sponsors />
    </>
  );
};
