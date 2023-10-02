// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Profile from "./pages/Profile" ;
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
       <Route path='/' element={<About />}/>
        <Route path='/' element={<SignIn />}/>
         <Route path='/' element={<SignOut />}/>
          <Route path='/' element={<Profile />}/>
    </Routes>
    </BrowserRouter>
  )
}
