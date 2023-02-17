import { render, fireEvent } from '@testing-library/react';
import { SideBar } from 'widgets/SideBar';
import { TranslationProvider } from 'shared/lib/tests/renderWithTranslation/TranslationProvider';

describe('SideBar', () => {
    test('should render', () => {
        const { getByTestId } = render(<SideBar />, {
            wrapper: TranslationProvider,
        });
        expect(getByTestId('langSwitcher')).toBeInTheDocument();

        expect(getByTestId('sidebar')).toBeInTheDocument();
    });
    test('should toggle', () => {
        const { getByTestId } = render(<SideBar />, {
            wrapper: TranslationProvider,
        });
        const sidebar = getByTestId('sidebar');
        const button = getByTestId('toggleButton');
        fireEvent.click(button);
        expect(sidebar).toHaveClass('collapsed');
        fireEvent.click(button);
        expect(sidebar).not.toHaveClass('collapsed');
    });
});
