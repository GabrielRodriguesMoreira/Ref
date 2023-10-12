'use client'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';
import { motion as m } from 'framer-motion'
import React, { useState, useRef, useEffect } from 'react'

export default function Song() {
    const [isSliding, setIsSliding] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.2);
    const [playlistIndex, setPlaylistIndex] = useState(0);
    const audioRef = useRef(null);

    const playlist = [
        {
            src: '/musica.mp3',
            image: "https://previews.123rf.com/images/hellocaicai/hellocaicai1802/hellocaicai180200579/96039520-cartoon-cute-flower.jpg",
        },
        {
            src: '/musica2.mp3',
            image: 'https://cdn.shopify.com/s/files/1/0602/2617/5224/files/f68cfa4c-2596-422c-b115-a7f269196c2b_600x600.png',
        },
        {
            src: '/musica.mp3',
            image: 'https://easydrawingguides.com/wp-content/uploads/2023/01/how-to-draw-a-cute-cupcake-featured-image-1200-933x1024.png',
        },
    ];

    useEffect(() => {
        audioRef.current.volume = 0.2;
    }, [])

    const playPauseAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const previousTrack = () => {
        if (playlistIndex - 1 >= 0) {
            audioRef.current.src = playlist[playlistIndex - 1].src;
            setTimeout(() => {
                audioRef.current.play();
            }, 100);
            setIsPlaying(true);
            setPlaylistIndex(playlistIndex - 1);
        }
    };

    const nextTrack = () => {
        if (playlistIndex + 1 < playlist.length) {
            audioRef.current.src = playlist[playlistIndex + 1].src;
            setTimeout(() => {
                audioRef.current.play();
            }, 100);
            setIsPlaying(true);
            setPlaylistIndex(playlistIndex + 1);
        }
    };

    const handleCloseButtonClick = () => {
        const songContainer = document.getElementById('song-container');
        if (songContainer) {
            songContainer.remove();
        }
    };

    return (
        <m.main
            id='song-container'
            className="fixed w-80 h-16 flex items-center justify-around p-1 bottom-8 rounded-sm shadow-md shadow-zinc-900 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-500 cursor-move"
            drag={!isSliding}
            dragConstraints={{
                left: 0,
                top: 100 - window.innerHeight,
                bottom: 0,
                right: window.innerWidth - 350,
            }}
            initial={{ x: -400 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <audio ref={audioRef} src={playlist[playlistIndex].src} volume={0.2}></audio>
            <div className="flex text-2xl text-white">
                <button onClick={previousTrack} className='active:text-blue-600'><MdKeyboardDoubleArrowLeft /></button>
                <button onClick={playPauseAudio} className='active:text-blue-600'>
                    {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                </button>
                <button onClick={nextTrack} className='active:text-blue-600'><MdKeyboardDoubleArrowRight /></button>
            </div>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={(e) => {
                    setVolume(e.target.value);
                    audioRef.current.volume = e.target.value;
                }}
                onPointerDownCapture={() => setIsSliding(true)}
                onPointerUpCapture={() => setIsSliding(false)}
                onTouchStart={() => setIsSliding(true)}
                onTouchEnd={() => setIsSliding(false)}
            />
            <div className='relative h-full aspect-square rounded-md overflow-hidden border-gray-300 border-2'>
                <div className='w-full h-full absolute top-0 left-0'></div>
                <img
                    src={playlist[playlistIndex].image}
                    className='w-full h-full'
                />
            </div>
            <button onClick={handleCloseButtonClick} className='text-xl text-white'><AiFillCloseCircle /></button>
        </m.main>
    )
}
