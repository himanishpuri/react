import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{
    id: 1,
    text: "hello world",
  }]
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      }
      state.todos.push(todo)
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter(val => val.id !== action.payload);
    },

    updateTodo: (state, action) => {
      state.todos = state.todos.map(val => {
        if (val.id === action.payload.id) {
          return {...val, text: action.payload.text};
        } else return val;
      })
    },
  }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer;