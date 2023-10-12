'use client'
import React, { useState, useEffect, lazy, Suspense } from 'react';
import { MdKeyboardArrowRight, MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { motion as m, AnimatePresence, stagger } from 'framer-motion';
import Image from 'next/image'
import Loading from './loading.js';

const Song = lazy(() => import('./components/song/Song'));
const Modal = lazy(() => import('./components/modal/modal'));


export default function Home() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [modal, setModal] = useState(false);
  const [load, setload] = useState(false)
  const imagesdata = [{
    src: "/image.webp",
    text: '10 anos de experiência!'
  }, {
    src: "/image.webp",
    text: 'Ambiente acolhedor!'
  }, {
    src: "/image.webp",
    text: 'Ótima localização!'
  }, {
    src: "/image.webp",
    text: 'Profissionais de qualidade!'
  },
  ]

  useEffect(() => {
    setload(true)
  }, [])

  const openFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  const swapModal = () => {
    setModal(!modal);
  };

  const scrollPage = () => {
    window.scrollBy(0, 800);
  }

  const parentMotion = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5, delay: 1 }
    }
  }

  const imagesMotion = {
    hidden: {
      x: -1500,
      y: -200,
      rotate: 380,
    },
    show: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        damping: 10,
        stiffness: 100,
        ease: "easeOut",
      },
    },
  };



  return (
    <>
      {load ? <m.main
        className="flex flex-col  pb-10 lg:flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <section className='w-full h-full flex flex-col lg:flex-row p-3'>
          <div className="flex w-full flex-col items-center space-y-3 lg:w-3/5 lg:mb-0">
            <img src="/title.png" />
            <video width="640" height="360" autoPlay loop muted>
              <source src="/gifimage.webm" type="video/webm" />
              Your browser does not support the video tag.
            </video>
            <p className="font-kalam text-pink-700 text-xl mb-5  lg:text-2xl">
              &quot;Ensinando com <br></br> <span className="ml-14">responsabilidade!</span>&quot;
            </p>
            <button onClick={swapModal} className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl lg:hidden">
              <p>Garanta sua Vaga!</p> <span className="bg-white text-4xl text-pink-700 rounded-full"><MdKeyboardArrowRight /></span>
            </button>
            <div onClick={scrollPage} className='h-48 w-full flex justify-center items-center space-x-4 font-sans text-3xl text-pink-700 font-black animate-pulse lg:hidden'>
              <MdKeyboardDoubleArrowDown className=' text-5xl animate-bounce' /> <p>Role para baixo</p> <MdKeyboardDoubleArrowDown className='text-5xl animate-bounce' />
            </div>
          </div>
          <m.div
            className="flex flex-col w-full items-center space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2 lg:ml-6"
            variants={parentMotion}
            initial="hidden"
            whileInView="show"
          >
            {imagesdata.map((data, index) => (
              <m.div
                key={index}
                className="bg-white border-1 border-black p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm cursor-pointer shadow-lg "
                onClick={() => openFullscreenImage(data.src)}
                variants={imagesMotion}
                whileHover={{ scale: 1.1 }}
              >
                <div className='relative h-72 lg:h-56'>
                  <Image style={{ objectFit: "cover" }} className="rounded-sm" fill src={data.src} alt="" />
                </div>
                <p>{data.text}</p>
              </m.div>
            ))}
            <button onClick={swapModal} className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl col-span-2 transition-colors duration-300 lg:mb-0 hover:bg-pink-700">
              <p>Garanta sua Vaga!</p> <span className="bg-white text-4xl text-pink-700 rounded-full"><MdKeyboardArrowRight /></span>
            </button>
          </m.div>
        </section>

        <section className='w-full mt-10 flex justify-center'>
          <div className=' bg-pink-500 w-full h-[400px] lg:h-[600px] space-y-3 p-2 rounded-sm flex flex-col justify-center text-center items-center'>
            <h1 className='text-white font-inter text-3xl font-black'>Onde nos Encontrar</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.3219278177307!2d-38.576046361683815!3d-3.734767765175114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74b3e63c0b099%3A0xfa95d644e67a3b3c!2sRefor%C3%A7o%20Escolar%20Tia%20Glau!5e0!3m2!1spt-PT!2sbr!4v1696977218383!5m2!1spt-PT!2sbr" className='w-full h-full' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <p className='text-white font-inter text-md font-black'>Rua Emilia Freitas 140 - Padre Andrade - Fortaleza/CE</p>
          </div>
        </section>

        <AnimatePresence>
          {fullscreenImage && (
            <div onClick={closeFullscreenImage}
              className="fixed top-0 left-0 lg:-left-2 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50">
              <m.img src={fullscreenImage}
                alt="Fullscreen"
                className="max-h-screen max-w-screen p-4"
                initial={{ scale: 0.1 }}
                animate={{ scale: 1 }}
              />
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence
          initial='false'
          onExitComplete={() => null}
        >
          <Suspense fallback={<Loading />}>
            {modal && (
              <m.div onClick={swapModal}
                className="fixed top-0 left-0 lg:-left-2 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Modal />
              </m.div>
            )}
          </Suspense>
        </AnimatePresence >
        <Suspense fallback={<Loading />}>
          <Song />
        </Suspense>

      </m.main > : <Loading />}

    </>
  );
}
