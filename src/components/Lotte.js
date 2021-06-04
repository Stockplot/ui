import React from 'react'
import Lottie from 'react-lottie';

 
export default class LottieControl extends React.Component {
 
 
 
  render() {
    
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      // animationData: animationData,
      path:'https://assets9.lottiefiles.com/packages/lf20_zlrpnoxz.json',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}
              // height={100}
              // width={100}
              />
     
    </div>
  }
}