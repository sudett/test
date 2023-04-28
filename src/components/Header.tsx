import React from "react";
import { useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function Header({ resultsCount }: { resultsCount: number | undefined }) {
  const { state } = useLocation();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        p: 2,
        pl: 3,
        pr: 3,
        mb: 3,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIg_5hAvFzUigAy_10ptgUvkJ9qOJr9qxSRfY04dBhOQ&s"
          alt="profile image"
          style={{ width: 50, height: 50, borderRadius: "50%" }}
        />
        <Typography>{state.username}</Typography>
      </Box>

      <Box sx={{ flex: 1, position: "relative" }}>
        <InputBase
          sx={{
            border: "1px solid #f5f5f5",
            boxShadow: 2,
            p: 0.5,
            pl: 2,
            borderRadius: 0.5,
            width: "100%",
          }}
        />
        <IconButton sx={{ position: "absolute", right: 2 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Typography>{resultsCount} results</Typography>
    </Box>
  );
}

export default Header;
