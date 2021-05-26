import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
    articleContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#165ba8',
        color: 'white',
        padding: '20px 0',
    },
    articleTitle: {
        fontSize: '3em',
        marginBottom: '40px',
    },
    articleContent: {
        display: 'flex',
        marginBottom: '30px',
        '& > div': {
            width: '200px',
            height: '200px',
            background: 'white',
            margin: '0 16px'
        }
    },
});

function Article() {
    const classes = useStyles();

    return (
        <div className={classes.articleContainer}>
            <div className={classes.articleTitle}>Article</div>
            <div className={classes.articleContent}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div><Link className="clearLink" to="#">See All</Link></div>
        </div>
    );
}

export default Article;