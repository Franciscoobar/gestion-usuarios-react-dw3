import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    fetchUsers();
}, []);

const fetchUsers = async () => {
    try {
    const response = await fetch('https://674a7bd58680202966349ab4.mockapi.io/users');
    const data = await response.json();
    setUsers(data);
    } catch (error) {
    console.error('Error al obtener usuarios: ', error);
    }
};

return (
    <div>
    <h1>Lista de Usuarios</h1>
    <Link to="/create">Crear Usuario</Link>
    <ul>
        {users.map(user => (
        <li key={user.id}>
            {user.name} - {user.email}
            <Link to={`/users/${user.id}`}> Ver Detalles </Link>
        </li>
        ))}
    </ul>
    </div>
);
};

export default UserList;
