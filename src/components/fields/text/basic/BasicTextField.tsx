import { useContext } from 'react';
import CommonContext from '../../../../contexts/CommonContext';
import styles from './BasicTextField.module.css';

interface BasicTextFieldProps {
    id?: string;
    name?: string;
    title?: string;
    type?: string;
    isreadonly?: boolean;
    isautocomplect?: string;
    field_value?: string;
    label_title?: string;
    onclick?: any;
    passwordText?:string
}

let BasictextField = (props : BasicTextFieldProps) => { {/* props : BasicTextFieldProps */}
    const { contextState }:any = useContext(CommonContext);
    return (
        <div className={`mt-4 ${styles.field} ${contextState.isDarkTheme? styles.dark_theme:``}`}>
            <input type={props.type} className={styles.floating_text_field} placeholder='' title={props.title} readOnly={props.isreadonly} autoComplete={props.isautocomplect} value={props.field_value} />
            <label className={styles.floating_label}>{props.label_title}</label>
            <span className={`${styles.password_strength} ${
                props.passwordText=="weak"?styles.weak:
                props.passwordText=="very_weak"?styles.very_weak:
                props.passwordText=="good"?styles.good:
                props.passwordText=="strong"?styles.strong:""}`}>{props.passwordText}</span>
            <i className="fa-regular fa-copy" title='copy' onClick={props.onclick}></i>
        </div>
    )
}

export default BasictextField;