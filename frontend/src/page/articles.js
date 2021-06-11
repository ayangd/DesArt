import { Fragment, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useHistory } from 'react-router';
import ArticleImage1 from '../assets/article1.jpg';
import ArticleImage2 from '../assets/article2.jpg';
import ArticleService from '../service/article';
import LoginService from '../service/login';

const useStyles = createUseStyles({
    articleButtons: {
        marginTop: '50px',
        marginLeft: '10%',
        marginRight: '10%',
        textAlign: 'right',
    },
    articleList: {
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',
    },
    articleContent: {
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            width: '300px',
            marginRight: '50px',
        },
    },
    articleText: {
        marginTop: '30px',
        width: 'calc(80% - 350px)',
    },
    articleTitle: {
        cursor: 'pointer',
    },
    unavailableText: {
        textAlign: 'center',
        fontSize: '2em',
    },
});

const useGetImage = () => {
    let pic = 0;
    return () => {
        const result = pic === 0 ? <img src={ArticleImage1} alt="" /> : <img src={ArticleImage2} alt="" />;
        pic = (pic + 1) % 2;
        return result;
    };
}

function Articles() {
    const classes = useStyles();
    const history = useHistory();
    const getImage = useGetImage();
    const articleService = ArticleService.getInstance();
    const loginService = LoginService.getInstance();
    const [articles, setArticles] = useState([]);
    const [addButton, setAddButton] = useState(undefined);

    useEffect(() => {
        let mounted = true;

        (async () => {
            const response = await articleService.getAll();
            if (mounted) {
                setArticles(response);
            }
        })();

        (async () => {
            const response = await loginService.checkUser();
            if (mounted) {
                setAddButton(response ? <button onClick={() => history.push('/admin/articles/new')}>Add</button> : undefined);
            }
        })();

        return () => {
            mounted = false;
        };
    }, [articleService, loginService, history]);

    console.log(articles);

    return (
        <Fragment>
            <div className={classes.articleButtons}>
                {addButton}
            </div>
            {articles.length === 0 ? <div className={classes.unavailableText}>No Article</div> : articles.map(article => 
                <div className={classes.articleList}>
                    <div className={classes.articleContent}>
                        <div>
                            {getImage()}
                        </div>
                        <div className={classes.articleText}>
                            <h2 className={classes.articleTitle} onClick={() => history.push(`/article?id=${article.id}`)}>
                                {article.title}
                            </h2>
                            <h6>
                                {article.author} - {(new Date(article.createdAt)).toLocaleDateString()}
                            </h6>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Articles;