import { Box, Typography, IconButton, useMediaQuery, Icon } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { shades } from "../../theme";


// imports all images from assets folder
const importAll = (r) =>
  r.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = r(item);
    return acc;
  }, {});

export const heroTextureImports = importAll(
  require.context("../../assets", false, /\.(png|jpe?g|svg)$/)
);

const MainCarousel=()=>{
    const isNonMobile = useMediaQuery("(min-width:600px)");

    return(
        <Carousel
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(onClickHandler, hasPrev, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            left: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateBeforeIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}
      renderArrowNext={(onClickHandler, hasNext, label) => (
        <IconButton
          onClick={onClickHandler}
          sx={{
            position: "absolute",
            top: "50%",
            right: "0",
            color: "white",
            padding: "5px",
            zIndex: "10",
          }}
        >
          <NavigateNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      )}>

        {Object.values(heroTextureImports).map((texture,index)=>(
            <Box key={`carousel-image-${index}`}>
                <img src={texture}
                alt={`carousel-${index}`}
                style={{
                    width: "100%",
                    height: "700px",
                    objectFit: "cover",
                    backgroundAttachment: "fixed"
                }} />

                <Box
                color="white"
                borderRadius="5px"
                textAlign="left"
                position="absolute"
                backgroundColor={isNonMobile ? "rgba(0, 0, 0, 0.8)" : "rgba(10, 10, 10, 0.7)"}
                padding="20px"
                left={isNonMobile ? "10%" : "0"}
                top={isNonMobile ? "35%" : "60%"}
                right={isNonMobile ? undefined : "0"}
                margin={isNonMobile ? undefined : "0 auto"}
                maxWidth={isNonMobile ? undefined : "240px"}
                >

                <Typography color={shades.purple[100]} fontWeight="bold" mb="15px"> New Items</Typography>
                <Typography variant="h1" mb="15px" color={shades.pink[100]}>Summer Sale</Typography>
                <Typography
                  fontWeight="bold"
                  color={shades.yellow[100]}
                  sx={{ textDecoration: "underline",
                  '&:hover': {cursor : "pointer"} }}
                  textAlign="right"
                  
                >
                  Discover More
                </Typography>

                </Box>
            </Box>
        ))}

        </Carousel>
    )
}

export default MainCarousel;