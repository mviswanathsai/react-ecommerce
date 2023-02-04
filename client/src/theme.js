import { createChainedFunction } from '@mui/material';
import { createTheme } from '@mui/material/styles';


export const shades = {
    pink:{
        100:"#FD8A8A"
    },
    yellow:{
        100:"#F1F7B5"
    },
    green:{
        100:"#A8D1D1"
    },
    purple:{
        100:"#9EA1D4"
    }

}

export const colors = {

    primary:{
        100: "#fed0d0",
        200: "#fec5c5",
        300: "#feb9b9",
        400: "#feadad",
        500: "#fd8a8a",
        600: "#e47c7c",
        700: "#b16161",
        800: "#985353",
        900: "#653737",
    },

    secondary:{
        100: "#f7fad3",
        200: "#f5f9cb",
        300: "#f4f9c4",
        400: "#f2f8bc",
        500: "#f1f7b5",
        600: "#d9dea3",
        700: "#c1c691",
        800: "#a9ad7f",
        900: "#91946d",
    },

    neutral:{
        100: "#666666",
        200: "#4d4d4d",
        300: "#333333",
        400: "#1a1a1a",
        500: "#000000",
        600: "#000000",
        700: "#000000",
        800: "#000000",
        900: "#000000",
    }

}


export const theme = createTheme({
    palette:{

        pink:{
            main: shades.pink
        },
        yellow:{
            main: shades.yellow
        },
        green:{
            main: shades.green
        },
        purple:{
            main: shades.purple
        },

        primary: {
            main: colors.primary[500],
        },
        secondary:{
            main: colors.secondary[500],
        },
        neutral: {
            main: colors.neutral[500],
        },
        
        
    },

    typography:{
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 11,
        h1:{
            fontFamily: ["Cormorant Garamond", "serif"].join(","),
            fontSize: 48,
        },
        h2:{
            fontFamily: ["Cormorant Garamond", "serif"].join(","),
            fontSize: 36,
        },
        h3:{
            fontFamily: ["Cormorant Garamond", "serif"].join(","),
            fontSize: 20,
        },
        h4:{
            fontFamily: ["Cormorant Garamond", "serif"].join(","),
            fontSize: 14,
        }
       
    }
})
