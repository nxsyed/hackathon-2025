import { FAQ } from '@/components/FAQ';
import { Sponsors } from '@/components/Sponsors';
import { SpeakerList } from "@/components/SpeakerList";
import { AwardsList } from "@/components/AwardsList";
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

const speakers = [
  {
    id: 1,
    name: "Syed Ahmed",
    jobTitle: "Software @ PsiQuantum",
    imageSrc: "/assets/images/syed-ahmed.jpeg",
    industries: ["HPC", "Parallel Computing", "Distributed Computing", "Cyber Security"],
  },
  {
    id: 2,
    name: "Trevor Vincent",
    jobTitle: "Quantum Algorithms @ PsiQuantum",
    imageSrc: "/assets/images/trevor-vincent.jpeg",
    industries: ["Quantum Computing", "Physics", "Quantum Algorithms", "HPC"],
  },
  {
    id: 3,
    name: "Siddhartha Rao Kamalakara",
    jobTitle: "Machine Learning Engineer @ Runway AI",
    imageSrc: "/assets/images/trevor-vincent.jpeg",
    industries: ["Artificial Intelligence", "Machine Learning", "Model Scaling"],
  },
];

const awards = [
  {
    id: 1,
    title: "Best Small Business Solution",
    description: "Build a project that is voted by the judges as the best solution to a small business problem",
    reward: "$500",
    sponsor: "Youthful Vengence",
    sponsor_link: "https://youthfulvengeance.com/",
  }
];

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
      <SpeakerList speakers={speakers} />

      <h2 className="mt-5 text-2xl font-bold">Awards Categories</h2>
      <AwardsList awards={awards} />
      <h2 className="mt-5 text-2xl font-bold">Sponsors and Business Partners</h2>
      <Sponsors />
    </>
  );
};
