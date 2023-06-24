import styles from "./Login.module.css";
import { InputControl} from "../../components/InputControl/InputControl"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { googleProvider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { LogoN } from "../../components/Navbar/LogoN";

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
    <>
    <LogoN/>
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
        <button className={styles.google} onClick={signinWithGoogle}> <img className = {styles.imggoogle} src="https://icones.pro/wp-content/uploads/2021/02/google-icone-symbole-png-logo-noir.png"></img>Iniciar Sesión con Google</button>
        <button className={styles.boton} onClick={Iniciar} disabled={submitButtonDisabled}>Iniciar</button>
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
