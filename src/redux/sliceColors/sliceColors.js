const { createSlice } = require("@reduxjs/toolkit");
const { initializeConnect } = require("react-redux/es/components/connect");


const sliceColors = createSlice({
    name: "Colors",
    initialState: {
        favoriteColor: "",
    },
    reducers: {
       getFavoriteColor (state, action) {
        state.favoriteColor = action.payload
        
       }
    }
})

export const { getFavoriteColor } = sliceColors.actions;
export default sliceColors.reducer;