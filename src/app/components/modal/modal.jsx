import { motion as m } from 'framer-motion'
import { BsWhatsapp } from 'react-icons/bs';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { motion } from 'framer-motion'
export default function Modal() {

    const phoneNumber = '85988621426';
    const handleCallButtonClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: { duration: 0.3, type: 'spring', damping: 15, },
        },
        exit: {
            y: "-100vh",
            opacity: 0
        },
    }

    return (
        <m.main
            className="bg-gradient-to-br from-sky-100 to-sky-400 w-full h-2/3 lg:h-4/5 lg:w-2/4  rounded-md flex flex-col items-center relative"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropIn}
            onClick={(e) => { e.stopPropagation() }}
        >
            <section className='h-3/5 w-full flex text-center justify-center '>

                <img src="/meninoloiro.png" className='h-full animate-bounce' alt="Menino Loiro" />
                <h1 className='font-kalam text-4xl text-white mt-10 drop-shadow-[0_1.2px_2.2px_rgba(0,0,0,0.8)]'>Como prefere entrar em contato?</h1>
            </section>

            <section className='h-2/5 w-full flex flex-col  justify-center items-center text-center space-y-6  p-3 bg-gradient-to-b from-green-400 to-green-700 rounded-t-2xl rounded-b-md'>
                <motion.button
                    onClick={handleCallButtonClick}
                    className="bg-purple-500 text-white p-6 rounded-sm font-inter text-xl shadow-lg shadow-black/30 h-1/3 w-full flex items-center justify-center space-x-3"
                    whileHover={{ scale: 1.15 }}
                >
                    <BsFillTelephoneFill className='text-2xl' /> <span>Ligar</span>
                </motion.button>
                <motion.button
                    className="bg-purple-500 text-white p-6 rounded-sm font-inter text-xl shadow-lg shadow-black/30 h-1/3 w-full flex items-center justify-center space-x-3"
                    whileHover={{ scale: 1.15 }}
                >
                    <BsWhatsapp className='text-2xl' />  <a href="https://wa.me/5585988621426">Falar pelo Whatsapp</a>
                </motion.button>
            </section>

        </m.main>
    )
}