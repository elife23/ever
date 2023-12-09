/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Divider } from "@nextui-org/react";
import Image from "next/image";
// import {AcmeLogo} from "./AcmeLogo.jsx";

import { signOut } from "next-auth/react";
import dashboardPaths from "@/utils/routes/dashboard_routes";
import LinkButtonTransparent from "@/components/atomic/atoms/LinkButtonTransparent";
import clientPaths from "@/utils/routes/client_routes";
import { useRouter } from "next/router";
import { UserContext } from "@/utils/context/User";
import { getUserConnectedDatas } from "@/utils/requests";
import importedImages from "@/utils/importedImg";

export default function MainNavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const router = useRouter();
    const currentRoute = router.pathname;
    const [user, setUser] = useState(null);

    useEffect(() => {
        const tmpUser = getUserConnectedDatas();
        if (tmpUser) {
            setUser(tmpUser.user);
        }
    }, [])



    return (
        <Navbar isBlurred={false}
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary",
                ],
            }}
            maxWidth="xl" onMenuOpenChange={setIsMenuOpen} disableAnimation={false}>
            <NavbarContent>

                {/* <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                /> */}

                <Link href="/" >
                    <NavbarBrand className="flex gap-x-2">
                        <Image src={importedImages.logo} alt={'logo'} className="w-8 h-12 " />
                        <p className="text-primary">ever<span className="font-bold text-primary">Seed</span> </p>
                    </NavbarBrand>
                </Link>
            </NavbarContent>

            {/* Large screens links */}
            <NavbarContent justify="end">
                <NavbarContent className="hidden lg:flex gap-4 pr-4" justify="end">
                    {/* <NavbarItem className="">
                        <Link color="foreground" href="#">
                            Pricing
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                            </Link>
                        </NavbarItem>*/}

                    <NavbarItem className={`${currentRoute == clientPaths.home ? 'border-b-2 border-b-primary' : ''}`}>
                        <Link className={`${currentRoute == clientPaths.home ? 'text-primary hover:text-primary/90 font-bold' : 'text-secondary/80 hover:text-secondary'} text-sm  `} href={clientPaths.home}>
                            {/* Police de confidentialité */}
                            Acceuil
                        </Link>
                    </NavbarItem>

                    <NavbarItem className={`${currentRoute == clientPaths.about ? 'border-b-2 border-b-primary' : ''}`}>
                        <Link className={`${currentRoute == clientPaths.about ? 'text-primary hover:text-primary/90 font-bold' : 'text-secondary/80 hover:text-secondary'} text-sm  `} href={clientPaths.about}>
                            {/* Police de confidentialité */}
                            À propos
                        </Link>
                    </NavbarItem>

                    <NavbarItem className={`${currentRoute == clientPaths.privacyPolicy ? 'border-b-2 border-b-primary' : ''}`}>
                        <Link className={`${currentRoute == clientPaths.privacyPolicy ? 'text-primary hover:text-primary/90 font-bold' : 'text-secondary/90 hover:text-secondary'} text-sm  `} href={clientPaths.privacyPolicy}>
                            {/* Police de confidentialité */}
                            Politique de confidentialité
                        </Link>
                    </NavbarItem>

                    {/* <div className="px-0.5 border-dashed border-l-2 border-secondary h-8" /> */}

                    {/* <NavbarItem className={`${currentRoute == '/whiteboard' ? 'border-b-2 border-b-primary' : ''}`}>
                        <Link className={`${currentRoute == '/whiteboard' ? 'text-primary hover:text-primary/70 font-bold' : 'text-secondary/70 hover:text-secondary'} text-sm  `} href={clientPaths.meetingRoom}>
                            Tableau blanc
                        </Link>
                    </NavbarItem> */}

                    {/* <NavbarItem isActive={currentRoute == clientPaths.meetingRoom ? true : false}>
                        <Link aria-current="page" className={`${currentRoute == clientPaths.meetingRoom ? 'text-primary hover:text-primary/70 font-bold' : 'text-secondary/70 hover:text-secondary'} text-sm  `} href={clientPaths.meetingRoom}>
                            VisioConférence
                        </Link>
                    </NavbarItem> */}
                </NavbarContent>
                {
                    user ? (<></>) : (<>
                        <NavbarItem className="hidden sm:flex">
                            {/* <Link href="/auth/login/" className="text-secondary border border-secondary px-5 py-2 rounded-sm">Login</Link> */}
                            <Link href={clientPaths.login} className='w-full lg:w-auto'>
                                <button className="w-full px-5 py-2 text-sm tracking-wider uppercase transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none text-secondary hover:text-secondary/80 border-2 border-secondary hover:border-secondary/80">
                                    Se connecter
                                </button>
                            </Link>
                        </NavbarItem>
                        <NavbarItem className="hidden sm:flex">
                            <Button as={Link} href="/auth/signup/" variant="flat" className="bg-primary text-white px-8 rounded-md">
                                S'inscrire
                            </Button>
                        </NavbarItem>
                    </>)
                }
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
            </NavbarContent>
            <NavbarMenu hidden={isMenuOpen == true ? true : false}>
                {/* {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            color={
                                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                            }
                            className="w-2/3 hover:text-white transition-all duration-150 hover:bg-primary p-2 rounded-lg "
                            href="#"
                            size="lg"
                        >
                            {item}
                        </Link>
                    </NavbarMenuItem>
                ))} */}

                {/* <NavbarMenuItem>
                    <Link
                        color={"foreground"}
                        className="w-2/3 hover:text-white transition-all duration-150 hover:bg-primary p-2 rounded-lg "
                        href={dashboardPaths.userMeetings}
                        size="lg"
                    >
                        Dashboard
                    </Link>
                </NavbarMenuItem> */}

                <NavbarMenuItem>
                    <Link className={`${currentRoute == clientPaths.home ? 'text-primary hover:text-primary/90 font-bold' : 'text-secondary/80 hover:text-secondary'} text-sm  `} href={clientPaths.home}>
                        Acceuil
                    </Link>
                </NavbarMenuItem>

                <NavbarMenuItem>
                    <Link className={`${currentRoute == clientPaths.about ? 'text-primary hover:text-primary/90 font-bold' : 'text-secondary/80 hover:text-secondary'} text-sm  `} href={clientPaths.about}>
                        {/* Police de confidentialité */}
                        À propos
                    </Link>
                </NavbarMenuItem>

                <NavbarMenuItem>
                    <Link className={`${currentRoute == clientPaths.privacyPolicy ? 'text-primary hover:text-primary/90 font-bold' : 'text-secondary/90 hover:text-secondary'} text-sm  `} href={clientPaths.privacyPolicy}>
                        {/* Police de confidentialité */}
                        Politique de confidentialité
                    </Link>
                </NavbarMenuItem>



                <hr />
                {
                    user ? (<></>) : (<>
                        <NavbarMenuItem className="sm:hidden flex flex-col ">
                            {/* <Link href="/auth/login/" className="text-secondary border border-secondary px-5 py-2 rounded-sm">Login</Link> */}
                            <Link href={clientPaths.login} className='w-full lg:w-auto'>
                                <button className="w-full px-5 py-2 text-sm tracking-wider uppercase transition-colors duration-300 transform rounded-md lg:w-auto focus:outline-none text-secondary hover:text-secondary/80 border-2 border-secondary hover:border-secondary/80">
                                    Se connecter
                                </button>
                            </Link>
                        </NavbarMenuItem>
                        <NavbarMenuItem className="sm:hidden flex flex-col">
                            <Button as={Link} href="/auth/signup/" variant="flat" className="bg-primary text-white px-8 rounded-md w-full">
                                S'inscrire
                            </Button>
                        </NavbarMenuItem>
                    </>)
                }
                {/* <NavbarMenuItem>
                    <Link
                        color={"danger"}
                        className="w-2/3 hover:text-white transition-all duration-150 hover:bg-danger p-2 rounded-lg "
                        href="#"
                        size="lg"
                        onClick={() => { setIsMenuOpen(false); signOut({ redirect: true }); }}
                    >
                        Log Out
                    </Link>
                </NavbarMenuItem> */}
            </NavbarMenu>
        </Navbar>
    );
}
