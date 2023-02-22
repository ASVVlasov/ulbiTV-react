import { type FC } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { type MemoryRouterProps } from 'react-router';
export const TestRouterProvider: FC<MemoryRouterProps> = ({
    initialEntries,
    children,
}) => <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>;
