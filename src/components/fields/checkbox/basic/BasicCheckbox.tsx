import styles from './BasicCheckBox.module.css';

let BasicCheckbox = () => {
    return (
        <div className={`mt-4 ${styles.checkbox_basic}`}>
            <label className={styles.checkbox_basic_label}>
                <input type="checkbox" className={styles.checkbox_basic_input} />
                <span className={styles.checkbox_tick}></span>
                <span className={styles.checkbox_basic_span}>Check box text</span>
            </label>
        </div>
    )
}

export default BasicCheckbox;