import { configureStore } from "@reduxjs/toolkit";
import Submit from "../reducers/Submit";

export const store = configureStore({
    reducer : {
        submit : Submit
    }
})