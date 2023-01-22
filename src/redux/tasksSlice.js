import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks, addTask, deleteTask, toggleCompleted } from './operations';
import toast from 'react-hot-toast';

function handlePanding(state) {
  state.isLoading = true;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTasks.pending]: handlePanding,
    [fetchTasks.rejected]: handleRejected,
    //
    [addTask.pending]: handlePanding,
    [addTask.rejected]: handleRejected,
    //
    [deleteTask.pending]: handlePanding,
    [deleteTask.rejected]: handleRejected,
    //
    [toggleCompleted.pending]: handlePanding,
    [toggleCompleted.rejected]: handleRejected,
    //
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.items = action.payload;
      state.error = null;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
      addToast();
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
      deletedToast();
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

function addToast() {
  return toast.success(`Task successfully added!`, {
    style: {
      border: '1px solid green',
      padding: '16px',
      color: 'green',
    },
  });
}

function deletedToast() {
  return toast.success('Task deleted!', {
    style: {
      border: '1px solid #713200',
      padding: '16px',
      color: '#713200',
    },
    iconTheme: {
      primary: '#713200',
      secondary: '#FFFAEE',
    },
  });
}
