import React from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

/**
 * This component is generated as en example usage of next-i18next
 *
 * To learn more about next-i18next and i18n
 * please visit https://github.com/isaachinman/next-i18next
 */

const I18NExampleComponent: React.FC = () => {
  const { t } = useTranslation(['common', 'home']);

  return (
    <div>
      <header>
        <h2>{t('home:title')}</h2>
        <div>
          <Link href="/" locale="en">
            {t(`common:language.en`)}
          </Link>
          <Link href="/" locale="de">
            {t(`common:language.tr`)}
          </Link>
        </div>
      </header>
      <main>
        <p>{t('common:greet', { name: t`common:world` })}</p>
        <p>{t`home:someText`}</p>
      </main>
      <footer>
        <a
          href="https://github.com/isaachinman/next-i18next"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t`common:documentation`}
        </a>
      </footer>
    </div>
  );
};

export default I18NExampleComponent;
