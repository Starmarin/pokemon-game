import bg from '../../assets/bg1.jpg';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';

function App() {
    return (
        <>
            <Header
                title={"This is title"}
                descr={"This is Description!"}
            />
            <Layout
                title={"The Season of Legends begins! Read for more details."}
                descr={"We have more details about the changes happening in the world of Pokémon GO during the Season of Legends. For a general overview of the Season of Legends, please read the blog here."}
                urlBg={bg}
            />
            <Layout
                title={"Northern hemisphere"}
                descr={"Foongus, Tangela, Miltank, Shuppet, Finneon, Ducklett, Karrablast, Ponyta, Lotad, Patrat, and more"}
                colorBg={'#edebee'}
            />
            <Layout
                title={"Southern hemisphere"}
                descr={"Paras, Yanma, Stantler, Drifloon, Remoraid, Buizel, Shelmet, Vulpix, Seedot, Zigzagoon, and more."}
                urlBg={bg}
            />
            <Footer />
        </>
    );
}

export default App;
