import React from 'react'
import Typography from '../../atoms/Typography'
import LinkButton from '../../atoms/LinkButton'
import LinkButtonTransparent from '../../atoms/LinkButtonTransparent'

type Props = {}

function BeginYourJourney({ }: Props) {
    return (
        <div className="flex flex-col lg:flex-row bg-white dark:bg-gray-900 lg:h-screen">
            <div className="container px-6 mx-auto flex items-center justify-center py-10">
                <div className='border-dashed border-2 border-secondary p-4'>
                    <div className='flex flex-col h-96 w-full bg-tertiary gap-y-4 px-[3%] lg:px-52 py-14 items-center justify-center '>
                        <div className='text-center'>
                            <Typography fontVariation='semibold' className='text-xl md:text-2xl lg:text-2xl' >Que ça soit le direct, ou le différé, chacun de vos lecteurs vivra une expérience unique. Alors commencez votre voyage avec <span className='text-primary font-bold'>E</span>verseed</Typography>
                        </div>
                        <div className='text-center'>
                            <Typography className="mt-3 text-dark dark:text-gray-400 flex-col gap-y-3 leading-loose text-sm">
                                Obtenez votre essai gratuit de 30 jours ou <br /> réservez simplement une démonstration pour une rencontre personnelle.
                            </Typography>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-2'>
                            <LinkButton href="#">Essayer gratuitement</LinkButton>
                            <LinkButtonTransparent href="#">Réserver une démo privée</LinkButtonTransparent>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BeginYourJourney