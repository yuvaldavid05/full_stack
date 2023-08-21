import './Users.css';
import { useEffect, useState } from 'react';


export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/users", {
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => setUsers(data));
    }, [])

    return (
        <div>
            <h2>משתמשים</h2>
            <table>
                <thead>
                    <tr>
                        <td>#</td>
                        <td>שם מלא</td>
                        <td>טלפון</td>
                        <td>אימייל</td>
                        <td>שם משתמש</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) => {
                            <tr key={u.id}>
                                <td>{i + 1}</td>
                                <td>{u.firstName} {u.lastName}</td>
                                <td>{u.phone}</td>
                                <td>{u.email}</td>
                                <td>{u.username}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>

        </div>
    )
}