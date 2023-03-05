import { type FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter';

import { Button } from 'shared/ui/Button/ui/Button';

const MainPage: FC = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);
  const hackThisSite = (): void => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <div>
      {t('Главная')}

      <Counter />
      <Button type="button" onClick={hackThisSite}>
        {t('Hack this site')}
      </Button>
    </div>
  );
};

export default MainPage;
