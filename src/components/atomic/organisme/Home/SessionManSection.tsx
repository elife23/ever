import React from 'react'
import Typography from '../../atoms/Typography'
import SessionManCard from '../Card/SessionManCard'
import { AiOutlineTeam } from 'react-icons/ai';
import { MdPermMedia, MdScreenShare } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';

type Props = {}

function SessionManSection({ }: Props) {
    return (
        <div className="h-max flex flex-col lg:flex-row bg-dark dark:bg-gray-900 lg:h-screen overflow-y-hidden pt-8 lg:py-14">
            <div className="container px-6 mx-auto flex items-center justify-center">
                <div className="items-center justify-center lg:flex-col ">

                    <div className="w-full lg:w-full">
                        <div className=" lg:max-w-full text-center">

                            <div className='flex flex-col gap-y-4 items-center justify-center'>
                                <Typography fontVariation='semibold' className="my-4 leading-8 text-xl md:text-2xl text-gray-800 dark:text-light lg:text-4xl font-ibm-plex-mono font-bold w-full text-light lg:max-w-lg" >Gestion de sessions et captures d’écrans</Typography>

                            </div>

                            <div className="flex flex-col items-center w-full lg:px-64">
                                <Typography className="mt-3 text-dark dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm text-light">
                                    Réunion en groupe ou en 1 à 1 plus simples avec beaucoup de fun et sans ennui.

                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="py-8 lg:py-8  w-full flex h-max flex-col items-center gap-y-8 lg:gap-y-0 lg:justify-evenly lg:flex-row" >
                        <SessionManCard title={"Sessions"} image={<RiTeamFill size={25} className="font-bold" style={{ fill: "#9ACC5A" }} />} body={"Initiez, accedez, partagez et cloturez des séssions en fonction de votre disponibilité et celles des participants"} />
                        <SessionManCard title={"Media"} image={<MdPermMedia size={25} className="font-bold" style={{ fill: "#FE5667" }} />} body={"EverSeed met à votre disposition la possibilité de manipuler des médias tels que du texte, des images et de pouvoir les télécharger."} />
                        <SessionManCard title={"Partage"} image={<MdScreenShare size={25} className="font-bold" style={{ fill: "#FF60A8" }} />} body={"Organisez des sessions partagée entre plusieurs membres de divers domaines et secteurs d’activité."} />
                    </div>
                </div>
            </div>
        </div >
    )
}

export default SessionManSection