'use client'
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion as m, AnimatePresence, stagger } from 'framer-motion';
import Modal from './components/modal/modal';
import Song from './components/song/Song';
import Loading from './loading.js';

export default function Home() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [modal, setModal] = useState(false);
  const [load, setload] = useState(false)
  const imagesdata = [{
    src: "https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg",
    text: '10 anos de experiência!'
  }, {
    src: "https://horario.com.br/wp-content/uploads/2022/03/geha-blog-mar%C3%A7o-09-03.jpg",
    text: 'Ambiente acolhedor!'
  }, {
    src: "https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg",
    text: 'Ótima localização!'
  }, {
    src: "https://watermark.lovepik.com/photo/20211209/large/lovepik-english-teacher-image-teacher-picture_501713021.jpg",
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

  const parentMotion = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.5, delay: 1 }
    }
  }
  const getRandomPosition = () => ({
    x: Math.floor(Math.random() * 1700) - 500, // Updated range from -500 to 1200
    y: Math.floor(Math.random() * 1700) - 500, // Updated range from -500 to 1200
    rotate: 1080
  });


  const imagesMotion = {
    hidden: getRandomPosition(),
    show: {
      x: 0,
      y: 0,
      rotate: 0,
      transition: { duration: 0.8 },
    },
  };


  return (
    <>
      {load ? <m.main
        className="flex flex-col p-3 pb-10 lg:flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}>
        <section className='w-full h-full flex flex-col lg:flex-row'>
          <div className="flex w-full flex-col items-center space-y-3 mb-10 lg:w-3/5 lg:mb-0">
            <img src="/title.png" />
            <img src="/gifimage.gif" alt="" />
            <p className="font-kalam text-pink-700 text-xl lg:text-2xl">
              &quot;Ensinando com <br></br> <span className="ml-14">responsabilidade!</span>&quot;
            </p>
            <button onClick={swapModal} className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl lg:hidden">
              <p>Garanta sua Vaga!</p> <span className="bg-white text-4xl text-pink-700 rounded-full"><MdKeyboardArrowRight /></span>
            </button>
          </div>
          <m.div
            className="flex flex-col w-full items-center space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2 lg:ml-6"
            variants={parentMotion}
            initial="hidden"
            animate="show"
          >
            {imagesdata.map((data, index) => (
              <m.div
                key={index}
                className="bg-white border-1 border-black p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm cursor-pointer shadow-lg"
                onClick={() => openFullscreenImage(data.src)}
                variants={imagesMotion}
                whileHover={{ scale: 1.1 }}
              >
                <img className="rounded-sm max-h-52 object-cover" src={data.src} alt="" />
                <p>{data.text}</p>
              </m.div>
            ))}
            <button onClick={swapModal} className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl col-span-2 transition-colors duration-300 lg:mb-0 hover:bg-pink-700">
              <p>Garanta sua Vaga!</p> <span className="bg-white text-4xl text-pink-700 rounded-full"><MdKeyboardArrowRight /></span>
            </button>
          </m.div>
        </section>

        <section className='w-full mt-10 flex justify-center'>
          <div className=' bg-pink-500 w-full lg:w-4/5 space-y-3 p-3 rounded-sm shadow-md flex flex-col justify-center text-center items-center'>
            <h1 className='text-white font-inter text-3xl font-black'>Onde nos Encontrar</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.3219278177307!2d-38.576046361683815!3d-3.734767765175114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74b3e63c0b099%3A0xfa95d644e67a3b3c!2sRefor%C3%A7o%20Escolar%20Tia%20Glau!5e0!3m2!1spt-PT!2sbr!4v1696977218383!5m2!1spt-PT!2sbr" className='w-full h-96' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
        </AnimatePresence >

        <Song />
      </m.main > : <Loading />}

    </>
  );
}
