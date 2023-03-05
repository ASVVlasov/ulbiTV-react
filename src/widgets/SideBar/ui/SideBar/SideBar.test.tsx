import { fireEvent, render } from '@testing-library/react';

import { SideBar } from 'widgets/SideBar';

import { TestProvider } from 'shared/lib/tests/TestProvider';

describe('SideBar', () => {
  test('should render', () => {
    const { getByTestId } = render(<SideBar />, {
      wrapper: TestProvider,
    });
    expect(getByTestId('langSwitcher')).toBeInTheDocument();

    expect(getByTestId('sidebar')).toBeInTheDocument();
  });
  test('should toggle', () => {
    const { getByTestId } = render(<SideBar />, {
      wrapper: TestProvider,
    });
    const sidebar = getByTestId('sidebar');
    const button = getByTestId('toggleButton');
    fireEvent.click(button);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(button);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});
