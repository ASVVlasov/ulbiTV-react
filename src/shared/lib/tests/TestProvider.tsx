import { type FC } from 'react';
import { type MemoryRouterProps } from 'react-router';

import { TestRouterProvider } from 'shared/lib/tests/TestRouterProvider';
import { type ITestStoreProviderProps, TestStoreProvider } from 'shared/lib/tests/TestStoreProvider';
import { TestTranslationProvider } from 'shared/lib/tests/TestTranslationProvider';

interface ITestProviderProps extends MemoryRouterProps, ITestStoreProviderProps {}

export const TestProvider: FC<ITestProviderProps> = ({ initialEntries, initialState, children }) => (
  <TestStoreProvider initialState={initialState}>
    <TestTranslationProvider>
      <TestRouterProvider initialEntries={initialEntries}>{children}</TestRouterProvider>
    </TestTranslationProvider>
  </TestStoreProvider>
);
