import { createUseStyles } from "react-jss";
import { useParams, useHistory } from "react-router";
import TextInput from "../component/textInput";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useEffect, useState } from "react";
import queryString from "query-string";
import ArticleService from "../service/article";

const useStyles = createUseStyles({
    articleEditContainer: {
        margin: '50px',
    },
    articleEditTitle: {
        fontSize: '2em',
        textAlign: 'center',
    },
    articleTextFields: {
        display: 'flex',
        '& input': {
            flexGrow: '1',
            margin: '12px',
        },
    },
    buttons: {
        marginTop: '16px',
        '& button': {
            border: 'none',
            marginRight: '16px',
            padding: '8px 16px',
            fontSize: '1.2em',
            borderRadius: '20px',
            cursor: 'pointer',
            backgroundColor: '#a67c52',
            transition: '.2s',
            color: 'white',
            '&:hover': {
                backgroundColor: '#856341',
            }
        },
    },
});

function ArticleEdit() {
    const classes = useStyles();
    const { id } = useParams();
    const history = useHistory();
    const articleService = ArticleService.getInstance();
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        if (id !== 'new') {
            let mounted = true;

            (async () => {
                const response = await articleService.get(id);
                if (mounted) {
                    setTitle(response.title);
                    setAuthor(response.author);
                    setContent(response.content);
                }
            })();

            return () => {
                mounted = false;
            };
        }
    }, [id, articleService]);

    const post = () => {
        if (id === 'new') {
            (async () => {
                const response = await articleService.create({title, author, content});
                history.push('/article?' + queryString.stringify({id: response.id}));
            })();
            return;
        }
        (async () => {
            await articleService.update({id, title, author, content});
            history.push('/article?' + queryString.stringify({id}));
        })();
    };

    const preview = () => {
        const url = '/article?' + queryString.stringify({preview: content, titlePreview: title, authorPreview: author});
        window.open(url, '_blank').focus();
    };

    return (
        <div className={classes.articleEditContainer}>
            <div className={classes.articleEditTitle}>
                Create New Article
            </div>
            <div className={classes.articleTextFields}>
                <TextInput type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                <TextInput type="text" placeholder="Author" value={author} onChange={e => setAuthor(e.target.value)} />
            </div>
            <div>
                <CKEditor
                    editor={ClassicEditor}
                    data={content}
                    onChange={(event, editor) => setContent(editor.getData())}
                />
            </div>
            <div className={classes.buttons}>
                <button className="post" onClick={post}>Post</button>
                <button className="preview" onClick={preview}>Preview</button>
            </div>
        </div>
    );
}

export default ArticleEdit;