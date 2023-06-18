import FlexBetween from "@/components/FlexBetween";
import { Link } from "react-router-dom"
import StormIcon from '@mui/icons-material/Storm';
import { Box, Typography, useTheme } from "@mui/material";
import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard");
  return (
    <FlexBetween
      mb="0.25rem"
      p="0.5rem 0rem"
      color={palette.grey[300]}
    >
        <FlexBetween gap="0.75rem">
            <StormIcon sx={{fontSize:"30px"}} />
            <Typography variant="h4" fontSize="18px">FinStorm</Typography>
        </FlexBetween>

        <FlexBetween gap="2rem">
            <Box sx={{"&:hover" : {color : palette.primary[100]}}}>
                <Link to="/" onClick={()=>setSelected("dashboard")} style={{color : selected === "dashboard" ? "inherit" : palette.grey[700], textDecoration: "none"}}>
                    Dashboard
                </Link>
            </Box>
            <Box sx={{"&:hover" : {color : palette.primary[100]}}}>
                <Link to="/predictions" onClick={()=>setSelected("predictions")} style={{color : selected === "predictions" ? "inherit" : palette.grey[700], textDecoration: "none"}}>
                    Predictions
                </Link>
            </Box>
            
        </FlexBetween>
        
    </FlexBetween>
  );
};

export default Navbar;
