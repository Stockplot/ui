import React from "react";
import LottieControl from "./Lotte";
import Lotte from "./Lotte";
import "./styles.css";
function Home() {
  return (
    <div className="curved">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" ><path fill="#a4d3fa" fill-opacity="1" d="M0,128L26.7,154.7C53.3,181,107,235,160,256C213.3,277,267,267,320,229.3C373.3,192,427,128,480,133.3C533.3,139,587,213,640,208C693.3,203,747,117,800,117.3C853.3,117,907,203,960,245.3C1013.3,288,1067,288,1120,245.3C1173.3,203,1227,117,1280,96C1333.3,75,1387,117,1413,138.7L1440,160L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      <div className="content">
        <LottieControl />
        <div className="desc">
          <h1>Train Test Stock</h1>
          <p className="curved_txt">
           An online platform to plot indicators for stocks 
           <br>
           </br>
           
          </p>
        </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" ><path fill="#a4d3fa" fill-opacity="1" d="M0,320L26.7,277.3C53.3,235,107,149,160,138.7C213.3,128,267,192,320,192C373.3,192,427,128,480,112C533.3,96,587,128,640,128C693.3,128,747,96,800,117.3C853.3,139,907,213,960,218.7C1013.3,224,1067,160,1120,149.3C1173.3,139,1227,181,1280,176C1333.3,171,1387,117,1413,90.7L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 5 1440 319" >
        <path
          fill="#d0ebc7"
          fill-opacity="1"
          d="M0,224L8.3,202.7C16.6,181,33,139,50,101.3C66.2,64,83,32,99,21.3C115.9,11,132,21,149,37.3C165.5,53,182,75,199,101.3C215.2,128,232,160,248,154.7C264.8,149,281,107,298,112C314.5,117,331,171,348,202.7C364.1,235,381,245,397,234.7C413.8,224,430,192,447,181.3C463.4,171,480,181,497,192C513.1,203,530,213,546,202.7C562.8,192,579,160,596,165.3C612.4,171,629,213,646,224C662.1,235,679,213,695,192C711.7,171,728,149,745,144C761.4,139,778,149,794,138.7C811,128,828,96,844,69.3C860.7,43,877,21,894,32C910.3,43,927,85,943,85.3C960,85,977,43,993,21.3C1009.7,0,1026,0,1043,16C1059.3,32,1076,64,1092,112C1109,160,1126,224,1142,240C1158.6,256,1175,224,1192,218.7C1208.3,213,1225,235,1241,240C1257.9,245,1274,235,1291,234.7C1307.6,235,1324,245,1341,213.3C1357.2,181,1374,107,1390,112C1406.9,117,1423,203,1432,245.3L1440,288L1440,320L1431.7,320C1423.4,320,1407,320,1390,320C1373.8,320,1357,320,1341,320C1324.1,320,1308,320,1291,320C1274.5,320,1258,320,1241,320C1224.8,320,1208,320,1192,320C1175.2,320,1159,320,1142,320C1125.5,320,1109,320,1092,320C1075.9,320,1059,320,1043,320C1026.2,320,1010,320,993,320C976.6,320,960,320,943,320C926.9,320,910,320,894,320C877.2,320,861,320,844,320C827.6,320,811,320,794,320C777.9,320,761,320,745,320C728.3,320,712,320,695,320C678.6,320,662,320,646,320C629,320,612,320,596,320C579.3,320,563,320,546,320C529.7,320,513,320,497,320C480,320,463,320,447,320C430.3,320,414,320,397,320C380.7,320,364,320,348,320C331,320,314,320,298,320C281.4,320,265,320,248,320C231.7,320,215,320,199,320C182.1,320,166,320,149,320C132.4,320,116,320,99,320C82.8,320,66,320,50,320C33.1,320,17,320,8,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default Home;
