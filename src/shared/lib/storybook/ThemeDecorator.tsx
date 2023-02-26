import { type DecoratorFn, type Story } from '@storybook/react';
import { type CSSProperties } from 'react';

export const ThemeDecorator: DecoratorFn = (StoryComponent: Story) => {
    const styles: CSSProperties = {
        display: 'flex',
        width: '100%',
        flexWrap: 'wrap',
    };
    const flexGrow1: CSSProperties = {
        flexGrow: 1,
    };
    return (
        <div style={styles}>
            <div className={`app light`} style={flexGrow1}>
                <StoryComponent />
            </div>
            <div className={`app dark`} style={flexGrow1}>
                <StoryComponent />
            </div>
        </div>
    );
};
