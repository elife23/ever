import React from 'react'
import Typography from '../../atoms/Typography'
import LinkButton from '../../atoms/LinkButton'

type Props = {}

function BeginYourJourney({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-900">
            <div className="container px-6 mx-auto flex items-center justify-center py-10">
                <div className='border-dashed border-2 border-secondary p-4'>
                    <div className='flex flex-col h-full w-full bg-tertiary gap-y-4 px-[3%] lg:px-52 py-14 items-center '>
                        <div className='text-center'>
                            <Typography fontVariation='semibold' className='text-xl md:text-2xl lg:text-2xl' >Commencez votre voyage avec <span className='text-primary font-bold'>E</span>verseed</Typography>
                        </div>
                        <div className='text-center'>
                            <Typography className="mt-3 text-gray-600 dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm">
                                Obtenez votre essai gratuit de 30 jours ou <br /> réservez simplement une démonstration pour une rencontre personnelle.
                            </Typography>
                        </div>
                        <div className='flex gap-x-2'>
                            <LinkButton href="#">Essayer gratuitement</LinkButton>
                            <LinkButton href="#" isTransparent={true}>Réserver une démo privée</LinkButton>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BeginYourJourney