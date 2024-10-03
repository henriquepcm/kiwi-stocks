import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
     ModalsAndMenuState,
     ToggleModalPayload,
} from "./modalsAndMenuSliceType";

const initialState: ModalsAndMenuState = {
     manageStocks: { isOpen: false },
     manageIndicators: { isOpen: false },
     menu: { isOpen: false },
};

export const modalsAndMenuSlice = createSlice({
     name: "modalsAndMenu",
     initialState,
     reducers: {
          toggleModal: (state, action: PayloadAction<ToggleModalPayload>) => {
               const { modalName, isOpen } = action.payload;
               state[modalName].isOpen = isOpen;
               state.menu.isOpen = false;
          },
          toggleMenu: (state) => {
               state.menu.isOpen = !state.menu.isOpen;
          },
          reset: () => initialState,
     },
});

export const { toggleModal, toggleMenu, reset } = modalsAndMenuSlice.actions;
export const modalsAndMenuReducer = modalsAndMenuSlice.reducer;
