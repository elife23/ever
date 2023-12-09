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
        <MainWhiteGlobalComponent title={'Exprimez Librement'} subTitle={`Nous vous offrons un outil simple, convivial et intuitif, disponible en version web. Vous permettant d’aller à l’essentiel sans détour.`} buttonLink={'#'} img={importedImages.visio} />
    )
}

export default VideoCallSection