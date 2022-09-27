import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import Login from '../Login/Login';
import Home from './home.js'

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    })

  return (
    <div>
        {user ? <Home /> : <Login/>}
    </div>
  )
}

export default Dashboard