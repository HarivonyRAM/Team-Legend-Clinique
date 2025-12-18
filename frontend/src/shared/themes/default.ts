import { createTheme } from "@mui/material/styles";

const primary = "#242424"
const secondary = "#0000ff"
const defaultTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: primary,
        },
        secondary: {
            main: secondary,
        },
    },
    components: {
        MuiTypography: {
            styleOverrides: { root: { color: "#dedede" } }
        }
    },
    custom: {
        background: "#241f35"
    }
})

export default defaultTheme