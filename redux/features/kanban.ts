import { KANBAN_API } from '@import/constants/url';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface Board {
  name: string;
  userId: string;
  id: string;
}

interface Column {
  id: string;
  name: string;
  boardId: string;
}

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  boardId: string;
}

interface Subtask {
  id: string;
  title: string;
  isCompleted: string;
  taskId: string;
  boardId: string;
}

interface KanbanState {
  boards: Board[];
  columns: Column[];
  tasks: Task[];
  subtasks: Subtask[];
}

const initialState = {
  boards: [],
  columns: [],
  tasks: [],
  subtasks: [],
} as KanbanState;

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

export const fetchAllBoards = createAsyncThunk('board/fetchAllBoards', async () => {
  // const response = await fetch(`${KANBAN_API}/boards`, { method: 'GET' });
  const response = await fetch(`/api/boards`, { method: 'GET' });
  const responseJson = await response.json();
  console.log(responseJson);
  return responseJson;
});

const kanbanSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    addBoard: (state: KanbanState, action: PayloadAction) => {
      const boards = [...state.boards];
      if (action.payload !== null) {
        boards.push(action.payload!);
      }
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
    addTask: (state, action: PayloadAction) => {
      const tasks = [...state.tasks];
      if (action.payload !== null) {
        tasks.push(action.payload!);
      }
      state.tasks = tasks;
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
  extraReducers: (builder) => {
    builder.addCase(fetchAllBoards.fulfilled, (state, action) => {
      state.boards = action.payload;
    });
  },
});

export const { addTask, deleteTask, addBoard, deleteBoard } =
  kanbanSlice.actions;

export default kanbanSlice.reducer;
