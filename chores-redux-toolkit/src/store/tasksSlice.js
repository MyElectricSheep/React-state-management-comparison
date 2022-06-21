import { createSlice, createAction, nanoid } from '@reduxjs/toolkit';

const createTask = (title) => ({
  id: nanoid(),
  title,
  complete: false,
  assignedTo: ''
});

const initialState = [
  createTask('Order more wine'),
  createTask('Water the plants'),
  createTask('Go running')
];

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      const task = createTask(action.payload);
      state.push(task);
    },
    toggle: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.complete = action.payload.complete;
    },
    assignToUser: (state, action) => {
      const task = state.find((task) => task.id === action.payload.taskId);
      task.assignedTo = action.payload.humanId;
    }
  }
});

// custom action creator
export const toggleTask = createAction('tasks/toggle', (taskId, complete) => ({
  payload: { taskId, complete }
}));
