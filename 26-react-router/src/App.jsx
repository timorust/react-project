import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home'
import Contacts from './components/Contacts'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout';
import Skills from './components/Skills';
import SingleSkill from './components/SingleSkill';
import './App.css';



function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path='/' element={<MainLayout />}>
						<Route index element={<Home />} />
						<Route path='*' element={<NotFound />} />
						<Route path='about' element={<About />} />
						<Route path='contacts' element={<Contacts />} />
						<Route path='skills' element={<Skills />} />
						<Route path='skills/:skillSlug' element={<SingleSkill />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
