import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import LinkButton from '../../atoms/LinkButton';
import Typography from '../../atoms/Typography';
import home3 from "../../../../../public/images/home3.png";
import MainWhiteGlobalComponent from './MainWhiteGlobalComponent';
import importedImages from '@/utils/importedImg';

type Props = {}

function VisualisationSection({ }: Props) {
  return (
    // <MainWhiteGlobalComponent title={'Enregistrez, téléchargez et partagez vos écrans en toute simplicité'} subTitle={`Découvrez notre fonctionnalité de "screen record" et capturez facilement vos écrans pour des démonstrations, des tutoriels ou des présentations percutantes.`} buttonLink={'#'} img={importedImages.headerImg} />
    <MainWhiteGlobalComponent title={'Collaborer plus simplement'} subTitle={`Réunion en groupe ou en 1 à 1 plus simples avec beaucoup de fun et sans ennui.`} buttonLink={'#'} img={importedImages.headerImg} />
  )
}

export default VisualisationSection