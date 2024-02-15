import {StrictMode} from 'react';
import { Provider} from "react-redux";
import store from "~/store";
import * as ReactDOM from 'react-dom/client';
import App from './app';

const root = ReactDOM.createRoot(document.querySelector('#app') as HTMLElement);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);


