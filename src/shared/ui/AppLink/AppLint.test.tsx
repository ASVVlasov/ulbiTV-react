import { render } from '@testing-library/react';
import { AppLink, EAppLinkSize } from 'shared/ui/AppLink/AppLink';
import { TestRouterProvider } from 'shared/lib/tests/TestRouterProvider';

describe('AppLink', () => {
    test('should render with props', () => {
        const { getByTestId } = render(
            <TestRouterProvider initialEntries={[{ pathname: '/test' }]}>
                <AppLink
                    to={'/test'}
                    size={EAppLinkSize.S}
                    variant="secondary"
                    className={'test'}
                >
                    test app link
                </AppLink>
            </TestRouterProvider>
        );
        const appLink = getByTestId('AppLink');
        expect(appLink).toBeInTheDocument();
        expect(appLink).toHaveTextContent('test app link');
        expect(appLink).toHaveClass(`AppLink secondary ${EAppLinkSize.S} test`);
    });
});
