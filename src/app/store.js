import {configureStore} from '@reduxjs/toolkit';
import carReducer from "../car/carSlice"

const store=configureStore({

    reducer: {
        car: carReducer,
      },
}
);

export default store;