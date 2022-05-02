import "./Home.css";
import background from "../images/skyline-background.png";

function Home() {
    return (
        <div className="home-container">
            <img src={background} alt="background" className="background-img" />
        </div>
    );
}

export default Home;
