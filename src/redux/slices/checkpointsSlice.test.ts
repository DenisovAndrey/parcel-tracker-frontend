import {
  fetchCheckpoints,
  CheckpointsState, checkpointsSlice,
} from './checkpointsSlice';

const initialState: CheckpointsState = {
  checkpoints: [],
  isLoading: false,
  error: null,
};

describe('checkpointsSlice', () => {
  it('should handle fetchCheckpoints.fulfilled', () => {
    const prevState = { ...initialState, isLoading: true };

    const mockCheckpoint = {
      trackingNumber: 'TRACK123',
      location: 'Location A',
      timestamp: '2023-09-07T10:00:00Z',
      status: 'Delivered',
      statusText: 'Package delivered successfully',
      statusDetails: 'Out for delivery',
    };

    const nextState = checkpointsSlice.reducer(
      prevState,
      fetchCheckpoints.fulfilled([mockCheckpoint], '', 'test@example.test'),
    );

    expect(nextState.isLoading).toBe(false);
    expect(nextState.checkpoints).toHaveLength(1);
    expect(nextState.checkpoints[0]).toEqual(mockCheckpoint);
  });

  it('should handle fetchCheckpoints.rejected', () => {
    const prevState = { ...initialState, isLoading: true };
    const errorMessage = 'An error occurred';
    const nextState = checkpointsSlice.reducer(
      prevState,
      fetchCheckpoints.rejected(new Error(errorMessage), '', 'test@example.test'),
    );

    expect(nextState.isLoading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
  });
});
