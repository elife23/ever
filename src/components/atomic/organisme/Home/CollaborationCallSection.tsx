import React from 'react'
import { motion } from "framer-motion";
import Typography from '../../atoms/Typography';
import Image from 'next/image';
import importedImages from '@/utils/importedImg';
import { BsGraphUp } from 'react-icons/bs';
import { RiScreenshot2Fill, RiTimerFlashFill } from 'react-icons/ri';
import {GiTeamIdea} from "react-icons/gi";
import CollaborationCallCard from '../Card/CollaborationCallCard';

type Props = {}

function CollaborationCallSection({ }: Props) {
    return (
        <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="h-max flex flex-col lg:flex-row dark:bg-gray-900 lg:h-max overflow-y-hidden pt-8 lg:pt-14">
            <div className="container px-6 mx-auto">
                <div className="items-center justify-center lg:flex-col ">



                    <motion.div whileInView={{ opacity: 1 }} initial={{ y: -60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }} className="w-full lg:w-full">
                        <div className=" lg:max-w-full text-center">

                            <div className='flex flex-col gap-y-4 items-center justify-center'>
                                <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-4xl font-ibm-plex-mono font-bold w-full lg:max-w-xl" > <span className="bg-yellow">Collaborer</span> plus simplement</Typography>

                            </div>

                            <div className="flex flex-col items-center w-full lg:px-64">
                                <Typography className="mt-3 text-dark dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm">
                                Les tableaux de note collaboratif avec everSeed facilitent la communication entre les membres de l{"'"}équipe en centralisant les informations et en permettant à tous de les consulter.
                                </Typography>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div whileInView={{ opacity: 1 }} initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="flex items-center justify-center w-full mt-6 lg:w-full">
                        <Image className="w-full h-3/3 lg:max-w-max lg:h-full " src={importedImages.whiteboardLive} alt="whiteboard" />
                    </motion.div>

                    <div className="py-8 lg:py-8  w-full flex h-max flex-col items-center gap-y-8 lg:gap-y-0 lg:justify-evenly lg:flex-row" >
                        <CollaborationCallCard title={"Résultat"} subtitle={"Gagnez en Temps"} icon={<RiTimerFlashFill size={15} className="font-bold" style={{fill: "#000000"}} />} body={"Simple, convivial et intuitif, disponible en version web. Allez à l’essentiel sans détour."} />
                        <CollaborationCallCard title={"Esprit d’équipe"} subtitle={"visioconference"} icon={<GiTeamIdea size={15} className="font-bold" style={{fill: "#000000"}} />} body={"Réunion en groupe ou en 1 à 1 plus simples et intuitive avec beaucoup de fun et sans ennui. "} />
                        <CollaborationCallCard title={"Diversité"} subtitle={"Enregistrement d'écran"} icon={<RiScreenshot2Fill size={15} className="font-bold" style={{fill: "#000000"}} />} body={"Que ça soit le direct, ou le différé, chacun de vos lecteurs vivra une expérience unique. Que vous pourrez capturer"} />
                    </div>
                </div>
            </div>
        </motion.div >
    )
}

export default CollaborationCallSection