import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#99A98F",
  border: "#5f767b",
  background: "#7C9070",
  containerBg: "#ffffff",
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#dfecf9",
  },
};

export const darkTheme = {
  body: "#27374D",
  border: "#021c38",
  background: "#021c38",
  containerBg: "#ffffff",
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#9DB2BF",
  },
};

export const urbanReanyDay = {
  body: "#3e7d9b",
  border: "#5e7884",
  background: "#b3c9d0",
  containerBg: "#ffffff",
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#2d4151",
  },
};

export const cityNightLifeTheme = {
  body: "#111111",
  border: "#101010",
  background: "#424242",
  containerBg: "#ffffff",
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#ffcc33",
  },
};

export const snowyCabinTheme = {
  body: "#28445d",
  border: "#004c80",
  background: "#687f8d",
  containerBg: "#ffffff",
  colors: {
    primaryColor: "#ffffff",
    secondaryColor: "#f2f6f8",
  },
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.colors.primaryColor};
    height: 100vh;

    .secondary {
      background: ${({ theme }) => theme.background} !important;
      color: ${({ theme }) => theme.colors.secondaryColor} !important;
    }

    .secondary-bg {
      background: ${({ theme }) => theme.background} !important;
    }
    
    .secondary-fg {
      color: ${({ theme }) => theme.colors.secondaryColor} !important;
    }
  }
`;
