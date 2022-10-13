import './App.css';
import Info from './components/info';

function App() {
	return (
		<div className="App">
			<Info />

			{/*CSS rule from the Info module doesn't work here */}

			<div className='info'>
				<h1>App component heading</h1>
				<button className='my-button'>App component button</button>
				<h2>Heading in the APP component</h2>
			</div>
		</div>
	);
}

export default App;
