import type { NextPage } from 'next';
import styles from './about.module.scss';
import { useTranslation } from 'react-i18next';

const About: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.titles}>
          <div>Express 24</div>
          <div>{t('delivery')}</div>
        </div>
        <div className={styles.texts}>
          <div>{t('deliverytext1')}</div>
          <div>{t('deliverytext2')}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
