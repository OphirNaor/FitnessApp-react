import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ExerciseDetails from './pages/ExerciseDetails';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1600px' } }} m='auto'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
