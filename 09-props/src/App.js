import './App.css';
import PetInfo from './components/PetInfo';

function App() {
	return (
		<div className="App">
			<PetInfo animal="dog" age={7} />
			<PetInfo animal="cat" age={3} />
		</div>
	);
}

export default App;
