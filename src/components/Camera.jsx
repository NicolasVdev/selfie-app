import { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user'
}

export const Camera = () => {
  const [url, setUrl] = useState(null);
  const webcamRef = useRef(null);
  const capturePhoto = useCallback(async() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc)
  }, [webcamRef])

  const onUserMedia = (e) => {
    console.log(e);
  }

  return (
    <div className='webcam-container'>
    <Webcam
    ref={webcamRef}
    audio={false}
    screenshotFormat='image/webp'
    videoConstraints={videoConstraints}
    onUserMedia={onUserMedia}
    mirrored={true}
    />
    <button onClick={capturePhoto}>SNAP</button>
    <button onClick={() => setUrl(null)}>Refresh</button>

    {url && (
      <div>
        <img src={url} alt="Screenshot" />
      </div>
    )}
    </div>
  )
}
