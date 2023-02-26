import { render } from '@testing-library/react';
import { AppLink, EAppLinkSize } from 'shared/ui/AppLink/AppLink';
import { TestProvider } from 'shared/lib/tests/TestProvider';

describe('AppLink', () => {
    test('should render with props', () => {
        const { getByTestId } = render(
            <TestProvider initialEntries={[{ pathname: '/test' }]}>
                <AppLink to={'/test'} size={EAppLinkSize.S} variant="secondary" className={'test'}>
                    test app link
                </AppLink>
            </TestProvider>
        );
        const appLink = getByTestId('AppLink');
        expect(appLink).toBeInTheDocument();
        expect(appLink).toHaveTextContent('test app link');
        expect(appLink).toHaveClass(`AppLink secondary ${EAppLinkSize.S} test`);
    });
});
