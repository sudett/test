import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ModalDataType } from "../services/types";

export interface ModalState {
  isOpen: boolean;
  modalData: ModalDataType;
}

const initialState: ModalState = {
  isOpen: false,
  modalData: {
    title: "",
    text: "",
    it: undefined,
  },
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },

    closeModal: (state) => {
      state.isOpen = false;
    },

    setModalData: (state, action: PayloadAction<ModalDataType>) => {
      state.modalData = {
        title: action.payload.title,
        text: action.payload.text,
        it: action.payload.it,
      };
    },
  },
});

export const { openModal, closeModal, setModalData } = ModalSlice.actions;
export default ModalSlice.reducer;
