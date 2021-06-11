import { useEffect, useRef, useState } from "react";
import queryString from "query-string";
import { useHistory, useLocation } from "react-router";
import { createUseStyles } from "react-jss";
import ArticleService from "../service/article";

const useStyles = createUseStyles({
    articleViewContainer: {
        margin: '50px 100px',
    },
    articleViewHeader: {
        marginBottom: '32px',
    },
    articleViewHeaderTop: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    articleViewButtons: {
        '& button': {
            border: 'none',
            padding: '8px 16px',
            height: '100%',
            marginLeft: '8px',
            borderRadius: '8px',
            color: 'white',
            fontSize: '1.2em',
            cursor: 'pointer',
            transition: '.2s',
        },
        '& .edit': {
            backgroundColor: '#a67c52',
            '&:hover': {
                backgroundColor: '#856341',
            },
        },
        '& .delete': {
            backgroundColor: 'red',
            '&:hover': {
                backgroundColor: '#ad0000',
            },
        },
    },
    articleViewTitle: {
        fontSize: '2em',
    },
});

function ArticleView() {
    const classes = useStyles();
    const location = useLocation();
    const history = useHistory();
    const contentRef = useRef(null);
    const articleService = ArticleService.getInstance();
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const {id, preview, titlePreview, authorPreview} = queryString.parse(location.search);
        if (id !== undefined) {
            let mounted = true;
            (async () => {
                const response = await articleService.get(id);
                if (mounted) {
                    setId(response.id);
                    setTitle(response.title);
                    setAuthor(response.author);
                    setContent(response.content);
                    setDate(new Date(response.createdAt));
                }
            })();
            return () => {
                mounted = false;
            };
        }
        if (preview !== undefined && titlePreview !== undefined && authorPreview !== undefined) {
            console.log({preview, titlePreview, authorPreview});
            setTitle(titlePreview);
            setAuthor(authorPreview);
            setContent(preview);
            return;
        }
    }, [location, articleService]);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.innerHTML = content;
        }
    }, [content, contentRef]);

    const edit = () => {
        history.push(`/admin/articles/${id}`);
    };

    const remove = () => {
        (async () => {
            await articleService.remove(id);
            history.push('/articles');
        })();
    };

    return (
        <div className={classes.articleViewContainer}>
            <div className={classes.articleViewHeader}>
                <div className={classes.articleViewHeaderTop}>
                    <div className={classes.articleViewTitle}>{title}</div>
                    <div className={classes.articleViewButtons}>
                        <button className="edit" onClick={edit}>Edit</button>
                        <button className="delete" onClick={remove}>Delete</button>
                    </div>
                </div>
                <div>{date.toLocaleDateString()} - {author}</div>
            </div>
            <div>
                <div ref={ref => contentRef.current = ref} />
            </div>
        </div>
    );
}

export default ArticleView;