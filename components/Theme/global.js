import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
:root {
  --color-primary: ${({ theme }) => theme.color_primary};
  --color-secondary: ${({ theme }) => theme.color_secondary};
  --color-tertiary: ${({ theme }) => theme.color_tertiary};
  --cursor-default: ${({ theme }) => theme.cursor_default};
  --cursor-pointer: ${({ theme }) => theme.cursor_pointer};
}
`
