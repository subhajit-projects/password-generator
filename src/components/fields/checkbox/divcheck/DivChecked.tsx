import { useContext } from 'react';
import CommonContext from '../../../../contexts/CommonContext';
import styles from './DivChecked.module.css';

let DivChecked = (props : any) => {
    const { contextState }:any = useContext(CommonContext);
    return(
        <div className={`mt-4 ${styles.checkbox_div} ${contextState.isDarkTheme? styles.dark_theme:``}`}>
            <label className={styles.checkbox_div_label}>
                <input type="checkbox" defaultChecked={props.checked} className={styles.checkbox_basic_input} onClick={() => props.click(props.id)} />
                <span className={styles.checkbox_div_span}>{props.title}</span>
            </label>
        </div>
    )
}

export default DivChecked;