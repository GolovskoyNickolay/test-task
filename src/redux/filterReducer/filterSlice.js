import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    vehicleType: {
      panelTruck: false,
      fullyIntegrated: false,
      alcove: false,
    },
    vehicleEquipment: {
      radio: false,
      gas: false,
      microwave: false,
      refrigerator: false,
      bathroom: false,
      kitchen: false,
      automatic: false,
      AC: false,
      TV: false,
      water: false,
    },
    location: "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleFilter: (state, action) => {
      const { category, key } = action.payload;

      if (category === "vehicleType") {
        Object.keys(state[category]).forEach((filterKey) => {
          state[category][filterKey] = filterKey === key;
        });
      } else {
        state[category][key] = !state[category][key];
      }
    },
    resetFilters: (state) => {
      Object.keys(state).forEach((category) => {
        if (typeof state[category] === "object") {
          Object.keys(state[category]).forEach((key) => {
            state[category][key] = false;
          });
        }
      });
      state.location = "";
    },
  },
});

export const filterReducer = slice.reducer;
export const { toggleFilter, resetFilters, setLocation } = slice.actions;
