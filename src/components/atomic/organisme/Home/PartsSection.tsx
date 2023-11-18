import React from 'react'
import Typography from '../../atoms/Typography'
import LinkButton from '../../atoms/LinkButton'
import Image from 'next/image';
import ImportedSvgs from '@/utils/ImportedSvgs';
import importedImages from '@/utils/importedImg';
import PartOrganisme from '../PartOrganisme';
import clientPaths from '@/utils/routes/client_routes';

type Props = {}

function PartsSection({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row bg-tertiary dark:bg-gray-900 lg:h-screen">
            <div className="container px-6 mx-auto flex items-center justify-center py-10">
                <div className=' flex flex-col items-center justify-center lg:justify-around w-full gap-y-8 lg:flex-row lg:gap-x-8'>
                    {/* Tablau blanc virtuel */}
                    {/* <PartOrganisme img={importedImages.whiteBoardImg} alt="whiteboard" title={'Tableau blanc virtuel'} body={'Collaborez en temps réel sur le tableau blanc virtuelle et donnez vies à vos idées ensemble.'} link={clientPaths.meetingRoom} /> */}
                    <PartOrganisme img={importedImages.whiteBoardImg} alt="whiteboard" title={'Gagnez en Temps'} body={'Nous vous offrons un outil simple, convivial et intuitif, disponible en version web. Vous permettant d’aller à l’essentiel sans détour.'} link={clientPaths.meetingRoom} /> 

                    {/* Visioconference */}
                    {/* <PartOrganisme img={importedImages.blackBoyVisio} alt="visioconference" title={'Visioconference'} body={'Collaborez en temps réel via des appels vidéo de group de qualité.'} link={clientPaths.meetingRoom} /> */}
                    <PartOrganisme img={importedImages.blackBoyVisio} alt="visioconference" title={'Collaborer plus simplement'} body={'Réunion en groupe ou en 1 à 1 plus simples avec beaucoup de fun et sans ennui.'} link={clientPaths.meetingRoom} /> 

                    {/* Screen Recorder */}
                    {/* <PartOrganisme img={importedImages.whiteBoardImg} alt="Enregistrement d'écran" title={`Enregistrement d'écran`} body={'Conserver pour plus tard ou pour partager le contenu de vos séance de whiteboard et/ou visioconférences.'} link={clientPaths.meetingRoom} />  */}
                    <PartOrganisme img={importedImages.whiteBoardImg} alt="Enregistrement d'écran" title={`Engagement`} body={'Que ça soit le direct, ou le différé, chacun de vos lecteurs vivra une expérience unique.'} link={clientPaths.meetingRoom} />



                </div>
            </div>
        </div>
    )
}

export default PartsSection