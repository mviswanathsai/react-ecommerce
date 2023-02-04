import { Box, InputBase, Divider, Typography, IconButton } from "@mui/material";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import { useState } from "react";
import { shades } from "../../theme";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  return (
    <Box width="100%" margin="80px auto 0 auto" textAlign="center" p="10px" backgroundColor="white">
    <Box width="80%" mx="auto">
      <IconButton>
        <MarkEmailReadOutlinedIcon fontSize="large" sx={{color: `${shades.purple[100]}`}} />
      </IconButton>
      <Typography variant="h3" >Subscribe To Our Newsletter</Typography>
      <Typography color={shades.pink[100]}>
        and receive $20 coupon for your first order when you checkout
      </Typography>
      <Box
        p="2px 4px"
        m="15px auto"
        display="flex"
        alignItems="center"
        width="75%"
        backgroundColor="#F2F2F2"
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          color={`${shades.yellow[100]}`}
        />
        <Divider sx={{ height: 28 }} orientation="vertical" />
        <Typography sx={{ p: "10px", ":hover": { cursor: "pointer" } }}>
          Subscribe
        </Typography>
      </Box>
      </Box>
    </Box>
  );
};

export default Subscribe;