import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
const [user, setUser] = useState({});
const { id } = useParams();

useEffect(() => {
    fetchUserDetails();
}, [id] );

const fetchUserDetails = async () => {
    try {
    const response = await fetch(`https://674a7bd58680202966349ab4.mockapi.io/users/${id}`);
    const data = await response.json();
    setUser(data);
    } catch (error) {
    console.error('Error al obtener detalles del usuario: ', error);
    }
};

return (
    <div>
        <h1>Detalles de Usuario</h1>
        <p>ID: {user.id}</p>
        <p>Nombre: {user.name}</p>
        <p>Email: {user.email}</p>
    <Link to={`/edit/${user.id}`}>Editar Usuario</Link>
    <Link to={`/delete/${user.id}`}>Eliminar Usuario</Link>
    <Link to="/">Volver</Link>
    </div>
);
};

export default UserDetails;
