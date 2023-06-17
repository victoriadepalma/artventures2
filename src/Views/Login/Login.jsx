import styles from "./Login.module.css";
import { InputControl} from "../../components/InputControl/InputControl"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { googleProvider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";

export function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const Iniciar = () => {
    if (!values.email || !values.pass) {
      setErrorMsg("Datos incompletos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };
  const signinWithGoogle = async () =>{
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
    }catch (error){
        console.error(error);
    }
 };



  return (
    <div className={styles.container}>
      <div className={styles.innerBox}>
        <h1 className={styles.heading}>Iniciar Sesion</h1>
        <InputControl
          label="Email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
          placeholder="Ingrese su correo"
        />
        <InputControl
          label="Contraseña"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
          placeholder="Ingrese su contraseña"
        />

        <div className={styles.footer}>
        <b className={styles.error}>{errorMsg}</b>
        <button className={styles.google} onClick={signinWithGoogle}>Iniciar sesion con google</button>
        <button className={styles.boton} onClick={Iniciar} disabled={submitButtonDisabled}>iniciar Sesion</button>
          <p>
            Crear cuenta
            <span>
              <Link to="/signup"> ir</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
