import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserForm = () => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const navigate = useNavigate();

const handleCreate = async () => {
    try {
    const response = await fetch('https://674a7bd58680202966349ab4.mockapi.io/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
    });
    if (response.ok) {
        navigate('/');
    } else {
        console.error('Error al crear usuario');
    }
    } catch (error) {
    console.error('Error en la solicitud: ', error);
    }
};

return (
    <div>
    <h1>Crear Usuario</h1>
    <label>Nombre: </label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    <br />
    <label>Email: </label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    <br />
    <button onClick={handleCreate}>Crear</button>
    </div>
);
};

export default UserForm;