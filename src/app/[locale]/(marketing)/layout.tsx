import { BaseTemplate } from '@/templates/BaseTemplate';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export default async function Layout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await props.params;
  setRequestLocale(locale);
  const t = await getTranslations({
    locale,
    namespace: 'RootLayout',
  });

  return (
    <>
      <BaseTemplate
        leftNav={(
          <>
            {/* <li>
              <Link
                href="/Schedule/"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Schedule
              </Link>
            </li> */}
            <li>
              <a
                className="border-none text-gray-700 hover:text-gray-900"
                href="https://discord.gg/pwtSm9KWSv"
              >
                Discord
              </a>
            </li>
          </>
        )}
        rightNav={(
          <>
            <li>
              <Link
                href="https://chivalrous-period-295.notion.site/141c80fa0d47809f8f19ff1e30087235?pvs=105"
                className="border-none text-gray-700 hover:text-gray-900"
              >
                Register
              </Link>
            </li>

          </>
        )}
      >
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </BaseTemplate>
    </>
  );
}
