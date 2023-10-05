import { motion as m,  } from 'framer-motion'

export default function Modal(handleCallButtonClick, swapModal) {

    const dropIn = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: "0",
            opacity: 1,
            transition: { duration: 0.3, type:'spring', damping: 15, },
        },
        exit: {
            y: "-100vh",
            opacity: 0
        },
    }

    return (
        <m.div
            className="bg-slate-100 w-full lg:w-1/2 h-1/2 p-20 space-y-10 lg:space-y-0 lg:space-x-10 rounded-sm flex flex-col lg:flex-row justify-center items-center relative"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropIn}
            onClick={(e) => { e.stopPropagation() }}
        >
            <button onClick={handleCallButtonClick} className="bg-pink-600 text-white p-6 rounded-sm font-inter text-md shadow-md h-1/2 w-full lg:w-1/4 flex items-center justify-center">
                Nos Ligue
            </button>
            <button className="bg-pink-600 text-white p-6 rounded-sm font-inter text-md shadow-md h-1/2 w-full lg:w-1/4 flex items-center justify-center">
                <a href="https://wa.me/5585987373084">Falar pelo <br></br> Whatsapp</a>
            </button>
        </m.div>
    )
}