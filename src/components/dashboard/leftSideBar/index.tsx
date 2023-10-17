import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/images/logo.png";
import Link from 'next/link';
import dashboardPaths from '@/utils/routes/dashboard_routes';
import clientPaths from '@/utils/routes/client_routes';
import ImportedSvgs from '@/utils/ImportedSvgs';

type Props = {}

function LeftSideBar({ }: Props) {
    return (
        <>
            <aside className="overflow-y-hidden flex flex-col w-64 h-screen px-5 bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                <Link href={clientPaths.home} className='w-max'>
                    {/* <Image className="w-16 h-16" src={logo} alt="logo" /> */}
                    <Image className="w-20 h-20" src={logo} alt="logo" />

                </Link>

                <div className="flex flex-col justify-between flex-1 mt-6 overflow-y-auto overflow-x-hidden pb-4">
                    <nav className="-mx-3 space-y-6 ">
                        {/* Users View */}
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Votre espace</label>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 " href={dashboardPaths.home} >
                                <Image src={ImportedSvgs.user} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Mon compte</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={dashboardPaths.userMeetings} >
                                <Image src={ImportedSvgs.meeting} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Mes visioconférences</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={dashboardPaths.userRecords} >
                                <Image src={ImportedSvgs.record} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Mes enregistrements</span>
                            </Link>
                        </div>

                        {/* Admin view */}
                        <div className="space-y-3 ">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Votre espace</label>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700 " href={dashboardPaths.home} >
                                <Image src={ImportedSvgs.user} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Mon compte</span>
                            </Link>


                        </div>

                        <div className="space-y-3 ">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">analyse</label>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={dashboardPaths.adminMeetings}>
                                <Image src={ImportedSvgs.meeting} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Visioconférences</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={dashboardPaths.adminRecords}>
                                <Image src={ImportedSvgs.record} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Enregistrements</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={dashboardPaths.adminUser}>
                                <Image src={ImportedSvgs.users} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Utilisateurs</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href={dashboardPaths.adminLogs}>
                                <Image src={ImportedSvgs.logs} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Logs</span>
                            </Link>
                        </div>

                        {/* Common */}
                        <div className="space-y-3 border-t py-4">

                            <Link className="flex items-center px-3 py-2 text-danger-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-danger/30 dark:hover:bg-danger/30 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <Image src={ImportedSvgs.logout} alt="User" className="w-5 h-5" />

                                <span className="mx-2 text-sm font-medium">Se Déconnecter</span>
                            </Link>
                        </div>

                        {/* <div className="space-y-3 ">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">content</label>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Guides</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Hotspots</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Checklists</span>
                            </Link>
                        </div>

                        <div className="space-y-3 ">
                            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">Customization</label>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Themes</span>
                            </Link>

                            <Link className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>

                                <span className="mx-2 text-sm font-medium">Setting</span>
                            </Link>
                        </div> */}
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default LeftSideBar