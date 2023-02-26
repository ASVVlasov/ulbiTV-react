import { fireEvent, render, screen } from '@testing-library/react';
import { TestStoreProvider } from 'shared/lib/tests/TestStoreProvider';
import { Counter } from './Counter';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type IStateSchema } from 'app/providers/StoreProvider';
import { TranslationProvider } from 'shared/lib/tests/renderWithTranslation/TranslationProvider';

describe('Counter', () => {
    let initialState: DeepPartial<IStateSchema>;
    beforeEach(() => {
        initialState = {
            counter: {
                value: 10,
            },
        };
        render(
            <TestStoreProvider initialState={initialState}>
                <TranslationProvider>
                    <Counter />
                </TranslationProvider>
            </TestStoreProvider>
        );
    });
    test('should render with initial state', () => {
        expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
    });
    test('should increment value', () => {
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
    });
    test('should decrement value', () => {
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
    });
});
