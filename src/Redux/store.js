import { configureStore } from '@reduxjs/toolkit'
import siteSlice from './siteSlice'

export default configureStore({
  reducer: {
      site: siteSlice
  }
})