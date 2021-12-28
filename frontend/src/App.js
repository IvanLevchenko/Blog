import './index.css';
import { BrowserRouter, Redirect, Route, Routes } from 'react-router-dom';
import { Header } from './elements/Header/Header';
import { SignIn } from './pages/SignIn/SignIn';
import { Profile } from './pages/Profile/Profile';
import { Home } from './pages/Home/Home'

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<SignIn/>} />
        <Route path="/api/v1/user/:id" element={<Profile/>} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
