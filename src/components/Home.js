import StarWarsLogoSVG from '../assets/svgs/StarWarsLogoSVG';
import '../styles/Home.css';

const Home = () => {
    return (
        <section className="home">
            <StarWarsLogoSVG />
            <footer className="footer">
                <h6 className="copyright">Shai Einav &#169; 2021</h6>
            </footer>
        </section>
    );
};

export default Home;