import React from "react";
import {useDispatch, useSelector} from 'react-redux';
import {Badge, Box, Icon, IconButton, Typography} from '@mui/material';
import {
    PersonOutline,
    ShoppingBagOutlined,
    MenuOutlined,
    SearchOutlined
} from '@mui/icons-material';
import {shades} from "../../theme";
import {useNavigate} from 'react-router-dom';
import { setIsCartOpen } from "../../state";



const Navbar =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.cart)

    return(
       <Box
       display="flex"
       width="100%"
       left="0"
       top="0"
       zIndex="11"
       alignItems="center"
       position="fixed"
       height="70px"
       backgroundColor="black">

       <Box
       display="flex"
       width="75%"
       margin="auto"
       justifyContent="space-between"
       alignItems="center">

       <Box
       onClick={()=>{navigate("/")}}
       sx={{ '&:hover': {cursor : "pointer"} }}
       color={shades.yellow[100]}
       borderRadius="50%"
       padding="5px"
      >
        <Typography variant="h3" fontWeight="bold">MR</Typography>
       </Box>

       <Box
       display="flex"
       justifyContent="space-between"
       columnGap="20px"
       zindex="2">

       <IconButton>
       <SearchOutlined sx={{color: `${shades.yellow[100]}`}}/>
       </IconButton>

       <IconButton>
       <PersonOutline sx={{color: `${shades.yellow[100]}`}} /> 
       </IconButton>

       <Badge
       badgeContent={cart.length}
       color="primary"
       invisible={cart.length===0}
       sx={{'&.MuiBadge-badge': {
        right: 5,
        top: 5,
        padding:"0 4px",
        height: "14px",
        minWidth: "13px",
       },}}>

       <IconButton
       onClick={()=>{
        dispatch(setIsCartOpen({}))
       }}><ShoppingBagOutlined sx={{color: `${shades.yellow[100]}`}} />
       </IconButton>
       </Badge>

       <IconButton>
       <MenuOutlined sx={{color: `${shades.yellow[100]}`}}/>
       </IconButton>

       </Box>

       </Box>



       </Box>
    )
}

export default Navbar;