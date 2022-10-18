import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TestState {
  test: string;
  number: number;
}

const initialState: TestState = {
  test: 'test',
  number: 0
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setTest: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.test>
    ) => {
      state.test = action.payload;
    }
  }
});

export const getTestState = (state: { test: TestState }) => state.test;

export const { setTest } = testSlice.actions;

export default testSlice.reducer;
