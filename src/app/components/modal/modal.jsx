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
        <m.div
            className="bg-gradient-to-r from-purple-300 via-slate-100 to-green-300 w-full lg:w-3/4 h-1/2 p-20 space-y-10 lg:space-y-0 lg:space-x-10 rounded-sm flex flex-col lg:flex-row justify-center items-center relative"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropIn}
            onClick={(e) => { e.stopPropagation() }}
        >
            <motion.button
                onClick={handleCallButtonClick}
                className="bg-pink-600 text-white p-6 rounded-sm font-inter text-md shadow-md h-1/2 w-full lg:w-1/4 flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.15 }}
            >
                <BsFillTelephoneFill className='text-2xl' /> <span>Ligar</span>
            </motion.button>
            <motion.button
                className="bg-pink-600 text-white p-6 rounded-sm font-inter text-md shadow-md h-1/2 w-full lg:w-1/4 flex items-center justify-center space-x-3"
                whileHover={{ scale: 1.15 }}
            >
                <BsWhatsapp className='text-2xl' />  <a href="https://wa.me/5585988621426">Falar pelo <br></br> Whatsapp</a>
            </motion.button>
        </m.div>
    )
}