import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

function Footer() {
  const {
    palette: { neutral },
  } = useTheme();
  return (
    <Box padding="40px 0" backgroundColor="black">
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        flexWrap="wrap"
        rowGap="30px"
        columnGap="clamp(20px, 30px, 40px)"
      >
        <Box width="clamp(20%, 30%, 40%)">
          <Typography
            variant="h4"
            fontWeight="bold"
            mb="30px"
            color={shades.yellow[100]}
          >
            ECOMMER
          </Typography>
          <Box color={shades.pink[100]}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </Box>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.yellow[100]}>
            About Us
          </Typography>
          <Typography mb="30px" color={shades.pink[100]}>Careers</Typography>
          <Typography mb="30px" color={shades.pink[100]}>Our Stores</Typography>
          <Typography mb="30px" color={shades.pink[100]}>Terms & Conditions</Typography>
          <Typography mb="30px" color={shades.pink[100]}>Privacy Policy</Typography>
        </Box>

        <Box>
          <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.yellow[100]}>
            Customer Care
          </Typography>
          <Typography mb="30px" color={shades.pink[100]}>Help Center</Typography>
          <Typography mb="30px" color={shades.pink[100]}>Track Your Order</Typography>
          <Typography mb="30px" color={shades.pink[100]}>Corporate & Bulk Purchasing</Typography>
          <Typography mb="30px" color={shades.pink[100]}>Returns & Refunds</Typography>
        </Box>

        <Box width="clamp(20%, 25%, 30%)">
          <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.yellow[100]}>
            Contact Us
          </Typography>
          <Typography mb="30px" color={shades.pink[100]}>
            50 north Whatever Blvd, Washington, DC 10501
          </Typography>
          <Typography mb="30px" sx={{ wordWrap: "break-word" }} color={shades.pink[100]}>
            Email: mredwardroh@gmail.com
          </Typography>
          <Typography mb="30px" color={shades.pink[100]}>(222)333-4444</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;