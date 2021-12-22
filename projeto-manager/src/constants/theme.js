import { createTheme } from '@mui/material/styles'
import { primaryColor, neutraColor } from './color'

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: 'white',

        },
        secondary: {
            light: '#ba68c8',
            main: '#9c27b0',
            // dark: will be calculated from palette.secondary.main,
            contrastText: '#fff',
          },
        text:{
            primary:neutraColor
        }
    }
})
export default theme;