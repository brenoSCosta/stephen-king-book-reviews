export default {
  grid: {
    container: '120rem',
    gutter: '2.8rem',
  },
  border: {
    radius: '0.6rem',
  },
  box: {
    shadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  },
  font: {
    family:
      "Merriweather,Roboto, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    weight: { light: 300, normal: 400, semiBold: 600, bold: 700 },
    sizes: {
      xxxxsmall: '0.9rem',
      xxxsmall: '1.2rem',
      xxsmall: '1.4rem',
      xsmall: '1.8rem',
      small: '2.2rem',
      medium: '2.8rem',
      large: '3.6rem',
      xlarge: '4.4rem',
      xxlarge: '5.2rem',
      xxxlarge: '6rem',
      huge: '7rem',
    },
  },
  colors: {
    primary: '#287271',
    secondary: '#F4A261',
    tertiary: '#451ec7',
    background: '#e2ebf3',
    content: '#5f63e3',
    neutral: '#7a879f',
    danger: '#ef4444',
    success: '#22c55e',
    warning: '#eab308',
    info: '#3b82f6',
  },
  spacings: {
    xxxsmall: '0.6rem',
    xxsmall: '0.8rem',
    xsmall: '1.2rem',
    small: '2rem',
    medium: '2.8rem',
    large: '3.6rem',
    xlarge: '4.4rem',
    xxlarge: '5.2rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: '0.4s ease-in-out',
    fast: '0.2s ease-in-out',
  },
} as const;
