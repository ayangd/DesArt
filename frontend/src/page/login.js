import Logo from "../DesArt.png";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import TextInput from "../component/textInput";

const useStyles = createUseStyles({
    logo: {
        '& > img': {
            width: '128px',
            marginBottom: '16px',
        },
    },
    loginContainer: {
        backgroundColor: '#5c99fa',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    form: {
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        width: '40vw',
        '& > div': {
            '& > label': {
                fontSize: '1.5em',
            },
        },
        '& > *': {
            margin: '16px 0',
        },
    },
    loginBtn: {
        display: "flex",
        justifyContent: "center",
        '& > input': {
            backgroundColor: '#804e03',
            border: 'none',
            fontSize: '1.6em',
            borderRadius: '5px',
            color: 'white',
            width: '60%',
            padding: '5px 0',
            '&:hover': {
                backgroundColor: '#d17e02',
            },
        },

    },
    forgetPassword: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& > .forget': {
            marginBottom: '8px',
        },
        '& > .help': {
            fontSize: '1.2em',
        },
    },
});

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const classes = useStyles();

    function onChangeUsername(e) {
        setUsername(e.target.value);
    }

    function onChangePassword(e) {
        setPassword(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        return false;
    }

    return (
        <div className={classes.loginContainer}>
            <div className={classes.logo}>
                <img src={Logo} alt="DesArt Logo" />
            </div>
            <form className={classes.form} onSubmit={onSubmit}>
                <div>
                    <label>Username</label>
                    <TextInput type="text" placeholder="Enter your email" value={username} onChange={onChangeUsername} fullWidth />
                </div>
                
                <div>
                    <label>Password</label>
                    <TextInput type="password" placeholder="Enter your password" value={password} onChange={onChangePassword} fullWidth />
                </div>
                
                <div className={classes.loginBtn}>
                    <input type="submit" value="Login" />
                </div>

                <div className={classes.forgetPassword}>
                    <span className="forget">Forget your password?</span>
                    <span className="help">Get help sign</span>
                </div>
            </form>
        </div>
    );
}

export default Login;