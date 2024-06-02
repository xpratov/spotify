'use client'
import { configureStore } from "@reduxjs/toolkit";
import { playlistSlice, select_playlist } from "./playlistSlice";




export const store=configureStore({
  reducer: playlistSlice.reducer
})

