import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    textInput: (fullWidth) => ({
        width: fullWidth ? '100%' : undefined,
        padding: '10px',
        display: 'inline-block',
        border: 'none',
        background: '#f1f1f1',
        boxSizing: 'border-box',
        '& :focus': {
            backgroundColor: '#ddd',
        },
    }),
});

function TextInput({fullWidth, ...props}) {
    const classes = useStyles(fullWidth);

    return (
        <input className={classes.textInput} {...props} />
    );
}

export default TextInput;