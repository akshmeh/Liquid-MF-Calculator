import { createSlice } from '@reduxjs/toolkit'

export const DataReducer = createSlice({
  name: 'data',
  initialState: {
    value: [],
  },
  reducers: {
     handleDrop :(state , action)=>{
      // setWidget([...widget,{widgetType}])
      const payload = action.payload
      state.value = [...state.value,payload]
    },
    setCopyData:(state,action)=>{
      state.value[action.payload.id].heading  = action.payload.data.heading
      state.value[action.payload.id].content  = action.payload.data.content
      state.value[action.payload.id].contentTwo  = action.payload.data.contentTwo
      state.value[action.payload.id].imageURL  = action.payload.data.imageURL
    },
    deleteData:(state,action)=>{
      state.value.splice(action.payload,1)
    }
  },
})

// Action creators are generated for each case reducer function
// eslint-disable-next-line react-refresh/only-export-components
export const {  handleDrop, setCopyData, deleteData } = DataReducer.actions

export default DataReducer.reducer