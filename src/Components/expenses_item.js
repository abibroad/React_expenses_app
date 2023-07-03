import React, { useContext }  from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../Context/AppContext';

const ExpenseItem = (props) => {
	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		});
	};

	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			<span>{props.name}</span>
			
			<span>£{props.cost}</span>
                
            <span>{props.category}</span> 

            <TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete>
			
		</li>
	);
};

export default ExpenseItem;