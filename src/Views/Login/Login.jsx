import styles from "./Login.module.css";
import { InputControl} from "../../components/InputControl/InputControl";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { googleProvider,FBprovider} from "../../firebase/config";
import { signInWithPopup,FacebookAuthProvider} from "firebase/auth";
import {useDispatch} from 'react-redux';
import { login } from "../../Redux/actions/actions";
import { UserAuth } from '../../context/AuthContext';


export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const { signIn,createUserWithGoogle } = UserAuth()
  const Iniciar = async (e)=>{
    e.preventDefault();
    if (!values.email || !values.pass) {
          setErrorMsg("Datos incompletos");
          return;
        }
        setErrorMsg("");
        setSubmitButtonDisabled(true);
    try {
      await signIn(values.email, values.pass,(message)=>{setErrorMsg(message)})
      setSubmitButtonDisabled(false);
      navigate('/')
    } catch (e) {
      setErrorMsg(e.message)
      setSubmitButtonDisabled(false);
      console.log(e.message)
    }

  }

  const signinWithGoogle=async(e)=>{
    e.preventDefault();
    setErrorMsg('');
    try {
      await createUserWithGoogle((message)=>{setErrorMsg(message)});
      navigate('/')
    } catch (e) {
      setErrorMsg(e.message);
      console.log(e.message);
    }
 };
 const signinWithFacebook = ()=>{
  signInWithPopup(auth, FBprovider)
  .then((re)=>{
    console.log(re)

  })
  .catch((err)=>{
    console.log(err.message);
  })
}

  
  return (
    <>

    <div className={styles.container}>
  
      <div className={styles.innerBox}>
      
        <h1 className={styles.heading}>INICIAR SESION</h1>
        <InputControl
          label=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="EMAIL"
        />
        <InputControl
          label=""
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="CONTRASEÑA"
        />

        <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
        <button className={styles.boton} onClick={signinWithFacebook}>Iniciar sesion con Facebook</button>
        <button className={styles.google} onClick={(e)=>{signinWithGoogle(e)}}> <img className = {styles.imggoogle} src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png"></img>Iniciar Sesión con Google</button>
        <button className={styles.boton} onClick={(e)=>{Iniciar(e)}} disabled={submitButtonDisabled}>Iniciar</button>
          <p>
          ¿No te has registrado? Crea una nueva cuenta <span>
              <Link to="/signup">aqui</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}