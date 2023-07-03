import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExpenseTotal from './Components/expenses_total';
//import PrimarySearchAppBar from './Components/app_header';
import ExpenseList from './Components/expenses_list';
import AddExpenseForm from './Components/add_expense';
import { AppProvider } from './Context/AppContext';
//import CategoryTotal from './Components/category_total';



const App = () => {

  return (
    <AppProvider>
    <div className='container'>
      <h1>Expense App </h1>
      < ExpenseTotal />
      <div><AddExpenseForm/></div>
      <div className='row mt-3'>
				<div className='col-sm'>
          <ExpenseList />
          </div>
           
        
			</div>
      </div>
      </AppProvider>
  )
};

export default App;