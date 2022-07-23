import React, {createRef, useEffect} from 'react';
import lottie from 'lottie-web'

function Animation({ data, speed, className }) {
  let animationContainer = createRef()
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      animationData: data
    })
    anim.setSpeed(speed)
    return () => anim.destroy();
  }, [])

  return (
    <div className={className} ref={animationContainer} />
  )
}

export default Animation