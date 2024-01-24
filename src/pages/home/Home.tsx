import { useEffect, useState, useContext } from 'react';
// import BasicCheckbox from '../../fields/checkbox/basic/BasicCheckbox';
import DivChecked from '../../components/fields/checkbox/divcheck/DivChecked';
import BasictextField from '../../components/fields/text/basic/BasicTextField';
import styles from './home.module.css';
import BasicButton from '../../components/button/basic/BasicButton';
import BasicRange from '../../components/fields/range/basic/BasicRange';
// import ThemeButton from '../../components/button/theme/basic/ThemeButton';
import ThemeBasicSmall from '../../components/button/theme/basicsmall/ThemeBasicSmall';
import CommonContext from '../../contexts/CommonContext';
import { toast } from 'react-toastify';
import passwordgenerate from '../../common/passwordgenerate';
import passwordstrength from '../../common/passwordstrength';

let Home = () => {
    const { contextState }:any = useContext(CommonContext);
    const [generatePassword, setGeneratePassword] = useState(true);
    const [password, setPassword] = useState('');
    const [passwordStrengthText, setPasswordStrengthText] = useState('');
    const [passwordLength, setPasswordLength] = useState(6);
    const [passType, setPassType] = useState([
        {action_text: "Digits", id: "digit", resp: true},
        {action_text: "Uppercase", id: "uppercase", resp: false},
        {action_text: "Lowercase", id: "lowercase", resp: false},
        {action_text: "Symbols", id: "symbol", resp: true}
    ]);

    useEffect(() => {
        if(generatePassword) {
            setGeneratePassword(false);
            passwordIs();
            // setPassword("asdasdadasdas");
        }
    });

    const passTypeEventHandler = (id: String) => {
        let flag = 0;
        let copyState = [...passType];
        copyState.map( data => {
            if(data.id === id) {
                data.resp = !data.resp
            }
        });
        copyState.map( data => {
            if(data.resp) {
                flag = 1;
            }
        });
        if(flag === 1) {
            passwordIs();
            // setPassword("******88")
        } else {
            setPassword("")
        }
        
        setPassType(copyState);
    }

    const passwordLengthHandler = (data: number) => {
        setPasswordLength(data);
    }

    const passwordIs = () => {
        const pass = passwordgenerate(
            passType[0].id==="digit"?passType[0].resp:passType[0].resp,
            passType[1].id==="uppercase"?passType[1].resp:passType[1].resp,
            passType[2].id==="lowercase"?passType[2].resp:passType[2].resp,
            passType[3].id==="symbol"?passType[3].resp:passType[3].resp,
            passwordLength
        );
        setPassword(pass);        
        passwordStrength(pass);
    }

    const passwordStrength = (password: string) => {
        setPasswordStrengthText(passwordstrength(password));
    }

    return (
        <div className={`${styles.root_layout} ${contextState.isDarkTheme? styles.dark_theme:``}`}>
            <header className={styles.header}>
                <div className="row">
                    <div className="col-12">
                        <div className='d-flex justify-content-center'>Password</div>
                    </div>
                </div>
            </header>
            <section className={styles.section}>
                <div className="row">
                    <div className="col-6 d-flex justify-content-end align-items-center text-end">
                        <span className=''>Theme Change</span>
                    </div>
                    <div className="col-6 d-flex justify-content-left">
                        <ThemeBasicSmall />
                    </div>
                </div>
                <div className="col-12 mt-5 text-center">
                    <BasictextField label_title="Your password" title='password_show' type='text' isautocomplect="false" isreadonly={true} field_value={password} onclick={() => {toast.success("Password Copyed!")}} passwordText={passwordStrengthText} />
                </div>

                <div className="col-12 text-center mt-3">
                    <BasicButton button_text="Generate Password" onclick={() => setGeneratePassword(!generatePassword)} custom_class={`${styles.generate_button}`} />
                </div>

                <div className="row mt-3">
                    {passType.map( (data, key) => (
                        <div className="col-6 col-sm-6 col-md-3 d-flex justify-content-center" key={key}>
                            <DivChecked checked={data.resp} title={data.action_text} id={data.id} click={(id : String) => passTypeEventHandler(id)} />
                        </div>
                    ))}
                </div>

                <div className="row mt-5 d-flex justify-content-center">
                    <div className="col-12 col-md-2 d-flex justify-content-center">Length</div>
                    <div className="col-12 col-md-2"><BasicRange onchange={(data : number) => passwordLengthHandler(data)} value={passwordLength} /></div>
                    <div className="col-12 col-md-2 d-flex justify-content-center">{passwordLength}</div>
                </div>
            </section>
            {/* <section><BasicCheckbox /></section> */}
            {/* <section>
                <div className="row">
                    <div className="col-6">
                        <DivChecked />
                    </div>
                    <div className="col-6">
                        <DivChecked />
                    </div>
                </div>
            </section> */}
            <footer>
                {/* Footer */}
            </footer>
        </div>
    )
}

export default Home;

// https://www.npmjs.com/package/react-toastify 