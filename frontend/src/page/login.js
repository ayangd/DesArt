import { useState } from "react";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
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
            '& > input': {
                display: 'block',
                width: '100%',
            },
            '& > label': {
                fontSize: '1.5em',
            },
        },
        '& > *': {
            margin: '16px 0',
        },
    },
    submit: {
        backgroundColor: '#804e03',
        border: 'none',
        fontSize: '1.6em',
        borderRadius: '2px',
        color: 'white',
        '&:hover': {
            backgroundColor: '#d17e02',
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
            <div>Logo</div>
            <form className={classes.form} onSubmit={onSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={onChangeUsername} />
                </div>
                
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={onChangePassword} />
                </div>
                
                <input type="submit" value="Login" className={classes.submit} />

                <div className={classes.forgetPassword}>
                    <span className="forget">Forget your password?</span>
                    <span className="help">Get help sign</span>
                </div>
            </form>
        </div>
    );
}

export default Login;