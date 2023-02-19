import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/ui/Button';

const MainPage = () => {
    const { t } = useTranslation();
    const [error, setError] = useState(false);
    const hackThisSite = () => {
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
            <Button type="button" onClick={hackThisSite}>
                {t('Hack this site')}
            </Button>
        </div>
    );
};

export default MainPage;
