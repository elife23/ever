import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import Typography from '../../atoms/Typography';
import home4 from "../../../../../public/images/home4.png";
import home5 from "../../../../../public/images/home5.png";

type Props = {}

function Visualisation({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row bg-tertiary py-10 dark:bg-gray-900">
            <div className="container px-6 mx-auto">
                <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full ">
                    <div className=" lg:max-w-max w-full  lg:flex flex-col lg:items-end">

                        <div className='flex flex-col gap-y-4'>
                            <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-3xl font-ibm-plex-mono font-bold w-full text-center" >
                                La visualisation permet d{"'"}obtenir des informations plus rapidement
                            </Typography>

                        </div>

                        <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-center text-sm">
                            Nous proposons un large éventail de types de diagrammes pour tous les cas d{"'"}utilisation. Voici quelques-unes de nos options les plus populaires. Et.., bien sûr, vous pouvez mélanger, assortir et expérimenter pour obtenir des bibliothèques de formes personnalisées qui répondent à vos besoins uniques.
                        </Typography>
                        <div className='py-5 w-full flex flex-col items-center lg:items-start lg:flex-row'>
                            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center w-full h-full md:w-2/4 md:h-2/4 mt-6 lg:mt-0 lg:h-1/2 lg:w-1/2">
                                <Image className="w-2/3 h-2/3 lg:x-3/4" src={home5} alt="homeVirstualisation1" />


                            </motion.div>

                            <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center w-full h-full md:w-2/4 md:h-2/4 mt-6 lg:mt-0 lg:h-1/2 lg:w-1/2">
                                <Image className="w-2/3 h-2/3 lg:w-3/4" src={home4} alt="homeVirstualisation2" />


                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Visualisation