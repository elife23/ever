import Link from 'next/link'
import React from 'react'
import Typography from '../../atoms/Typography'
import Image from 'next/image';
import { motion } from "framer-motion";
import LinkButton from '../../atoms/LinkButton';
import home1 from "../../../../../public/images/home1.png";
import importedImages from '@/utils/importedImg';
import MainBackgroundColoredGlobalComponent from './MainColoredGlobalComponent';

type Props = {}

function ProductiveSection({ }: Props) {
  return (
    // <MainBackgroundColoredGlobalComponent title={'Soyez plus productif en un temps.'} subTitle={`Aucune autre application de création de diagrammes ne peut égaler la vitesse, la simplicité et la puissance d'Everseed. En utilisant des composants instantané et intuitifs, il suffit de dessiner.`} buttonLink={'#'} img={importedImages.whiteBoardImg} />
    <MainBackgroundColoredGlobalComponent title={'Gagnez en Temps'} subTitle={`Nous vous offrons un outil simple, convivial et intuitif, disponible en version web. Vous permettant d’aller à l’essentiel sans détour.`} buttonLink={'#'} img={importedImages.whiteBoardImg} />
  )
}

export default ProductiveSection