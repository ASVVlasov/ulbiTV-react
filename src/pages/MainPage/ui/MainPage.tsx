import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

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
            <button type="button" onClick={hackThisSite}>
                {t('Hack this site')}
            </button>
        </div>
    );
};

export default MainPage;
