import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Home() {
  return (
    <main className="flex flex-col p-6 lg:flex-row h-full w-full max-h-screen max-w-screen items-center justify-center">
      <section className="flex flex-col items-center space-y-3 w-full lg:w-2/5 mb-10">
        <img className='lg:w-full' src="title.png" alt="" />
        <img src="/gifimage.gif" alt="" />
        <p className="font-kalam text-pink-700 text-xl lg:text-2xl">&quot;Ensinando com <br></br> responsabilidade!&quot;</p>
        <button className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl lg:hidden"> <p>Garanta sua Vaga!</p> <span className='bg-white text-4xl text-pink-700 rounded-full'><MdKeyboardArrowRight /></span> </button>
      </section>
      <section className='flex flex-col w-full lg:w-3/5 items-center lg:grid lg:grid-cols-2  lg:gap-2 lg:p-4'>
        <div className='bg-white p-3 flex flex-col w-full text-center space-y-3 font-inter text-lg rounded-sm '>
          <img className='rounded-sm' src="https://pbs.twimg.com/media/FNzfe8XWUAEu3qh?format=jpg&name=large" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div className='bg-white p-3 flex flex-col w-full text-center space-y-3 font-inter text-lg rounded-sm  '>
          <img className='rounded-sm' src="https://pbs.twimg.com/media/FNzfe8XWUAEu3qh?format=jpg&name=large" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div className='bg-white p-3 flex flex-col w-full text-center space-y-3 font-inter text-lg rounded-sm  '>
          <img className='rounded-sm' src="https://pbs.twimg.com/media/FNzfe8XWUAEu3qh?format=jpg&name=large" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div className='bg-white p-3 flex flex-col w-full text-center space-y-3 font-inter text-lg rounded-sm '>
          <img className='rounded-sm' src="https://pbs.twimg.com/media/FNzfe8XWUAEu3qh?format=jpg&name=large" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <button className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl col-span-2"> <p>Garanta sua Vaga!</p> <span className='bg-white text-4xl text-pink-700 rounded-full'><MdKeyboardArrowRight /></span> </button>
      </section>
    </main>
  )
}
