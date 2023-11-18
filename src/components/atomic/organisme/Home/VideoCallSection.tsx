import React from 'react';
import { motion } from "framer-motion";
import home2 from "../../../../../public/images/home2.png";
import Typography from '../../atoms/Typography';
import LinkButton from '../../atoms/LinkButton';
import Image from 'next/image';
import MainWhiteGlobalComponent from './MainWhiteGlobalComponent';
import importedImages from '@/utils/importedImg';


type Props = {}

function VideoCallSection({ }: Props) {
    return (
        // <MainWhiteGlobalComponent title={'Organiser des appels vidéo avec des collaborateurs'} subTitle={`Rassemblez votre équipe, que ce soit pour des réunions, des sessions de brainstorming ou des formations, et vivez une expérience de collaboration sans précédent.`} buttonLink={'#'} img={importedImages.blackBoyVisio} />
        <MainWhiteGlobalComponent title={'Exprimez Librement'} subTitle={`Nous vous offrons un outil simple, convivial et intuitif, disponible en version web. Vous permettant d’aller à l’essentiel sans détour.`} buttonLink={'#'} img={importedImages.blackBoyVisio} />
        // <MainWhiteGlobalComponent title={'Organiser des appels vidéo avec des collaborateurs'} subTitle={`Organisez des appels vidéo fluides et engageants, où que vous soyez, et travaillez ensemble en temps réel sur des projets, des idées et des présentations. Notre plateforme intuitive et conviviale vous permet de partager des fichiers, d'annoter des documents et de collaborer de manière interactive, comme si vous étiez dans la même pièce.`} buttonLink={'#'} img={importedImages.blackBoyVisio} />
    )
}

export default VideoCallSection