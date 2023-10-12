'use client'
import React, { useEffect, useRef, useState } from 'react';
import { motion as m } from 'framer-motion'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs';
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from 'react-icons/md';
import { AiFillCloseCircle } from 'react-icons/ai';

export default function Song() {
    const audioRef = useRef(null);
    const [isAudioReady, setIsAudioReady] = useState(false);
    const [isAudioPlaying, setAudioPlaying] = useState(false);
    const playlist = [
        {
            src: '/musica.mp3',
            image: "https://pico.scrolller.com/makima-s-buns-tsunderebean-chainsaw-man-656ytmioo4-608x1080.jpg",
            name: 'Song 1',
        },
        {
            src: 'https://open.spotify.com/intl-pt/track/4JG2Iw4Rb15sLiJH9wS5bj?flow_ctx=769cc95b-40ea-4b97-82fe-6d108ced9488%3A1697162769',
            image: 'https://letsgeek.com.br/wp-content/uploads/2021/08/208556429_506176184026406_7101088118539650017_n.jpg',
            name: 'Song 2',
        },
        {
            src: '/musica.mp3',
            image: 'https://www.anibiu.com/cdn/shop/products/243349514_1126709121195018_802225968355380415_n_600x.jpg',
            name: 'Song 2',
        },
    ];
    const [playlistIndex, setPlaylistIndex] = useState(0);
    const [songVolume, setSongVolume] = useState(0.2);
    const constraintsRef = useRef(null);
    const [isRangeDragging, setIsRangeDragging] = useState(false);


    useEffect(() => {
        if (isAudioReady) {
            audioRef.current.src = playlist[playlistIndex].src;
            audioRef.current.load();
            audioRef.current.play();
            audioRef.current.volume = 0.2;
        }
    }, [playlistIndex, isAudioReady]);

    const onAudioReady = () => {
        setIsAudioReady(true);
    };

    const handleSwapSong = (mov) => {
        let newIndex = playlistIndex + mov;
        if (newIndex < 0) {
            newIndex = playlist.length - 1;
        } else if (newIndex >= playlist.length) {
            newIndex = 0;
        }
        setPlaylistIndex(newIndex);
        audioRef.current.volume = songVolume
    };

    const handleAudioPlayPause = () => {
        if (isAudioReady) {
            if (isAudioPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setAudioPlaying(!isAudioPlaying);
        }
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        audioRef.current.volume = newVolume / 100;
        setSongVolume(event.target.value/100)
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
                className='fixed w-72 h-20 bottom-24 lg:bottom-3 lg:w-80 lg:h-16 left-3 flex items-center justify-around p-2 shadow-md shadow-zinc-900 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-500 rounded-md overflow-hidden cursor-move'
                drag={!isRangeDragging}
                dragConstraints={constraintsRef}
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}

            >
                <div className='controls text-xl lg:text-2xl text-white flex items-center space-x-1'>
                    <button onClick={() => handleSwapSong(-1)}><MdKeyboardDoubleArrowLeft /></button>
                    <button onClick={handleAudioPlayPause}>
                        {isAudioPlaying ? <BsPauseFill /> : <BsPlayFill />}
                    </button>
                    <button onClick={() => handleSwapSong(1)}><MdKeyboardDoubleArrowRight /></button>
                    <input
                        className='w-16 lg:w-28 cursor-pointer'
                        type="range"
                        min="0"
                        max="100"
                        defaultValue={20}
                        onChange={handleVolumeChange}
                        onPointerDownCapture={() => setIsRangeDragging(true)}
                        onPointerUpCapture={() => setIsRangeDragging(false)}
                        onTouchStart={() => setIsRangeDragging(true)}
                        onTouchEnd={() => setIsRangeDragging(false)}
                    />
                </div>
                {playlist[playlistIndex] && (
                    <div className='relative h-full aspect-square rounded-md overflow-hidden border-slate-950 border-2'>
                        <img
                            src={playlist[playlistIndex].image}
                            alt={playlist[playlistIndex].name}
                            className='w-full h-full z-10'
                        />
                        <audio
                            src={playlist[playlistIndex].src}
                            ref={audioRef}
                            onCanPlay={onAudioReady}
                        />

                    </div>
                )}
                <AiFillCloseCircle className='text-white text-xl cursor-pointer' onClick={handleCloseButtonClick} />
            </m.main>
        </>
    );
}
