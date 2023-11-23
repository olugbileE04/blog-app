
import './App.css'
import Login from './login/Login'
import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'

import Write from './pages/write/Write'
import SinglePost from './singlePost/SinglePost'

import TopBar from './topbar/TopBar'
import { BrowserRouter as Router,Routes, Route, Navigate,  } from 'react-router-dom';



function App() {




  const user = true;
 

  return (
    <Router>
    <TopBar />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact
        path="/login"
        element={user ? <Navigate to="/" /> : <Login />}
      />
      <Route
        exact path="/register"
        element={user ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/settings"
        element={user ? <Settings /> : <Navigate to="/" />}
      />
      <Route path="singlePost" element={user? <SinglePost /> : <Navigate  to= "/"/>} />
      <Route
        path="/write"
        element={user ? <Write /> : <Navigate to="/" />}
      />
    </Routes>
  </Router>
  )
}

export default App
