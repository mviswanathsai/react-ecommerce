import React from "react";
import {useDispatch} from 'react-redux';
import {IconButton, Box, Typography, useTheme, Button} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {shades} from "../theme";
import {
    addToCart
} from "../state";
import { useNavigate } from 'react-router-dom';


const Item=({item, width})=>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = React.useState(1);
    const [isHovered, setIsHovered] = React.useState(false);

    const {category, price, name, image} = item.attributes;
    const{
        data:{
            attributes:{
                formats:{
                    medium:{
                        url
                    }
                }
            }
        }
    } = image;

    return (
        <Box width={width} color={shades.yellow[100]}>
            <Box position="relative" 
            onMouseOver={()=>{
                setIsHovered(true);
            }}
            onMouseOut={()=>{
                setIsHovered(false);
            }}>
                <img alt={item.name} 
                width="300px" 
                height="400px"
                src={`http://localhost:1337${url}`}
                onClick={()=>{
                    navigate(`item/${item.id}`);
                }}></img>


                <Box
                position="absolute"
                display={isHovered ? "block" : "none"}
                padding= "0 5%"
                bottom="10%"
                left="0"
                width="100%"
                >
                    <Box 
                    display="flex"
                    justifyContent="space-between">
                        <Box
                        display= "flex"
                        alignItems="center"
                        borderRadius="3px"
                        backgroundColor="black"
                        >
                        
                        <IconButton onClick={()=>{
                            dispatch(setCount(Math.max(count-1, 1)));
                        }}>
                            <RemoveIcon sx={{color: `${shades.yellow[100]}`, "&:hover": {
                             color: `${shades.pink[100]}`
                         }}}/>
                        </IconButton>
                        <Typography color="white">{count}</Typography>
                        <IconButton onClick={()=>{
                            dispatch(setCount(count+1));
                        }}>
                            <AddIcon sx={{color: `${shades.yellow[100]}`, "&:hover": {
                             color: `${shades.pink[100]}`
                         }}}/>
                        </IconButton>

                        </Box>
                        <Button onClick={()=>{
                            dispatch(addToCart({item:{...item, count}}));
                        }} sx={{backgroundColor:"black",color: `${shades.yellow[100]}`, "&:hover": {
                           backgroundColor:"rgba(0,0,0,1)", color: `${shades.pink[100]}`
                         }}}>Add to cart</Button>
                    </Box>
                </Box>
                
            </Box>
            <Box mt="3px">
            
            <Typography variant="h2" color={shades.purple[100]}>{name}</Typography>
            <Typography color={shades.yellow[100]}>
            {category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
            </Typography>
            <Typography color={shades.pink[100]}>${price}</Typography>
            </Box>
        </Box>
    )

}

export default Item;