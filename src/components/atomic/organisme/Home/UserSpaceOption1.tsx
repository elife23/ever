import Image from 'next/image'
import React from 'react'
import Typography from '../../atoms/Typography'
import UserSpaceOptionList from '../../molecule/UserSpaceOptionList'
import importedImages from '@/utils/importedImg'

type Props = {}

function UserSpaceOption1({ }: Props) {
    return (
        <>
            <div className="rounded-md">
                <Image className=' h-3/3 lg:h-full rounded-md shadow-xl ' src={importedImages.henryFord} alt="userSectionImage" />
            </div>

            <div className="md:w-1/2 mt-4 md:mt-0 flex flex-col gap-y-6  w-full">
                <Typography fontVariation='bold' className="text-center w-full md:w-max text-lg lg:text-2xl text-dark" >Un agenda ? pourquoi pas</Typography>

                <Typography className="text-dark lg:max-w-lg lg:text-base">Avec everSeed, Vous avez à votre la possibilité de planifier une réunion sur votre agenda, qui est un outil qui permet de planifier et d{"'"}organiser ses activités, rendez-vous et tâches de manière efficace.</Typography>

                <div className="flex flex-col gap-y-4">
                    <UserSpaceOptionList text="Organisation et gestion du temps" />
                    <UserSpaceOptionList text="Coordination et communication" />
                    <UserSpaceOptionList text="Productivité et efficacité" />
                    <UserSpaceOptionList text="Suivi et rappels" />
                    <UserSpaceOptionList text="Historique et référence" />
                </div>
            </div>
        </>
    )
}

export default UserSpaceOption1