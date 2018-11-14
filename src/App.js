import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
// import AppRouter from './routers/AppRouter';
import PortfolioRouter from './routers/PortfolioRouter';
const appRoot = document.getElementById("app");


ReactDOM.render(<PortfolioRouter />, appRoot);
