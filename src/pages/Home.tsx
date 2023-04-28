import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        paddingTop: "200px",
      }}
    >
      <Link to="/login">
        <Button sx={{ fontSize: 20 }} variant="contained">
          Login
        </Button>
      </Link>
    </Box>
  );
}

export default Home;
