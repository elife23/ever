import React from 'react'
import Typography from '../../atoms/Typography'
import Image from 'next/image'
import ImportedSvgs from '@/utils/ImportedSvgs'
import Gif from "../../../../../public/images/Gif/header.gif";
import headerWhiteboard from "../../../../../public/images/headerWhiteboard.svg";
import { motion } from "framer-motion";
import Link from 'next/link';
import LinkButton from '../../atoms/LinkButton';
import importedImages from '@/utils/importedImg';
import LinkButtonTransparent from '../../atoms/LinkButtonTransparent';
import clientPaths from '@/utils/routes/client_routes';
import HeaderPrejoinBtn from '../../molecule/HeaderPrejoinBtn';

type Props = {}

function MainHeader({ }: Props) {
  return (
    <>
      <header className="bg-white h-max dark:bg-gray-900 py-10 lg:h-max relative overflow-hidden">
        <div className="container pl-6 mx-auto md:h-full">
          <div className="items-center lg:flex md:h-full">
            <div className="w-full h-1/2 lg:h-full lg:flex lg:items-center lg:w-6/12">
              <div className="lg:max-w-max w-full">

                <div className='flex flex-col gap-y-4'>
                  <Typography fontVariation='semibold' className="my-4 lg:leading-[4.2rem] leading-8 text-2xl md:text-3xl text-gray-800 dark:text-white lg:text-5xl font-bold w-full font-cmTiempo" ><span className='text-dark '>Restez Créatif.
                  </span> <br />
                    {/* <span className='text-gray-800 mt-4'>Restez Créatif.
EverSeed, un outil, une plateforme de trois en un...
                    </span> */}
                  </Typography>
                </div>

                <Typography className="mt-2 text-dark bg-yellow-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm lg:w-11/12">
                  Nous vous offrons un outil qui vous permets de donner libre cours à votre imagination et de créer des vidéos uniques et originales. Avec cet outil, vous pouvez réaliser des effets spéciaux complexes et des transitions fluides, sans avoir besoin de compétences techniques approfondies.
                </Typography>

                <div className='flex flex-col gap-y-2'>
                  <LinkButton href={clientPaths.meetingRoom} className="bg-primary border-primary">Lancer une visioconférence</LinkButton>
                  <HeaderPrejoinBtn />
                  {/* <LinkButtonTransparent href="#" isTransparent={true}>Réserver une démo privée</LinkButtonTransparent> */}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-[50%] overflow-y-hidden">
              {/* <Image className="w-full h-full lg:max-w-xl" src={Gif} alt="Header" /> */}
              <Image className=" w-full h-full lg:max-w-3xl lg:h-max rounded-lg" width={1000} height={1000} src={importedImages.headerOne} alt="header Image" />
              {/* <Image className="lg:absolute lg:-right-36 w-full h-full lg:max-w-[52rem] lg:h-max rounded-lg" width={1000} height={1000} src={importedImages.headerImg} alt="header Image" /> */}

            </div>


          </div>
          <div className="border-t-2 border-t-gray-secondary w-full py-4 ">
            <div className="w-full h-full flex flex-col items-center ">
              <p className='text-gray text-center text-base'>“ Se réunir est un début, rester ensemble est un progrès, travailler<br /> ensemble est la réussite “</p>
              <Typography fontVariation='bold' className="text-gray-secondary text-lg my-2">Henry Ford</Typography>
              <Image className='rounded-full w-24 h-24' alt="henryFord" src={importedImages.henryFord} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default MainHeader