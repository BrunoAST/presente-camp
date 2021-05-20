import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from '@material/Theme';

import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes/index';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes/>
            </BrowserRouter>
        </ThemeProvider>
    );
}


export default App;
