import logo from './logo.svg';
import './App.css';
import Select from './Select';
function App() {
	const list1 = [
		{
			id   : '1',
			name : 'A'
		},
		{
			id   : '2',
			name : 'B'
		},
		{
			id   : '3',
			name : 'C'
		},
		{
			id   : '4',
			name : 'D'
		}
	];
	const list2 = [
		{
			id   : '5',
			name : 'E'
		},
		{
			id   : '6',
			name : 'F'
		},
		{
			id   : '7',
			name : 'G'
		},
		{
			id   : '8',
			name : 'H'
		}
	];
	return (
		<div>
			<Select list={list1} ArrName="List1" />
			<Select list={list2} ArrName="List2" />
		</div>
	);
}

export default App;
