import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import ExerciseDetails from './pages/ExerciseDetails';
import Home from './pages/Home';
import WorkoutPlans from './pages/WorkoutPlans';
import NavBar from './components/NavBar';

function App() {
  return (
    <Box width='400px' sx={{ width: { xl: '1600px' } }} m='auto'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/workoutplans' element={<WorkoutPlans />} />
        <Route path='/exercise/:id' element={<ExerciseDetails />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
