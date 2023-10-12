import Image from 'next/image'
import React from 'react'
import logo from "../../../../public/images/logo.png";
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, User } from '@nextui-org/react';

type Props = {}

function AdminNavBar({ }: Props) {
    return (
        <>
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="drawer w-max lg:hidden">
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content cursor-pointer">
                            {/* Page content here */}
                            <label htmlFor="my-drawer" className="drawer-button hover:cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                        </div>
                        {/* Sidebar Content */}
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <li><label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"><a>Sidebar Item 1</a></label></li>
                                <li><a>Sidebar Item 2</a></li>

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
                                    src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                                }}
                                className="transition-transform flex-row-reverse"
                                description="session.email@email.com"
                                name="session.firstname"

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