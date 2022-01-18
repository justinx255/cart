import React, { useState } from 'react';
import Checkbox from './Components/CheckBox';

const Select = ({ list, ArrName }) => {
	const [
		isCheckAll,
		setIsCheckAll
	] = useState(false);
	const [
		isCheck,
		setIsCheck
	] = useState([]);

	const handleSelectAll = (e) => {
		setIsCheckAll(!isCheckAll);
		setIsCheck(list.map((li) => li.id));
		if (isCheckAll) {
			setIsCheck([]);
		}
	};

	const handleClick = (e) => {
		const { id, checked } = e.target;
		let b = [
			...isCheck,
			id
		];
		if (!checked) {
			b = b.filter((item) => item !== id);
		}
		setIsCheck(b);
		countSelect(b, list);
	};

	const countSelect = (isCheck, list) => {
		if (isCheck.length == list.length) {
			setIsCheckAll(true);
		}
		else {
			setIsCheckAll(false);
		}
	};

	const array = list.map(({ id, name }) => {
		return (
			<div
				style={{
					marginLeft : '3%'
				}}>
				<Checkbox
					key={id}
					type="checkbox"
					name={name}
					id={id}
					handleClick={handleClick}
					isChecked={isCheck.includes(id)}
				/>
				{name}
			</div>
		);
	});

	return (
		<div>
			<Checkbox type="checkbox" name="array" id="selectAll" handleClick={handleSelectAll} isChecked={isCheckAll} />
			{ArrName}
			{array}
		</div>
	);
};
export default Select;
