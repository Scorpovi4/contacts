import { configureStore } from '@reduxjs/toolkit'
import contactsSlice from './contacts'

const store = configureStore({
    reducer: contactsSlice
})

export default store