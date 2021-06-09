import React from 'react'
import Lottie from 'react-lottie';

 
export default class LottieLoader extends React.Component {
 
 
 
  render() {
    
 
    const defaultOptions = {
      loop: true,
      autoplay: true, 
      // animationData: animationData,
      path:'https://assets9.lottiefiles.com/datafiles/80KSTPWWFB6US4g/data.json',
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
 
    return <div>
      <Lottie options={defaultOptions}
              height={300}
              width={300}
              style={{
                  position:"absolute",
                  top:"50%",
                  left:"50%",
                  transform:"translate(-50%,-50%)"
              }}
              />
     
    </div>
  }
}