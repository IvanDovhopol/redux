import { addToast, deletedToast } from 'constans/utils';

export const fetchTaskFulfilled = (state, action) => {
  state.items = action.payload;
};

export const addTaskFulfilled = (state, action) => {
  state.items.push(action.payload);
  addToast();
};

export const deleteTaskFulfilled = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1);
  deletedToast();
};

export const toggleCompletedFulfilled = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload.id);
  state.items.splice(index, 1, action.payload);
};

export const anyPending = state => {
  state.isLoading = true;
};

export const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
