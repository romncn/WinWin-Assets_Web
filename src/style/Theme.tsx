import baseStyled, { ThemedStyledInterface } from 'styled-components';

export const theme = {
    color: {
        basecolor: "#843A39",
        subcolor: "#404143",
        subfont: "#424345",
    },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;