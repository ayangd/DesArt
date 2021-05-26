import Header from '../../component/header';
import Article from './article';
import Slogan from './slogan';
import Testimony from './testimony';

function Home() {
    return (
        <div>
            <Header />
            <Slogan />
            <Article />
            <Testimony />
        </div>
    );
}

export default Home;