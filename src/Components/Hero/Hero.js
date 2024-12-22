import react from "react";
import './Hero.css';

const Hero = () =>{
    return(
        <div className="hero">
            <div className="content">
                <h1 className="heading">
                    How can we help?
                </h1>
                <form>
                    <input type="search" placeholder="search" className="input" />
                </form>
            </div>
        </div>
    );
}
export default Hero;