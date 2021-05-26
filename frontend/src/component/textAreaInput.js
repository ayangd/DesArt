import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    textAreaInput: (fullWidth) => ({
        width: fullWidth ? '100%' : undefined,
        padding: '10px',
        display: 'inline-block',
        border: 'none',
        background: '#f1f1f1',
        '& :focus': {
            backgroundColor: '#ddd',
        },
    }),
});

function TextAreaInput({fullWidth, ...props}) {
    const classes = useStyles(fullWidth);

    return (
        <textarea className={classes.textAreaInput} {...props} />
    );
}

export default TextAreaInput;