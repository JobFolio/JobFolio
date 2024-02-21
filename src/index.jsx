import React from "react";
import App from "../src/components/App";
import { createRoot } from "react-dom/client";
import './static/styles.css';
import { Provider } from 'react-redux';
import Store from './reducers/store.js';

const root = createRoot(document.getElementById("root"));
root.render(
<Provider store={Store}>
   (<App />);
</Provider>
);
