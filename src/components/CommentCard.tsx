import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useAppDispatch } from "../hooks";
import { setModalData, openModal } from "../features/modalSlice";
import { ModalDataType } from "../services/types";

type CommentCard = ModalDataType;

function CommentCard({ title, text, it }: CommentCard) {
  const dispatch = useAppDispatch();

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{ cursor: "pointer" }}
      onClick={() => {
        dispatch(
          setModalData({
            title,
            text,
            it,
          })
        );
        dispatch(openModal());
      }}
    >
      <Paper elevation={3} sx={{ p: 3, height: "90%" }}>
        <Typography variant="h5" sx={{ pb: 4, textAlign: "center" }}>
          {title}
        </Typography>
        <Typography sx={{ textAlign: "center" }}>{text}</Typography>
      </Paper>
    </Grid>
  );
}

export default CommentCard;
