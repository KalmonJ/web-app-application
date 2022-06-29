import { Platform } from 'react-native'
import { makeTheme } from 'dripsy'

const fontName = 'Montserrat'

const webFont = (font: string) =>
  Platform.select({
    web: `${font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
     Inter-serif`,
    default: font,
  })

export const theme = makeTheme({
  text: {
    p: {
      fontSize: 16,
    },

    h1: {
      fontWeight: '600',
    },
  },

  fonts: {
    root: webFont('MontserratRegular'),
    body: webFont('MontserratRegular'),
    heading: webFont('MontserratBold'),
  },
  customFonts: {
    ['MontserratRegular']: {
      bold: webFont('MontserratBold'),
      default: webFont('MontserratRegular'),
      normal: webFont('MontserratRegular'),
      400: webFont('MontserratRegular'),
      700: webFont('MontserratBold'),
    },
  },
})

type MyTheme = typeof theme
declare module 'dripsy' {
  interface DripsyCustomTheme extends MyTheme {}
}
