import React from 'react';
import {motion} from "framer-motion";
import home2 from "../../../../../public/images/home2.png";
import Typography from '../../atoms/Typography';
import LinkButton from '../../atoms/LinkButton';
import Image from 'next/image';


type Props = {}

function VideoCallSection({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row bg-white py-10 dark:bg-gray-900">
            <div className="container px-6 mx-auto">
                <div className="items-center lg:flex ">



                    <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-1/2">
                        <div className=" lg:max-w-max w-full  lg:flex lg:flex-col lg:items-end">

                            <div className='flex flex-col gap-y-4'>
                                <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-3xl font-ibm-plex-mono font-bold w-full text-right" >Organiser des appels vidéo avec des collaborateurs</Typography>

                            </div>

                            <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3 leading-loose  text-right text-sm ">
                            Construire des tableaux blancs, des organigrammes, des diagrammes UML et de processus, des ERD, des organigrammes et des tableaux de bord. UML, diagrammes de processus, ERD, organigrammes, etc. plus - Everseed vous met en valeur.

                            </Typography>

                            <div className='flex gap-x-2 items-end justify-end w-full '>
                                <LinkButton href="" >
                                    En apprendre plus
                                </LinkButton>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <Image className="w-2/3 h-2/3 lg:w-3/4" src={home2} alt="Header" />


                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default VideoCallSection