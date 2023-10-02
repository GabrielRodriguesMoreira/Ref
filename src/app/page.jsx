import { MdKeyboardArrowRight } from 'react-icons/md';

export default function Home() {
  return (
    <main className="flex flex-col p-4  lg:flex-row lg:space-x-2 justify-center items-center">
      <section className="flex w-full flex-col items-center space-y-3 mb-10 lg:w-3/5">
        <img className='lg:w-full' src="title.png" alt="" />
        <img src="/gifimage.gif" alt="" />
        <p className="font-kalam text-pink-700 text-xl lg:text-2xl">&quot;Ensinando com <br></br> responsabilidade!&quot;</p>
        <button className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl  lg:hidden"> <p>Garanta sua Vaga!</p> <span className='bg-white text-4xl text-pink-700 rounded-full'><MdKeyboardArrowRight /></span> </button>
      </section>
      <section className='flex flex-col w-full items-center space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2'>
        <div className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm'>
          <img className='rounded-sm max-h-52 object-cover' src="https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm'>
          <img className='rounded-sm max-h-52 object-cover' src="https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm'>
          <img className='rounded-sm max-h-52 object-cover' src="https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        <div className='bg-white p-2 flex flex-col w-full text-center space-y-2 font-inter text-lg rounded-sm'>
          <img className='rounded-sm max-h-52 object-cover' src="https://blog.redebatista.edu.br/wp-content/uploads/2020/03/original-5163ba17ddbf11f7562a4c18a7f7cbb6.jpg" alt="" />
          <p>10 anos de experiência!</p>
        </div>
        
        <button className="flex items-center justify-center space-x-5 bg-pink-600 p-4 w-full text-2xl text-white font-inter rounded-sm shadow-xl col-span-2"> <p>Garanta sua Vaga!</p> <span className='bg-white text-4xl text-pink-700 rounded-full'><MdKeyboardArrowRight /></span> </button>
      </section>
    </main>
  )
}