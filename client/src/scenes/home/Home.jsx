import React from "react";
import MainCarousel from "./MainCarousel";
import ShoppingList from "./ShoppingList";
import Subscribe from "./Subscribe";
import { Box } from "@mui/material";
import { colors } from "../../theme";

const Home =()=>{
    return(
        <Box  backgroundColor={colors.secondary[100]}>
        <MainCarousel />
        <ShoppingList />
        <Subscribe />

        </Box>
    )
}

export default Home;