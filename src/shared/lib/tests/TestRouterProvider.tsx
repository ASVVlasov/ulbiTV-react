import { type FC } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { type MemoryRouterProps } from 'react-router';
interface ITestRouterProps extends MemoryRouterProps {}
export const TestRouterProvider: FC<ITestRouterProps> = ({
    initialEntries,
    children,
}) => <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>;
