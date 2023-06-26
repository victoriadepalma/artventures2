import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/config';


export const Book = () => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState(null);

  const salir = () => {
    auth.signOut();
    navigate('/');
  }

  useEffect(() => {
    const cargarUsuario = async () => {
      const usuarioFirebase = await auth.currentUser;
      if (!usuarioFirebase) {
        navigate('/Login');
      } else {
        // Escuchar los cambios en el objeto usuario hasta que todos los datos estén disponibles
        auth.onAuthStateChanged((usuarioActualizado) => {
          if (usuarioActualizado) {
            setUsuario(usuarioActualizado);
          }
        });
      }
    };
    cargarUsuario();
  }, [navigate]);

  return (
    <div>
      <div>
        <h1>Perfil de Usuario</h1>
      </div>
      <div>
        {usuario ? (
        <>
            {/* <h2>Bienvenido - {usuario.displayName || usuario.email}</h2> */}
            <h2>Correo: {usuario.email}</h2>
        </>
        ) : (
        <h2>Inicie sesión</h2>
        )}
        <button onClick={salir}>Salir</button>
        </div>
    </div>
  );
};

