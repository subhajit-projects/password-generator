import styles from './BasicButton.module.css'

interface BasicButtonProps {
    id?: string;
    custom_class?: any;
    button_text?: string,
    onclick?: any
}

const BasicButton = (props : BasicButtonProps) => {
    return (
        <button type="button" className={`${styles.basicbutton} ${props.custom_class}`} onClick={props.onclick} >
            {props.button_text}
        </button>
    )
}

export default BasicButton;