import { render, screen } from '@testing-library/react';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

describe('ThemeSwitcher', () => {
  test('should render', () => {
    render(<ThemeSwitcher />);
    expect(screen.getByTestId('theme-switcher')).toBeInTheDocument();
  });
});
