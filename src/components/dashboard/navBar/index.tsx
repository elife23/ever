import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import logo from "../../../../public/images/logo.png";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react';
import LeftSideBar from '../leftSideBar';
import { useRouter } from 'next/router';

type Props = {}

function AdminNavBar({ }: Props) {
    const router = useRouter();
    const [user, setUser] = useState({});

    useEffect(() => {
        const datas = localStorage.getItem("e-u-d");
        const testUser = datas ? JSON.parse(datas) : null;
        if (testUser){
            setUser(testUser.user);
        console.log(user);
        }
    },[])
    // console.log(user);

    return (
        <>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className={`drawer w-max lg:hidden `}>
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content cursor-pointer">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="drawer-button hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        {/* Sidebar Content */}
                        <div className="drawer-side z-[99]">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu py-4 px-4 w-max min-h-full bg-white text-base-content">
                                {/* Sidebar content here */}
                                {/* <li><label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"><a>Sidebar Item 1</a></label></li>
                                <li><a>Sidebar Item 2</a></li> */}
                                <LeftSideBar />

                            </ul>
                        </div>
                    </div>
                </div>

                {/* Profile few informations */}
                <div className="navbar-end">
                    <Dropdown placement="bottom-start">
                        <DropdownTrigger>
                            <User
                                as="button"
                                avatarProps={{
                                    isBordered: true,
                                    src: "",
                                }}
                                className="transition-transform flex-row-reverse"
                                description={user ? (user.email) : ""}
                                name={user ? (user.lastname + " " + user.firstname) : ""}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="User Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-bold">Connecté en tant que</p>
                                <p className="font-bold">session.email</p>
                            </DropdownItem>

                            <DropdownItem key="logout" color="danger">
                                Se déconnecter
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}

export default AdminNavBar