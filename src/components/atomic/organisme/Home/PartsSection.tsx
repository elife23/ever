import React from 'react'
import Typography from '../../atoms/Typography'
import LinkButton from '../../atoms/LinkButton'
import Image from 'next/image';
import ImportedSvgs from '@/utils/ImportedSvgs';

type Props = {}

function PartsSection({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row bg-tertiary dark:bg-gray-900">
            <div className="container px-6 mx-auto flex items-center justify-center py-10">
                <div className=' flex flex-col items-center justify-center lg:justify-around w-full gap-y-8 lg:flex-row lg:gap-x-8'>
                    <div className='w-full lg:w-1/3 flex flex-col items-center justify-center'>
                        <Image src={ImportedSvgs.whiteboard} alt="whiteboard" className="w-full h-2/3 md:w-1/3 lg:w-2/4 my-2" />

                        <div className='flex flex-col'>
                            <Typography fontVariation='semibold' className='text-base'>Tablau blanc virtuel</Typography>
                            <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col leading-loose ">
                                Collaborez en temps réel sur le tableau blanc virtuelle et donnez vies à vos idées ensemble.
                            </Typography>
                            <LinkButton href="#" >En apprendre plus</LinkButton>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/3 flex flex-col items-center justify-center'>
                        <Image src={ImportedSvgs.visioconference} alt="whiteboard" className="w-full h-2/3 md:w-1/3 lg:w-2/4 my-2" />

                        <div className='flex flex-col'>
                            <Typography fontVariation='semibold' className='text-base'>Visioconference</Typography>
                            <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col leading-loose">
                                Collaborez en temps réel via des appels vidéo de group.
                            </Typography>
                            <LinkButton href="#" >En apprendre plus</LinkButton>
                        </div>
                    </div>

                    <div className='w-full lg:w-1/3 flex flex-col items-center justify-center'>
                        <Image src={ImportedSvgs.screenRecording} alt="whiteboard" className="w-full h-2/3 md:w-1/3 md:h-1/3 lg:w-2/4 my-2" />

                        <div className='flex flex-col'>
                            <Typography fontVariation='semibold' className='text-base'>Screen Recorder</Typography>
                            <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col leading-loose">
                                Conserver pour plus tard ou pour partager le contenu de vos séance de whiteboard ou de vos visioconférences.
                            </Typography>
                            <LinkButton href="#" className='px-2' >En apprendre plus</LinkButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PartsSection