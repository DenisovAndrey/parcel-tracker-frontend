import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Checkpoint } from '../../types/Checkpoint';
import { checkpointsService } from '../../services/checkpointsService';
import type { RootState } from '../index';

export interface CheckpointsState {
  checkpoints: Checkpoint[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CheckpointsState = {
  checkpoints: [],
  isLoading: false,
  error: null,
};

// Create an async thunk to fetch checkpoints
export const fetchCheckpoints = createAsyncThunk(
  'checkpoints/fetchCheckpoints',
  async (trackingNumber: string) => checkpointsService.getCheckpoints(trackingNumber),
);

// Create a checkpoints slice
export const checkpointsSlice = createSlice({
  name: 'checkpoints',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCheckpoints.pending, (state) => ({
        ...state,
        isLoading: true,
        error: null,
      }))
      .addCase(fetchCheckpoints.fulfilled, (state, action: PayloadAction<Checkpoint[]>) => ({
        ...state,
        isLoading: false,
        checkpoints: action.payload,
      }))
      .addCase(fetchCheckpoints.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error.message || 'Failed to fetch checkpoints',
      }));
  },
});

export default checkpointsSlice.reducer;
