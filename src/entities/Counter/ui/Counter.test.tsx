import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';
import { type DeepPartial } from '@reduxjs/toolkit';
import { type TRootState } from 'app/providers/StoreProvider';
import { TestProvider } from 'shared/lib/tests/TestProvider';

describe('Counter', () => {
    let initialState: DeepPartial<TRootState>;
    beforeEach(() => {
        initialState = {
            counter: {
                value: 10,
            },
        };
        render(
            <TestProvider initialState={initialState}>
                <Counter />
            </TestProvider>
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
