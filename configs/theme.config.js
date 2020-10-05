const defaultTheme = {
  smallSize: 12,
  normalSize: 14,
  headingSize: 16,
  bingSize: 20,
  radius: 5,
  maxWidth: 1000,
}

export default {
  dark: {
    ...defaultTheme,
    bgColor: '#222831',
    sectionColor: '#393e46',
    hightLightColor: '#00adb5',
    textColor: '#eeeeee',
  },
  light: {
    ...defaultTheme,
    bgColor: '#f9f7f7',
    sectionColor: '#dbe2ef',
    hightLightColor: '#3f72af',
    textColor: '#112d4e',
  },
}
