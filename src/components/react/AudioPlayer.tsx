import { useRef, useEffect, useState } from 'react';
import PlayIcon from './icons/PlayIcon';
import MuteIcon from './icons/MuteIcon';

const AudioPlayer = () => {
  const [, setLoad] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioIsPaused = audioRef.current?.paused;
  
  const [play, setPlay] = useState(audioIsPaused);

  useEffect(() => {
    setLoad(true)
  }, [])

  const handleOnPlay = () => {
    setPlay((prev) => !prev)
    if (audioIsPaused) {
        audioRef.current?.play()
    } else {
        audioRef.current?.pause()
    }
  }

  return (
    <>
      <button onClick={handleOnPlay} className='bg-white drop-shadow-lg rounded-[100%] fixed bottom-4 left-4 p-4 z-[9999]'>
        {play ? <MuteIcon className='text-zinc-900' /> : <PlayIcon className='text-zinc-900' />}
      </button>
      <audio 
        ref={audioRef} 
        src="/mp3/Wedding Entrance X Can't Help Falling In Love Piano cover by James Wong.mp3" 
        autoPlay 
        loop
      />
    </>
  )
}

export default AudioPlayer