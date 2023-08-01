import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [],
  columns: [],
  tasks: [],
  subtasks: [],
};

// Sample structures for the objects of various types
/* Boards: {
   id,
   name
}
*/
/* Columns: {
  id,
  name,
  boardId
} */
/* tasks: {
  id,
  title,
  description,
  status: columnId,
  boardId
} */
/* subtasks: {
  id,
  title,
  isCompleted,
  taskId,
  boardId
  subtaskId: For further nesting
} */

const kanbanSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addBoard: (state, action) => {
      const boards = [...state.boards];
      boards.push(action.payload.board);
      state.boards = boards;
    },
    deleteBoard: (state, action) => {
      const boards = [...state.boards];
      const columns = [...state.columns];
      const tasks = [...state.tasks];
      const subtasks = [...state.subtasks];
      // Filter all the 3 when deleting a board
      boards.filter((board) => board.id === action.payload.boardId);
      columns.filter((column) => column.boardId === action.payload.boardId);
      tasks.filter((task) => task.boardId === action.payload.boardId);
      subtasks.filter((subtask) => subtask.boardId === action.payload.boardId);

      // Update the state with filtered items
      state.boards = boards;
      state.columns = columns;
      state.tasks = tasks;
      state.subtasks = subtasks;
    },
    /*/* The following piece of logic will be added to extra reducers*/
    /* for setting the boards on initial load*/
    /*setBoards: (state, action) => {
      state.boards = action.payload.boards;
    }, */
    addTask: (state, action) => {
      const tasks = [...state.tasks];
      tasks.push(action.payload.tasks);
      state.tasks.push(tasks);
    },
    deleteTask: (state, action) => {
      const tasks = [...state.tasks];
      const subtasks = [...state.subtasks];
      // Filter all the 3 when deleting a board
      tasks.filter((task) => task.id === action.payload.taskId);
      subtasks.filter((subtask) => subtask.taskId === action.payload.taskId);

      // Update the state with filtered items
      state.tasks = tasks;
      state.subtasks = subtasks;
    },
  },
});

export const { addTask, deleteTask, addBoard, deleteBoard } =
  kanbanSlice.actions;

export default kanbanSlice.reducer;
