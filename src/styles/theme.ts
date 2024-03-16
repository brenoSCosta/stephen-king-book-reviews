export default {
  grid: {
    container: "120rem",
    gutter: "2.8rem",
  },
  border: {
    radius: "0.6rem",
  },
  box: {
    shadow: "0 10px 10px rgba(0, 0, 0, 0.1)",
  },
  font: {
    family:
      "Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semiBold: 600,
    bold: 700,
    sizes: {
      xxxxsmall: "0.9rem",
      xxxsmall: "1.2rem",
      xxsmall: "1.4rem",
      xsmall: "1.8rem",
      small: "2.2rem",
      medium: "2.8rem",
      large: "3.6rem",
      xlarge: "4.4rem",
      xxlarge: "5.2rem",
      xxxlarge: "6rem",
      huge: "7rem",
    },
  },
  colors: {
    primary: "#5525f4",         
    secondary: "#8e4106",
    tertiary: '#6d5ba9',
    background: "#e2ebf3",
    content: '#1d2839',
    neutral: '#7a879f',
  },
  spacings: {
    xxxsmall: "0.6rem",
    xxsmall: "0.8rem",
    xsmall: "1.2rem",
    small: "2rem",
    medium: "2.8rem",
    large: "3.6rem",
    xlarge: "4.4rem",
    xxlarge: "5.2rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: "0.4s ease-in-out",
    fast: "0.2s ease-in-out",
  },
} as const;
