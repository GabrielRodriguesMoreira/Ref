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
            image: "https://pico.scrolller.com/makima-s-buns-tsunderebean-chainsaw-man-656ytmioo4-608x1080.jpg",
        },
        {
            src: '/musica2.mp3',
            image: 'https://letsgeek.com.br/wp-content/uploads/2021/08/208556429_506176184026406_7101088118539650017_n.jpg',
        },
        {
            src: '/musica.mp3',
            image: 'https://www.anibiu.com/cdn/shop/products/243349514_1126709121195018_802225968355380415_n_600x.jpg',
        },
    ];

    useEffect(()=>{
        audioRef.current.volume = 0.2;
    },[])

    const playPauseAudio = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const previousTrack = () => {
        setPlaylistIndex(playlistIndex-1)
        audioRef.current.src = playlistIndex-1;
        audioRef.current.play();
        setIsPlaying(true);
    };

    const nextTrack = () => {
        audioRef.current.src = playlist[playlistIndex+1].src;
        audioRef.current.play();
        setIsPlaying(true);
        setPlaylistIndex(playlistIndex+1)
    };

    return (
        <m.main
            className="fixed w-80 h-16 flex items-center justify-around p-1 bottom-8 rounded-sm shadow-md shadow-zinc-900 bg-gradient-to-r from-zinc-800 via-zinc-700 to-zinc-500 cursor-move"
            drag={!isSliding}
            dragConstraints={{
                left: 0,
                top: 100 - window.innerHeight,
                bottom: 0,
                right: window.innerWidth - 350,
            }}
        >
            <audio ref={audioRef} src={playlist[playlistIndex].src} volume={0.2}></audio>
            <div className="flex text-2xl text-white">
                <button onClick={previousTrack}><MdKeyboardDoubleArrowLeft /></button>
                <button onClick={playPauseAudio}>
                    {isPlaying ? <BsPauseFill /> : <BsPlayFill />}
                </button>
                <button onClick={nextTrack}><MdKeyboardDoubleArrowRight /></button>
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
            <button className='text-xl text-white'><AiFillCloseCircle /></button>
        </m.main>
    )
}
