import './index.css';
import { BrowserRouter, Redirect, Route, Routes } from 'react-router-dom';
import { Header } from './elements/Header/Header';
import { SignIn } from './pages/SignIn/SignIn';
import { Profile } from './pages/Profile/Profile';
import { Home } from './pages/Home/Home'
import { CreatePostPage } from './pages/CreatePostPage/CreatePostPage'
import  EditProfilePage  from './pages/EditProfilePage/EditProfilePage' 

function App() {
  return (
   <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/feed" element={<Home/>} />
        <Route path="/api/v1/user/:id" element={<Profile/>} />
        <Route path="/create-post" element={<CreatePostPage/>} />
        <Route path="/edit/:token" element={<EditProfilePage />} />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
