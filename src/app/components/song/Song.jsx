'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion'
import YouTube from 'react-youtube';
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Song() {
    const youtubePlayerRef = useRef(null);
    const [isPlayerReady, setIsPlayerReady] = useState(false);
    const [isVideoPlaying, setVideoPlaying] = useState(true);
    const playlist = ["8K875HrgVVQ", "lF2zPyyKkPA", "DhHGDOgjie4", "CarFx8c2c3c"]
    const [playlistIndex, setPlaylistIndex] = useState(0)
    const [songid, setsongid] = useState(null);
    const [volume, setVolume] = useState(20);
    const constraintsRef = useRef(null);
    const [canDrag, setCanDrag] = useState(true)

    useEffect(() => {
        setsongid(playlist[playlistIndex]);
        if (isPlayerReady) {
            youtubePlayerRef.current?.setVolume(volume);
        }
    }, [playlistIndex])

    const onPlayerReady = (event) => {
        youtubePlayerRef.current = event.target;
        setIsPlayerReady(true);
    };

    const handleSwapSong = (mov) => {
        if (playlistIndex + mov >= 0 && playlistIndex + mov <= playlist.length) {
            setPlaylistIndex(playlistIndex + mov);
        }
    }

    const handleVideoPlayPause = () => {
        if (isPlayerReady) {
            if (isVideoPlaying) {
                youtubePlayerRef.current?.pauseVideo();
            } else {
                youtubePlayerRef.current?.playVideo();
            }
            setVideoPlaying((prevState) => !prevState);
        }
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        setVolume(newVolume);
        if (isPlayerReady) {
            youtubePlayerRef.current?.setVolume(newVolume);
        }
    };


    const handleCloseButtonClick = () => {
        const songContainer = document.getElementById('song-container');
        if (songContainer) {
            songContainer.remove();
        }
    };

    return (
        <m.div
            ref={constraintsRef}
            className='fixed h-screen w-screen'
            initial={{ x: '-100vw' }}
            transition={{ duration: 0.8 }}
            animate={{ x: '0' }}
        >
            <m.main
                id="song-container"
                className='absolute w-72 h-20 lg:w-80 lg:h-16 bottom-12 left-3 flex items-center justify-around p-2 shadow-md shadow-zinc-900 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-500 rounded-md overflow-hidden'
                drag = {canDrag}
                dragConstraints={constraintsRef}
            >
                <div className='controls text-xl lg:text-2xl text-white flex items-center space-x-1'>
                    <button onClick={() => handleSwapSong(-1)}><MdKeyboardDoubleArrowLeft /></button>
                    <button onClick={handleVideoPlayPause}>
                        {isVideoPlaying ? <BsPauseFill /> : <BsPlayFill />}
                    </button>
                    <button onClick={() => handleSwapSong(1)}><MdKeyboardDoubleArrowRight /></button>

                    <input
                        className='w-12 lg:w-28 cursor-pointer'
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        onMouseDown={()=>{setCanDrag(false)}}
                        onMouseUp={()=>{setCanDrag(true)}}
                        onTouchStart={()=>{setCanDrag(false)}}
                        onTouchEnd={()=>{setCanDrag(true)}}
                    />
                </div>
                {songid && (
                    <div className=' relative h-full aspect-square rounded-md overflow-hidden border-slate-950 border-2'>
                        <YouTube
                            iframeClassName='youtube_iframe'
                            videoId={songid}
                            onEnd={() => { handleSwapSong(1) }}
                            onStateChange={() => {
                                if (isPlayerReady) {
                                    youtubePlayerRef.current?.setVolume(volume);
                                }
                            }}
                            opts={{
                                playerVars: {
                                    autoplay: 1,
                                    controls: 0,
                                    loop: 0,
                                    modestbranding: 1,
                                    volume: 20,
                                },
                            }}
                            onReady={onPlayerReady}
                        />
                    </div>
                )}
                <AiFillCloseCircle className='text-white text-xl cursor-pointer' onClick={handleCloseButtonClick} />
            </m.main>
        </m.div>
    );
}
