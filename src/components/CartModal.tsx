import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { closeModal } from "../features/modalSlice";
import { useAppSelector, useAppDispatch } from "../hooks";

type CartModalType = {
  saveModalData: (title: string, text: string, it: number | undefined) => void;
};

function CartModal({ saveModalData }: CartModalType) {
  const theme = useTheme();
  const { isOpen, modalData } = useAppSelector((state) => state.modal);

  const [data, setData] = useState(modalData);
  console.log(data);

  const dispatch = useAppDispatch();

  const textFieldChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <Modal open={isOpen} onClose={() => dispatch(closeModal())}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "40%",
          backgroundColor: theme.palette.grey[800],
          color: theme.palette.common.white,
          p: 2,
        }}
      >
        <TextField
          name="title"
          multiline
          value={data.title}
          onChange={textFieldChangeHandler}
          sx={{
            "& .MuiInputBase-input": {
              color: "#fff",
            },
          }}
        />
        <TextField
          name="text"
          multiline
          value={data.text}
          onChange={textFieldChangeHandler}
          sx={{
            "& .MuiInputBase-input": {
              color: "#fff",
            },
          }}
        />
        <Button
          variant="contained"
          sx={{ alignSelf: "flex-end" }}
          onClick={() => saveModalData(data.title, data.text, data.it)}
        >
          save
        </Button>
      </Box>
    </Modal>
  );
}

export default CartModal;
