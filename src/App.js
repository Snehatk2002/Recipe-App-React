import logo from './logo.svg';
import './App.css';
import AddRecipe from './components/AddRecipe';
import SearchRecipe from './components/SearchRecipe';
import DeleteRecipe from './components/DeleteRecipe';
import ViewRecipe from './components/ViewRecipe';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<AddRecipe/>} />
    <Route path='/search' element={<SearchRecipe/>} />
    <Route path='/delete' element={<DeleteRecipe/>} />
    <Route path='/view' element={<ViewRecipe/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
