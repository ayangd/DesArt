import { createUseStyles } from "react-jss";
import TextAreaInput from "../../component/textAreaInput";
import TextInput from "../../component/textInput";

const useStyles = createUseStyles({
    contactUsContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '50px 100px',
    },
    contactUsTitle: {
        fontSize: '3em',
        marginBottom: '30px',
    },
    contactUsForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '& > div': {
            marginBottom: '20px',
            '& > label': {
                fontSize: '1.2em',
            },
        },
    },
    submitButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
    },
    submitButton: {
        border: 'none',
        backgroundColor: '#804e03',
        color: 'white',
        fontSize: '1.3em',
        borderRadius: '5px',
        padding: '5px 20px',
    },
});

function ContactUs() {
    const classes = useStyles();

    return (
        <div className={classes.contactUsContainer}>
            <div className={classes.contactUsTitle}>Contact Us</div>
            <form className={classes.contactUsForm}>
                <div>
                    <label>Name</label>
                    <TextInput type="text" fullWidth />
                </div>
                <div>
                    <label>Email</label>
                    <TextInput type="email" fullWidth />
                </div>
                <div>
                    <label>Message</label>
                    <TextAreaInput fullWidth />
                </div>
                <div className={classes.submitButtonContainer}>
                    <input className={classes.submitButton} type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
}

export default ContactUs;