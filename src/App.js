import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configuteStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
const appRoot = document.getElementById("app");

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 500 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 200 }));
store.dispatch(setTextFilter('bill'));

setTimeout(() => {
  store.dispatch(setTextFilter('rent'));
}, 3000)

let { expenses, filters } = store.getState();
console.log(getVisibleExpenses(expenses, filters));
store.dispatch(setTextFilter('water'));
expenses = store.getState().expenses;
filters = store.getState().filters;
console.log(getVisibleExpenses(store.getState().expenses, store.getState().filters));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, appRoot);
