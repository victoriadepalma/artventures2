import styles from "./Input.module.css";
export function InputControl(props){
    return(<div className={styles.container}>
        {props.label && <label>{props.label}</label>}
        <input disabled={props.disabled} type="text" {...props}></input>

    </div>)
}