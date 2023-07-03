// import React, { useContext } from 'react';
// import { AppContext } from '../Context/AppContext';

// const CategoryTotal = () => {
// 	const { category } = useContext(AppContext);

// 	const totalExpenses = category.reduce((total, item) => {
// 		return (total += item.cost);
// 	}, 0);

// 	return (
// 		<div className='alert alert-primary'>
// 			<span>{category}: £{totalExpenses}</span>
// 		</div>
// 	);
// };

// export default CategoryTotal;