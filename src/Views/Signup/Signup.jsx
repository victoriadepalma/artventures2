import styles from "./Signup.module.css";
import { InputControl} from "../../components/InputControl/InputControl"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { googleProvider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { UserAuth } from '../../context/AuthContext';


export function Signup() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({ name: "",lastName:"", email: "",telefono:"", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); 
  const { createUser,createUserWithGoogle,createUserWithFacebook } = UserAuth();
const signinWithGoogle = async (e) =>{
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

 const phoneValidation=(phone)=> {
  const regex = /^(?:(?:00|\+)58|0)(?:2(?:12|4[0-9]|5[1-9]|6[0-9]|7[0-8]|8[1-35-8]|9[1-5]|3[45789])|4(?:1[246]|2[46]))\d{7}$/mg;
  return !(!phone || regex.test(phone) === false);
}
 const isValidEmail=(email)=>{
  return /\S+@\S+\.\S+/.test(email);
 }
  const registro = async(e) => {
    e.preventDefault();
       if (!values.name || !values.email || !values.pass || !values.lastName || !values.telefono || !isValidEmail(values.email) || phoneValidation(values.telefono)) {
      setErrorMsg("Revise la información ingresada");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    try {
      await createUser(values.name, values.lastName,values.telefono,values.email,values.pass,(message)=>{setErrorMsg(message)});
      setSubmitButtonDisabled(false);
      navigate('/')
    } catch (e) {
      setErrorMsg(e.message);
      setSubmitButtonDisabled(false);
      console.log(e.message);
    }
  };

  const signinWithFacebook = async(e) =>{
    e.preventDefault();
    setErrorMsg('');
    try {
      await createUserWithFacebook((message)=>{setErrorMsg(message)});
      navigate('/')
    } catch (e) {
      setErrorMsg(e.message);
      console.log(e.message);
    }
  }
  return (
    <>

    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>REGISTRO</h1>
        <InputControl
          label=""
          placeholder="NOMBRE"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, name: event.target.value }))
          }
          />
        <InputControl
          label=""
          placeholder="APELLIDO"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, lastName: event.target.value }))
          }
        />
        <InputControl
          label=""
          placeholder="EMAIL"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, email: event.target.value }))
          }
          />
        <InputControl
          label=""
          placeholder="TELEFONO"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, telefono: event.target.value }))
          }
        />
        <InputControl
          label=""
          type="password"
          placeholder="CONTRASEÑA"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
      
         
          <button className={styles.boton} onClick={(e)=>{registro(e)}} disabled={submitButtonDisabled}>
            Registrarme
          </button>
          <button className={styles.facebook} onClick={(e)=> {signinWithFacebook(e)}}>Iniciar sesion con Facebook</button>
          <button className={styles.google}  onClick={(e)=>{signinWithGoogle(e)}}>Registrarme con google</button>
          <p>
          ¿Ya tienes una cuenta? Inicia sesión <span>
              <Link to="/login">aqui</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
