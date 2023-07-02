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
  const { createUser,createUserWithGoogle } = UserAuth();
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
  const registro = async(e) => {
    e.preventDefault();
       if (!values.name || !values.email || !values.pass || !values.lastName || !values.telefono) {
      setErrorMsg("Llene todos los campos");
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
          placeholder="CONTRASEÑA"
          onChange={(event) =>
            setvalues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />
        <div className={styles.footer}>
          <b className={styles.error}>{errorMsg}</b>
      
          <button className={styles.google}  onClick={(e)=>{signinWithGoogle(e)}}>Registrarme con google</button>
          <button className={styles.boton} onClick={(e)=>{registro(e)}} disabled={submitButtonDisabled}>
            Registrarme
          </button>
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
