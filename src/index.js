import React from "react";
import reactDOM from 'react-dom/client'
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./Redux/store";

const root = reactDOM.createRoot(document.getElementById('root'))
root.render(
        <BrowserRouter>
                <Provider store={store}>
                        <App />
                </Provider>
        </BrowserRouter>

)

