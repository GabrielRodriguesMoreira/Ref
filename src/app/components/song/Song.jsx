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
    const [isVideoPlaying, setVideoPlaying] = useState(false);
    const playlist = ["CarFx8c2c3c", "lF2zPyyKkPA", "DhHGDOgjie4", "8K875HrgVVQ"]
    const [playlistIndex, setPlaylistIndex] = useState(0)
    const [songid, setsongid] = useState(null);
    const [volume, setVolume] = useState(20);
    const constraintsRef = useRef(null);
    const [isRangeDragging, setIsRangeDragging] = useState(false);


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
        <>
            <m.div
                ref={constraintsRef}
                className='fixed h-screen w-screen -z-10 top-0 left-0'
            >
            </m.div>
            <m.main
                id="song-container"
                className='fixed w-72 h-20  bottom-24 lg:bottom-3  lg:w-80 lg:h-16  left-3 flex items-center justify-around p-2 shadow-md shadow-zinc-900 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-500 rounded-md overflow-hidden cursor-move'
                drag={!isRangeDragging}
                dragConstraints={constraintsRef}
            >
                <div className='controls text-xl lg:text-2xl text-white flex items-center space-x-1'>
                    <button onClick={() => handleSwapSong(-1)}><MdKeyboardDoubleArrowLeft /></button>
                    <button onClick={handleVideoPlayPause}>
                        {isVideoPlaying ? <BsPauseFill /> : <BsPlayFill />}
                    </button>
                    <button onClick={() => handleSwapSong(1)}><MdKeyboardDoubleArrowRight /></button>

                    <input
                        className='w-16 lg:w-28 cursor-pointer'
                        type="range"
                        min="0"
                        max="100"
                        value={volume}
                        onChange={handleVolumeChange}
                        onPointerDown={() => setIsRangeDragging(true)}
                        onPointerUp={() => setIsRangeDragging(false)}
                        onTouchStart={() => setIsRangeDragging(true)}
                        onTouchEnd={() => setIsRangeDragging(false)}
                    />
                </div>
                {songid && (
                    <div className='relative h-full aspect-square rounded-md overflow-hidden border-slate-950 border-2'>
                        <div className='absolute w-full h-full  z-10'></div>
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

        </>
    );
}
