import React from "react";
import LottieControl from "./Lotte";
import Lotte from "./Lotte";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import "./styles.css";
import About from "./About";
import Footer from "./Footer";
import img from "./images/logo1.svg"
function Home() {
  return (
    <div className="curved" id="blog-hero">
      <div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 90 1440 190">
          <path
            fill="#a4d3fa"
            fill-opacity="1"
            d="M0,128L26.7,154.7C53.3,181,107,235,160,256C213.3,277,267,267,320,229.3C373.3,192,427,128,480,133.3C533.3,139,587,213,640,208C693.3,203,747,117,800,117.3C853.3,117,907,203,960,245.3C1013.3,288,1067,288,1120,245.3C1173.3,203,1227,117,1280,96C1333.3,75,1387,117,1413,138.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg> */}
        <div className="content">
          <LottieControl />
          <div className="desc">
           <img src={img} className="logo"/>
            <p className="curved_txt">
              An online platform to plot stock market indicators
              <br></br>
            </p>

            <button href="/dashboard" class="btn-test">
              Start Testing
            </button>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#a4d3f8" fill-opacity="1" d="M0,288L480,128L960,224L1440,128L1440,0L960,0L480,0L0,0Z"></path></svg>
      </div>
      <About />

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e3bcee" fill-opacity="1" d="M0,288L480,160L960,256L1440,128L1440,320L960,320L480,320L0,320Z"></path></svg>
      <Footer />
    </div>
  );
}

export default Home;
