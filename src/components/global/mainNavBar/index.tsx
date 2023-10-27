import React from "react";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Divider } from "@nextui-org/react";
import Image from "next/image";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import logo from "../../../../public/images/logo.png";
import { signOut } from "next-auth/react";
import dashboardPaths from "@/utils/routes/dashboard_routes";

export default function MainNavBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "Team Settings",
        "Help & Feedback",
        "Login",
        "SignUp",
        "Log Out",
    ];

    return (
        <Navbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen} disableAnimation={false}>
            <NavbarContent>

                {/* <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                /> */}

                <Link href="/" >
                    <NavbarBrand>
                        {/* <AcmeLogo /> */}
                        {/* <p className="font-ibm-plex-mono text-2xl text-[#5ABB71] font-bold"><span className="text-[#5ABB71] font-light text-base">ever</span>seed</p> */}
                        {/* <p className="font-ibm-plex-mono text-xl "><span className="text-[#5ABB71]">E</span>verseed</p> */}
                        <Image src={logo} alt={'logo'} className="w-24 h-24 " />

                    </NavbarBrand>
                </Link>
            </NavbarContent>

            {/* Large screens links */}
            {/* <NavbarContent className="hidden sm:flex gap-4 bg-red-600" justify="end">
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Pricing
                    </Link>
                </NavbarItem>
                <Divider orientation="vertical" />
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        Customers
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Integrations
                    </Link>
                </NavbarItem>
            </NavbarContent> */}
            <NavbarContent justify="end">
                <NavbarContent className="hidden sm:flex gap-4" justify="end">
                    {/* <NavbarItem className="">
                        <Link color="foreground" href="#">
                            Pricing
                        </Link>
                    </NavbarItem>
                    <div className="px-0.5 border-dashed border-l-3 border-secondary h-8"/>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem> */}
                </NavbarContent>
                <NavbarItem className="hidden sm:flex">
                    <Link href="/auth/login/" className="text-primary">Login</Link>
                </NavbarItem>
                <NavbarItem className="hidden sm:flex">
                    <Button as={Link} href="/auth/signup/" variant="flat" className="bg-primary text-white px-8">
                        Sign Up
                    </Button>
                </NavbarItem>
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

                <NavbarMenuItem>
                    <Link
                        color={"foreground"}
                        className="w-2/3 hover:text-white transition-all duration-150 hover:bg-primary p-2 rounded-lg "
                        href={dashboardPaths.userMeetings}
                        size="lg"
                    >
                        Dashboard
                    </Link>
                </NavbarMenuItem>
                <hr />
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
