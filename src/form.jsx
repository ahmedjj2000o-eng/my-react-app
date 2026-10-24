import React, { useState } from 'react';
import './form.css'; 

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  console.log("1. Formulaire soumis ! Données :", { username, password });

  try {
    const res = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    console.log("2. Réponse du serveur Node :", data);
  } catch (err) {
    console.error("Erreur d'envoi :", err);
  }
};

  return (
    <div id= "form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit} id="f">
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Username" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}