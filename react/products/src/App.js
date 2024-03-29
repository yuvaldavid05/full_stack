import './App.css';
import React, { useEffect, useState } from 'react';
import Products from './components/Products';
import Login from './components/Login';
import Logout from './components/Logout';

export const UserContext = React.createContext();

function App() {
    const [user, setUser] = useState();
    const [isLogged, setIsLogged] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://api.shipap.co.il/login", {
            credentials: 'include',
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return res.text().then(x => {
                        throw new Error(x);
                    });
                }
            })
            .then(data => {
                setUser(data);
            })
            .catch(err => {
                setUser();
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, isLogged, setIsLogged, setLoading }}>
            <div className="App">
                <h1>ניהול מוצרים</h1>

                <div className="frame">
                    {isLogged ? <Logout /> : ''}
                    {
                        (isLogged === undefined) ?
                            (<p className='loader'>טוען...</p>) :
                            (isLogged ? <Products /> : <Login />)
                    }
                </div>
            </div>
        </UserContext.Provider>
    );
}

export default App;