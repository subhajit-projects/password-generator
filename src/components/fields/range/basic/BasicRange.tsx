import styles from './basicrange.module.css';

const BasicRange = (props : any) => {
    return (
        <div>
            <input id="range1" min="6" max="30" value={props.value} type="range" className={`form-range ${styles.custom_range}`} onChange={(e) => props.onchange(e.target.value)} />
        </div>
    )
}

export default BasicRange;