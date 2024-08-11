import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Listings from "./pages/Listings"
import Agents from "./pages/Agents"
import Losa from "./pages/Losa"
import Listing from './pages/Listing';
import Profile from './pages/Profile';
import MyProfile from './pages/MyProfile';
import PostListing from './pages/PostListing';

function App() {
  return (
    <div>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/agents' element={<Agents/>} />
         <Route path='/listings' element={<Listings/>} />
         <Route path='/losa' element={<Losa/>} />
         <Route path='/profile/:id' element={<Profile/>} />
         <Route path='/my-profile' element={<MyProfile/>} />
         <Route path='/new-listing' element={<PostListing/>} />
         <Route path='/listing/:id' element={<Listing/>} />
       </Routes>
    </div>
  );
}

export default App;
