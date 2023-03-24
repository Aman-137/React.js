import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

const Routing = () => {
  return (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </nav>
            
        </div>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/users' element={<Users />} />
        </Routes>
    </Router>
  )
}

function Home() {
    return <h1>Hello Home</h1>
}

function About() {
    return <h2>About</h2>
}

function Users() {
    return <h2>Users</h2>
}

export default Routing
