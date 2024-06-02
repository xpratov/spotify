'use client'
import { createSlice } from "@reduxjs/toolkit";



export const playlistSlice=createSlice({
  name:"playlist",
  initialState:{
    selected_playlist_id: "37i9dQZF1DXcBWIGoYBM5M",
    likeds: localStorage.getItem("likeds") ? JSON.parse(localStorage.getItem("likeds")!) : [],
  },

  reducers: {
    select_playlist: (state, action) => {
      state.selected_playlist_id = action.payload;
      console.log(action.payload);
    },
    like: (state, action) => {
      if (state.likeds.includes(action.payload)){
        state.likeds=state.likeds.filter((item)=>item!==action.payload)
        localStorage.setItem("likeds", JSON.stringify(state.likeds));
        return;
      }
      state.likeds.push(action.payload);
      localStorage.setItem("likeds", JSON.stringify(state.likeds));
    },
  },
})

export const {select_playlist, like}=playlistSlice.actions