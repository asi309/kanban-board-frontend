import { configureStore } from '@reduxjs/toolkit';

import kanbanReducer from '../features/kanban';

export const store = configureStore({
  reducer: {
    kanban: kanbanReducer,
  },
});
