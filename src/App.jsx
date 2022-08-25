import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Book from './components/Book';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Illustration from './components/Home/Illustration';
import Error from "./components/Error/Error.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer ,toast} from 'react-toastify';
export default function App() {
  const [auth, setAuth] = useState(false)
  const data = {
    username: "user",
    password: "user123"
  }
  const signIn = (username, password, check) => {
    if (username == data.username && password == data.password) {
      setAuth(true)
      toast.success('Welcome !!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }else{
      setAuth(false);
      toast.warning('Login yoki parolda xatolik!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
    if (check.user && check.parol) {
      toast.error(  'Please fill the form', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }
  return (
    <>
      <BrowserRouter>
        <div className="content w-100 vh-100 d-flex">
          <div className="main col-xl-6 col-12 h-100">
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Home isAuth={auth} signIn={signIn} />}>
                  <Route path="/" element={<Book />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
                </Route>
                <Route path='*' element={<Error />} />
              </Routes>
            </main>
          </div>
          <Illustration />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </>
  )
}
