import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserEdit = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const { id } = useParams();
const navigate = useNavigate();

useEffect(() => {
    fetchUserDetails();
    }, []);
    

const fetchUserDetails = async () => {
    try {
    const response = await fetch(`https://674a7bd58680202966349ab4.mockapi.io/users/${id}`);
    const data = await response.json();
    setName(data.name);
    setEmail(data.email);
    } catch (error) {
    console.error('Error al obtener detalles: ', error);
    }
};

const handleUpdate = async () => {
    try {
    const response = await fetch(`https://674a7bd58680202966349ab4.mockapi.io/users/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
        });
        if (response.ok) {
        navigate('/');
        } else {
        console.error('Error al actualizar usuario');
        }
    } catch (error) {
        console.error('Error en la solicitud: ', error);
    }
};

return (
    <div>
        <h1>Editar Usuario</h1>
        <label>Nombre: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <br />
    <label>Email: </label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <br />
    <button onClick={handleUpdate}>Actualizar</button>
    </div>
);
};

export default UserEdit;