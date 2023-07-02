import styles from "./Input.module.css";
export function InputControl(props){
    return(<div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input disabled={props.disabled} type={props.type ? props.type :"text"} {...props}></input>

    </div>)
}