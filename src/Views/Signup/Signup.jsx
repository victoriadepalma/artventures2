import styles from "./Signup.module.css";
import { InputControl} from "../../components/InputControl/InputControl"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import { googleProvider } from "../../firebase/config";
import { signInWithPopup } from "firebase/auth";
import { LogoN } from "../../components/Navbar/LogoN";

export function Signup() {
  const navigate = useNavigate();
  const [values, setvalues] = useState({ name: "", email: "", pass: "" });
  const [errorMsg, setErrorMsg] = useState([]);
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false); 
const signinWithGoogle = async () =>{
    try{
        const result = await signInWithPopup(auth, googleProvider);
        console.log(result);
    }catch (error){
        console.error(error);
    }
 };
  const registro = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Llene todos los campos");
      return;
    }
    setErrorMsg("");
    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
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
            setvalues((prev) => ({ ...prev, email: event.target.value }))
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
            setvalues((prev) => ({ ...prev, email: event.target.value }))
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
          <button className={styles.boton} onClick={registro} disabled={submitButtonDisabled}>
            Registrarme
          </button>
          <button className={styles.google}  onClick={signinWithGoogle}>Registrarme con google</button>
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
