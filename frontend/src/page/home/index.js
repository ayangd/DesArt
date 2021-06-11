import Footer from '../../component/footer';
import Article from './article';
import ContactUs from './contactUs';
import Slogan from './slogan';
import Testimony from './testimony';

function Home() {
    return (
        <div>
            <Slogan />
            <Article />
            <Testimony />
            <ContactUs />
            <Footer />
        </div>
    );
}

export default Home;