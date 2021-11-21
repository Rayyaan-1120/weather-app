import {configureStore} from '@reduxjs/toolkit'
import weatherdata from './weatherdata'


export const store = configureStore({
    reducer:{
      data:weatherdata
    },

})