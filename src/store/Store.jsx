import { configureStore } from '@reduxjs/toolkit'
import tvReducer from './reducers/tvSlicer'
import movieReducer from './reducers/movieSlicer'
import personReducer from './reducers/personSlicer'

export const store = configureStore({
    reducer: {
        tv: tvReducer,
        movie: movieReducer,
        person: personReducer
    }
})