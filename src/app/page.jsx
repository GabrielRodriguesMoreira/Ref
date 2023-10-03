'use client'
import React, { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Home() {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [modal, setmodal] = useState(false)
  const phoneNumber = '85987373084';

  const openFullscreenImage = (imageUrl) => {
    setFullscreenImage(imageUrl);
  };

  const closeFullscreenImage = () => {
    setFullscreenImage(null);
  };

const swapmodal = () =>{
  setmodal(!modal)
}

  const handleCallButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <main className="flex flex-col p-4 pb-0 lg:flex-row lg:space-x-2 ">
      <section className="flex w-full flex-col items-center space-y-3 mb-10 lg:w-3/5 lg:mb-0">
        <img className='lg:w-full' src="title.png" alt="" />
        <img src="/gifimage.gif" alt="" />
        <p className="font-kalam text-pink-700 text-xl lg:text-2xl">&quot;Ensinando com <br></br> <span className='ml-14'>responsabilidade!</span>&quot;</p>
        <button className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl lg:hidden">
          <p>Garanta sua Vaga!</p> <span className='bg-white text-4xl text-pink-700 rounded-full'><MdKeyboardArrowRight /></span>
        </button>
      </section>
      <section className='flex flex-col w-full items-center space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2'>
        <div
          className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm cursor-pointer '
          onClick={() => openFullscreenImage("https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg")}
        >
          <img className='rounded-sm max-h-52 object-cover' src="https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div
          className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm cursor-pointer '
          onClick={() => openFullscreenImage("https://horario.com.br/wp-content/uploads/2022/03/geha-blog-mar%C3%A7o-09-03.jpg")}
        >
          <img className='rounded-sm max-h-52 object-cover' src="https://horario.com.br/wp-content/uploads/2022/03/geha-blog-mar%C3%A7o-09-03.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div
          className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm cursor-pointer '
          onClick={() => openFullscreenImage("https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg")}
        >
          <img className='rounded-sm max-h-52 object-cover' src="https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div
          className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm cursor-pointer '
          onClick={() => openFullscreenImage("https://horario.com.br/wp-content/uploads/2022/03/geha-blog-mar%C3%A7o-09-03.jpg")}
        >
          <img className='rounded-sm max-h-52 object-cover' src="https://horario.com.br/wp-content/uploads/2022/03/geha-blog-mar%C3%A7o-09-03.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <button onClick={swapmodal} className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl col-span-2">
          <p>Garanta sua Vaga!</p> <span className='bg-white text-4xl text-pink-700 rounded-full'><MdKeyboardArrowRight /></span>
        </button>
      </section>

      {fullscreenImage && (
        <div onClick={closeFullscreenImage} className="fixed top-0 -left-2 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50">
          <img
            src={fullscreenImage}
            alt="Fullscreen"
            className="max-h-screen max-w-screen p-4"
          />
        </div>
      )}

      {modal && (
        <modal className="fixed top-0 -left-2 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80 z-50">
          <div className='bg-slate-100 w-80 h-72 p-20 space-x-10 rounded-sm flex justify-center items-center'>
            <button onClick={handleCallButtonClick} className='bg-pink-600 text-white p-6 rounded-sm font-inter text-md shadow-md h-full w-48'>
              Nos Ligue
            </button>
            <button className='bg-pink-600 text-white p-6 rounded-sm font-inter text-md shadow-md'>
              <a href="https://wa.me/5585987373084">Falar pelo <br></br> Whatsapp</a>
            </button>
          </div>
        </modal>
      )}

    </main>



  );
}
