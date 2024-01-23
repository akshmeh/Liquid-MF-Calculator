import { configureStore } from '@reduxjs/toolkit'
import DataReducer from './reducer/DataReducer'

// eslint-disable-next-line react-refresh/only-export-components
export default configureStore({
  reducer: {
    widget: DataReducer,
  },
})