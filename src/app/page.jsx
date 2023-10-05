'use client'
import React, { useState, useEffect } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { motion as m, AnimatePresence } from 'framer-motion';
import Modal from './components/modal/modal';

export default function Home() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const phoneNumber = '85987373084';

  // Simulate loading delay
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed
  }, []);

  const openFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

  const swapModal = () => {
    setModal(!modal);
  };

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <main className="flex flex-col p-4 pb-0 lg:flex-row lg:space-x-2">
      <section className="flex w-full flex-col items-center space-y-3 mb-10 lg:w-3/5 lg:mb-0">
        <img className="w-full" src="title.png" alt="" />
        {isLoading ? (
          <div className="animate-pulse w-64 h-64 bg-lime-200 rounded-full"></div>
        ) : (
          <img src="/gifimage.gif" alt="" />
        )}
        <p className="font-kalam text-pink-700 text-xl lg:text-2xl">
          &quot;Ensinando com <br></br> <span className="ml-14">responsabilidade!</span>&quot;
        </p>
        <button onClick={swapModal} className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl lg:hidden">
          <p>Garanta sua Vaga!</p> <span className="bg-white text-4xl text-pink-700 rounded-full"><MdKeyboardArrowRight /></span>
        </button>
      </section>
      <section className="flex flex-col w-full items-center space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="w-full h-64 bg-lime-200 rounded-md animate-pulse"></div>
          ))
        ) : (
          <>
            {[
              "https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg",
              "https://horario.com.br/wp-content/uploads/2022/03/geha-blog-mar%C3%A7o-09-03.jpg",
              "https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg",
              "https://horario.com.br/wp-content/uploads/2022/03/geha-blog-mar%C3%A7o-09-03.jpg",
            ].map((imageUrl, index) => (
              <m.div
                key={index}
                className="bg-white border-1 border-black p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm cursor-pointer"
                onClick={() => openFullscreenImage(imageUrl)}
                whileHover={{ scale: 1.1 }}
              >
                <img className="rounded-sm max-h-52 object-cover" src={imageUrl} alt="" />
                <p>10 anos de experiência!</p>
              </m.div>
            ))}
          </>
        )}
        <button onClick={swapModal} className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl col-span-2 mb-10 lg:mb-0">
          <p>Garanta sua Vaga!</p> <span className="bg-white text-4xl text-pink-700 rounded-full"><MdKeyboardArrowRight /></span>
        </button>
      </section>

      {fullscreenImage && (
        <div onClick={closeFullscreenImage} className="fixed top-0 left-0 lg:-left-2 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50">
          <img src={fullscreenImage} alt="Fullscreen" className="max-h-screen max-w-screen p-4" />
        </div>
      )}
      <AnimatePresence
        initial='false'
        onExitComplete={() => null}
      >
        {modal && (
          <m.div onClick={swapModal} 
          className="fixed top-0 left-0 lg:-left-2  w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50 px-6"
          initial={{opacity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          transition={{duration:0.3}}
          >

            <Modal handleCallButtonClick={handleCallButtonClick} swapModal={swapModal} />
          </m.div>
        )}
      </AnimatePresence >
    </main >
  );
}
