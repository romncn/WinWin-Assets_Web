import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
    color: {
        base: "#843A39",
        sub: "#404143",
    },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;