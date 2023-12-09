import Link from 'next/link'
import React from 'react'
// import logo from '../../../public/images/logo.png';
import Image from 'next/image';
import SpanAnimatedLine from '@/components/atomic/atoms/SpanAnimatedLine';
import { BiLogoFacebook } from "react-icons/bi";
import { BsFacebook, BsTwitter, BsInstagram, BsDiscord } from "react-icons/bs";
import { useRouter } from 'next/router';
import clientPaths from '@/utils/routes/client_routes';
import importedImages from '@/utils/importedImg';

type Props = {}

function MainFooter({ }: Props) {
    const router = useRouter();
    const currentPage = router.pathname;


    return (
        <footer className={`${currentPage == "/meetingRoom" ? 'hidden' : ''} bg-white flex justify-center items-center dark:bg-gray-900 w-full md:py-8`}>
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex flex-col items-center md:justify-between">

                    <div className="flex flex-wrap gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className='flex flex-col gap-y-unit-md md:w-72'>
                            <h2 className="text-sm font-semibold text-dark uppercase dark:text-white">Navigation</h2>
                            
                            <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-y-2 font-medium">
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Présentation</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Visioconférence</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Tableau de note collaboratif</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Séssions</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Espace utilisateurs</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-y-unit-md md:w-60">
                            <h2 className="text-sm font-semibold text-dark uppercase dark:text-white">Utilisateurs</h2>
                            <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-y-2 font-medium">
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Professeurs</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Entrepreuneurs</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Influenceurs</Link>
                                </li>
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="" className="group-hover:text-dark transition-all duration-500">Créateurs de contenus</Link>
                                </li>
                            </ul>
                        </div>
                        <div className='flex flex-col gap-y-unit-md md:w-72'>
                            <h2 className="text-sm font-semibold text-dark uppercase dark:text-white">Spécifications</h2>
                            <ul className="text-gray-500 flex flex-col gap-y-2 dark:text-gray-400 font-medium">
                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href={clientPaths.privacyPolicy} className="group-hover:text-dark transition-all duration-500">Responsive</Link>
                                </li>

                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                    <SpanAnimatedLine />
                                    <Link href="#" className="group-hover:text-dark transition-all duration-500">Interface intuitives</Link>
                                </li>


                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                <SpanAnimatedLine />
                                <Link href="#" className="group-hover:text-dark transition-all duration-500">Contenu synchronisé</Link>
                            </li>


                            <li className="pb-2 group relative overflow-x-hidden w-max">
                                <SpanAnimatedLine />
                                <Link href="#" className="group-hover:text-dark transition-all duration-500">Facile à prendre en main</Link>
                            </li>

                                <li className="pb-2 group relative overflow-x-hidden w-max">
                                <SpanAnimatedLine />
                                <Link href="#" className="group-hover:text-dark transition-all duration-500">Politique de confidentialité</Link>
                            </li>

                            </ul>
                        </div>

                        <div className="flex flex-col gap-y-unit-md md:w-60">
                        <h2 className="text-sm font-semibold text-dark uppercase dark:text-white">Contacts</h2>
                        <p className='opacity-70 tracking-wide w-3/4 md:w-full '>Que vous ayez besoin d{"'"}aide, que vous ayez des commentaires ou que vous souhaitiez réserver une démonstration personnelle, vous pouvez nous contacter à tout moment !</p>
                        <ul className="text-gray-500 dark:text-gray-400 flex flex-col gap-y-2 font-medium">
                            
                            <li className="pb-2 group relative overflow-x-hidden w-max">
                                <SpanAnimatedLine />
                                <Link href="" className="group-hover:text-dark transition-all duration-500">Laissez-nous un commentaire</Link>
                            </li>

                            <div className="flex  w-full py-1 items-center sm:justify-start gap-x-unit-xs sm:mt-0">
                                <a href="#" className=" text-gray-500 hover:text-dark dark:hover:text-white group p-1 border-2 border-secondary ">
                                    <BsFacebook className="text-dark w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                    {/* <span className="sr-only">Discord community</span> */}
                                </a>
                                <a href="#" className=" text-gray-500 hover:text-dark dark:hover:text-white group p-1 border-2 border-secondary">
                                    <BsTwitter className="text-dark w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                    {/* <span className="sr-only">Discord community</span> */}
                                </a>
                                <a href="#" className=" text-gray-500 hover:text-dark dark:hover:text-white group p-1 border-2 border-secondary">
                                    <BsInstagram className="text-dark w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                    {/* <span className="sr-only">Discord community</span> */}
                                </a>
                                <a href="#" className=" text-gray-500 hover:text-dark dark:hover:text-white group p-1 border-2 border-secondary">
                                    <BsDiscord className="text-dark w-5 h-5 group-hover:-translate-y-1 group-hover:text-primary transition-all duration-300" />
                                    {/* <span className="sr-only">Discord community</span> */}
                                </a>
                            </div>
                        </ul>
                    </div>
                    </div>

                    <div className="mt-6 md:mt-12">
                        <Link href="/" className="flex flex-col items-center lg:w-max">
                            <Image src={importedImages.logo} alt={'logo'} className="w-12 h-26" />
                            <p className="text-primary text-lg">ever<span className="font-bold text-primary text-lg">Seed</span> </p>
                        </Link>
                    </div>
                </div>
                {/* <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                    </span>
                    
                </div> */}
            </div>
        </footer>

    )
}

export default MainFooter