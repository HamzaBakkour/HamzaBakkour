import WelcomConsole from "../components/WelcomConcole";
import FunnyShop from "../components/FunnyShop";
import Postgram from "../components/Postgram";
import HamzaBakkour from "../components/HamzaBakkour";
import AboutMe from "../components/AboutMe";

function Home(){

    return (
            <div className="flex-fill">
                <WelcomConsole/>
                <FunnyShop/>
                <Postgram/>
                <HamzaBakkour/>
                <AboutMe/>
            </div>
        );

}

export default Home

