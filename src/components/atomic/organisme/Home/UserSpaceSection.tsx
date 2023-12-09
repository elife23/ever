import React, { useState } from 'react'
import Typography from '../../atoms/Typography'
import Image from 'next/image'
import LinkButton from '../../atoms/LinkButton'
import importedImages from '@/utils/importedImg'
import { FaAngleRight } from 'react-icons/fa6'
import UserSpaceOption1 from './UserSpaceOption1'

type Props = {}

function UserSpaceSection({ }: Props) {
    const [profState, setProfState] = useState(true);
    const [ytbState, setYtbState] = useState(false);
    const [entState, setEntState] = useState(false);
    const [creaContentState, setCreaContentState] = useState(false);
    
    const handleProfState = () => {
        setProfState(true);
        setYtbState(false);
        setEntState(false);
        setCreaContentState(false);
    }
    
    const handleYtpState = () => {
        setProfState(false);
        setYtbState(true);
        setEntState(false);
        setCreaContentState(false);
    }

    const handleEntState = () => {
        setProfState(false);
        setYtbState(false);
        setEntState(true);
        setCreaContentState(false);
    }

    const handleCreaContentState = () => {
        setProfState(false);
        setYtbState(false);
        setEntState(false);
        setCreaContentState(true);
    }

    return (
        <div className="h-max flex flex-col lg:flex-row bg-white dark:bg-gray-900 lg:h-max overflow-y-hidden pt-8 lg:py-14">
            <div className="container px-6 mx-auto">
                <div className="items-center justify-center lg:flex-col ">



                    <div className="w-full lg:w-full">
                        <div className=" lg:max-w-full text-center flex flex-col gap-y-4 ">

                            <div className='flex flex-col gap-y-4 items-center justify-center'>
                                <Typography fontVariation='semibold' className="my-4 lg:max-w-lg leading-8 text-xl md:text-2xl text-gray-800 dark:text-white lg:text-4xl font-ibm-plex-mono font-bold w-full" >Un espace utilisateur</Typography>

                            </div>



                            <div className="flex flex-col items-center lg:justify-start w-full lg:px-22">
                                <Typography className="mt-3 text-dark dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm ">
                                    Rejoignez dès maintenant notre communauté diversifiée. Que vous soyez un particulier qui souhaite organiser des appels vidéo avec des proches, un créateur de contenus qui veut partager des tutoriels en ligne, un professionnel en quête d{"'"}outils de communication efficaces ou un formateur cherchant à dispenser des cours à distance, notre plateforme est là pour vous.

                                </Typography>
                            </div>

                            <div className='flex gap-x-2 lg:w-full py-4 justify-center items-center'>
                                <LinkButton noMarginTop={true} href={"#"} className='bg-dark border-dark  rounded-md hover:bg-dark/90 md:w-60'>
                                    En savoir plus
                                </LinkButton>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:my-6 overflow-x-hidden">
                                <Typography className=" w-full md:w-max lg:text-base">EverSeed peut être utilisé par :</Typography>
                                <div className="flex gap-x-3 overflow-x-auto w-full lg:flex-row lg:justify-evenly lg:gap-x-3">
                                    <button className={` btn ${profState == true ? 'bg-gray-secondary border-gray-secondary' : ''} bg-gray hover:bg-gray-secondary hover:border-gray/90 rounded-md border-gray hover:cursor-pointer text-white`} onClick={() => handleProfState()}>Professeur</button>

                                    <button className={` btn ${ytbState == true ? 'bg-gray-secondary border-gray-secondary' : ''} bg-gray hover:bg-gray-secondary hover:border-gray/90 rounded-md border-gray hover:cursor-pointer text-white`} onClick={() => handleYtpState()}>Youtubeurs</button>

                                    <button className={` btn ${entState == true ? 'bg-gray-secondary border-gray-secondary' : ''} bg-gray hover:bg-gray-secondary hover:border-gray/90 rounded-md border-gray hover:cursor-pointer text-white`} onClick={() => handleEntState()}>Entrepreneurs</button>

                                    <button className={` btn ${creaContentState == true ? 'bg-gray-secondary border-gray-secondary' : ''} bg-gray  hover:bg-gray-secondary hover:border-gray/90 rounded-md border-gray hover:cursor-pointer text-white`} onClick={() => handleCreaContentState()}>Créateurs de contenus...</button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* <div className="flex items-center justify-center w-full mt-6 lg:w-full">
            <Image className="w-full h-3/3 lg:max-w-lg lg:h-full " src={img} alt="whiteboard" />
          </div> */}

                    <div className="flex flex-col lg:flex-row w-full gap-x-6 lg:justify-center py-4">
                        {profState && <UserSpaceOption1 />}
                    </div>

                </div>
            </div>
        </div >
    )
}

export default UserSpaceSection