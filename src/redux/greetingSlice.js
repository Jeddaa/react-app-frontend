import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  greeting: {},
  isLoading: false,
  isError: false
};

const URL = 'http://localhost:3000/api/greetings';

export const fetchGreetings = createAsyncThunk(
  'services/fetchGreetings',
  async () => {
    try {
      const response = await axios.get(URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching greetings:', error.message);
      throw error;
    }
  }
);

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGreetings.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchGreetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.greeting = action.payload;
      })
      .addCase(fetchGreetings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export default greetingSlice.reducer;

