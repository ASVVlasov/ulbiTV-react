import { type FC } from 'react';
import { type MemoryRouterProps } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
export const TestRouterProvider: FC<MemoryRouterProps> = ({ initialEntries, children }) => (
  <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
);
