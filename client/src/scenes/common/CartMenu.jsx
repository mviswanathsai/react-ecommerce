import {Box, Button, Divider, IconButton, Typography } from '@mui/material';
import { useSelector, useDispatch} from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {shades} from "../../theme";
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen
} from "../../state";
import { useNavigate } from 'react-router-dom';
import styled from "@emotion/styled";
import ItemDetails from '../itemDetails/ItemDetails';



const FlexBox = styled(Box)`
display:flex;
justify-content: space-between;
align-items: center;
`

const CartMenu =()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const cart = useSelector((state)=> state.cart.cart);
    const isCartOpen = useSelector((state)=> state.cart.isCartOpen);

    const totalPrice = cart.reduce((total, item)=>{
        return total + item.count * item.attributes.price
    }, 0)

    return (
        <Box  //overlay
        display={isCartOpen ? "block": "none"}
        height="100%"
        width="100%"
        position="fixed"
        backgroundColor="rgba(0,0,0,0.4)"
        left="0"
        top="0"
        overflow="auto"
        zIndex="33"
        
        >

        <Box //modal
        position="fixed"
        width ="max(400px, 30%)"
        height="100%"
        right="0"
        bottom="0"
        backgroundColor="black"
        >

        <Box
        height="100%"
        padding="30px"
        overflow="auto">

        {/* Header */}

        <FlexBox mb="15px">
        <Typography fontSize="20px" color={shades.yellow[100]}>
            SHOPPING BAG ({cart.length})
        </Typography>
        <IconButton
        onClick={()=>{
            dispatch(setIsCartOpen({}))
        }}
        >
        <CloseIcon sx={{color:"white"}}/>
        </IconButton>
        </FlexBox>

        {/* Cart list */}

        <Box>
            {cart.map((item) =>
                (
                    <Box key={`${item.attributes.name} - ${item.id}`}>
                    <FlexBox p="15px 0">
                    <Box flex="1 1 40%">
                        <img 
                        alt={item?.name}
                        width="123px"
                        height="164px"
                        src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
                        ></img>
                    </Box>
                    <Box flex="1 1 60%">
                    <FlexBox mb="5px">
                        <Typography fontWeight="bold" color={shades.purple[100]}> 
                        {item.attributes.name}
                        </Typography>
                        <IconButton onClick={()=>
                            dispatch(removeFromCart({ id: item.id }))
                        }>
                            <CloseIcon sx={{color:`${shades.yellow[100]}`}}/>
                        </IconButton>
                    </FlexBox>
                    <Typography color="white"> {item.attributes.shortDescription} </Typography>


                    {/* Amount */}
                    <FlexBox m="15px 0">
                        <Box
                        display="flex"
                        alignItems="center"
                        border={`1.5px solid white`}>
                        <IconButton onClick={()=>{
                            dispatch(decreaseCount ({id: item.id}));
                        }}>
                            <RemoveIcon sx={{color:`${shades.pink[100]}`}}/>
                        </IconButton>
                        
                        <Typography color={shades.yellow[100]}>{item.count}</Typography>
                        <IconButton onClick={()=>{
                            dispatch(increaseCount ({id: item.id}));
                        }}>
                            <AddIcon sx={{color: `${shades.pink[100]}`}}/>
                        </IconButton>
                        

                        </Box>

                        {/* Price */}

                    <Typography fontWeight="bold" color="white">
                        {item.attributes.price}
                    </Typography>

                    </FlexBox>

                    

                    </Box>

                    </FlexBox>
                    <Divider />
                    </Box>
                )
            )}
        </Box>

        {/* Actions */}

        <Box m="20px 0">
        <FlexBox m="20px 0">
        <Typography color="white" fontWeight="bold">SUBTOTAL</Typography>
        <Typography color="white" fontWeight="bold">${totalPrice}</Typography>
        </FlexBox>
        <Button
        sx={{
            backgroundColor: `${shades.yellow[100]}`,
            color: `${shades.pink[100]}`,
            borderRadius: 0,
            minWidth: "100%",
            padding: "20px 40px",
            m: "20px 0",
            fontWeight: "bold",
            "&:hover":{
                backgroundColor:`${shades.yellow[100]}`,
                opacity: "0.7",
            }
        }}
        onClick={()=>{
            navigate("checkout");
            dispatch(setIsCartOpen({}));
        }}>
        CHECKOUT
        </Button>

        </Box>

        </Box> 

        </Box>
       
        </Box>
    )

}

export default CartMenu;