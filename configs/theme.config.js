const defaultTheme = {
  bigSize: 20,
  radius: 5,
  maxWidth: 1000,
  font: {
    family: 'monospace',
    size: {
      normal: 12,
      heading: 24,
      big: 20,
    },
  },
}

export default {
  dark: {
    ...defaultTheme,
    color: {
      bg: '#222831',
      section: '#393e46',
      hightLight: '#00adb5',
      text: '#eeeeee',
    },
  },
  light: {
    ...defaultTheme,
    color: {
      bg: '#f9f7f7',
      section: '#dbe2ef',
      hightLight: '#3f72af',
      text: '#112d4e',
    },
  },
}
