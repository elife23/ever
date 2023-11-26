import { Avatar, AvatarGroup, Button, Divider, Input } from '@nextui-org/react'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

// Images
import googleSvg from "../../../../public/images/icons/google-color.svg";
import eyeClosedSvg from "../../../../public/images/icons/eye-off.svg";
import eyeSvg from "../../../../public/images/icons/eye.svg";
import logo from "../../../../public/images/logo.png";
import Link from 'next/link';
import { signIn, useSession } from 'next-auth/react';
import { AuthCheck } from '@/utils/auth';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { getUserConnectedDatas, login } from '@/utils/requests';
import dashboardPaths from '@/utils/routes/dashboard_routes';
import { UserContext } from '@/utils/context/User';
import clientPaths from '@/utils/routes/client_routes';

type Props = {}

function Login({ }: Props) {


    const router = useRouter();

    const { data: session } = useSession();

    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const [hidePassword, setHidePassword] = useState(true);
    const [rememberMe, setRememberMe] = useState(false);
    const [isLogingIn, setIsLogingIn] = useState(false);
    const [emailVerif, setEmailVerif] = useState(false);
    const [passwordVerif, setPasswordVerif] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const handleChange = async (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    };

    
    async function handleLogin() {

        if (user.email == "") {
            setEmailVerif(true);
        }else {
            setEmailVerif(false);
        }

        
        if (user.password == "" || user.password.length < 8) {
            setPasswordVerif(true);
        } else {
            setPasswordVerif(false);
        }
        
        if ( user.email != "" && (user.password.length > 8) ) {
            setIsLogingIn(true);
            const response = await login(user);

            if(response.status == 200) {
                console.log(200);
                
                router.push(dashboardPaths.userMeetings);
            } else {
                setErrorMsg(response.data.detail);
            }

            setIsLogingIn(false);
        }
       
    }

    useEffect(() => {
        session ? console.log(session.user) : console.log("no body");
        
        const tmpUser =  getUserConnectedDatas();

        if (tmpUser.user != null) {
            router.back();
        }
    }, []);

    if (session) {
        router.replace("/")
    }
    return (
        <div className="flex h-[95vh] lg:h-[90vh] bg-white">
            {/* Left side of the login page */}
            <div className="hidden lg:flex relative h-full w-1/2 bg-white">
                <div className=" flex items-center justify-center z-0 relative w-full h-full rounded-r-[40px] bg-[url(/images/backgrounds/login.jpg)] bg-no-repeat bg-cover bg-center">
                    <div className="absolute w-full h-full bg-[#33332D]/40 z-0 rounded-r-[40px]" />

                    {/* Description text section */}
                    <div className='flex flex-col gap-6 z-10 mx-[4.5rem]'>
                        <h1 className="font-bold text-3xl text-black"><span className="text-primary text-4xl">E</span>verseed</h1>
                        {/* <h1 className="font-ibm-plex-mono text-2xl text-[#5ABB71] font-bold"><span className="text-[#5ABB71] font-light text-base">ever</span>seed</h1> */}


                        <p className="text-white text-5xl font-semibold">Start turning your <br /> ideas into reality.</p>

                        <p className="text-white text-xl font-medium">Create a free account and get full access to all features for 30 days. No credit card needed. Trusted by over 4,000 professionals.</p>

                        <div className='w-full flex gap-3 py-2'>
                            <AvatarGroup isBordered={true} >
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
                                <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
                            </AvatarGroup>

                            <div className="flex flex-col font-medium">
                                <div className="flex text-white">⭐⭐⭐⭐⭐ 5.0</div>
                                <p className="text-white">from 200+ reviews</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Rigt side of the login page */}
            <div className="bg-[url(/images/backgrounds/login.jpg)] bg-no-repeat bg-cover bg-center lg:bg-white lg:bg-[url()] w-full relative h-full lg:w-1/2">
                <div className="backdrop-blur-sm relative w-full h-full flex justify-center items-center px-8 lg:px-20 ">
                    <div className='bg-white py-4 px-8 lg:px-0 rounded-lg flex flex-col w-full h-auto gap-y-4'>
                        {/* Title section */}
                        <div className="w-full flex justify-start">
                            <div className="w-12 h-12 rounded-lg bg-primary/50" />
                            {/* <Image src={logo} alt={'logo'} className="w-24 h-24 " /> */}
                        </div>

                        <div className="">
                            <h1 className="text-2xl font-extrabold">Connexion</h1>
                            <p>Commencez vos 30 jours gratuits</p>
                            <p className="text-danger mt-2">{errorMsg ? errorMsg : ''}</p>
                        </div>

                        {/* Inputs section */}
                        <form className='flex flex-col gap-y-unit-md'>
                            <div className='flex flex-col gap-2'>
                                <label className="text-sm font-bold after:content-['*'] after:ml-0.5 after:text-red-500" htmlFor="email">Email</label>
                                <input type="email" id='email' name='email' value={user.email} className={`py-2 w-full border-1 rounded-lg px-4 md:text-base focus:ring-1 transition-all ease-in-out focus:outline   ${emailVerif == true ? 'focus:outline-danger border-danger focus:ring-danger' : 'focus:outline-primary/50 focus:ring-primary'}`} placeholder='Exple: John Doe@gmail.com' onChange={handleChange} />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <label className='text-sm font-bold' htmlFor="password">Mot de passe <span className="text-danger">*</span></label>
                                <div className='relative w-full'>
                                    <input type={hidePassword ? "password" : "text"} id='password' name='password' value={user.password} className={`py-2 w-full border-1 rounded-lg px-4 md:text-base focus:ring-1 transition-all ease-in-out focus:outline   ${passwordVerif == true || (user.password != '' && user.password.length < 8) ? 'border-danger focus:ring-danger focus:outline-red-600/50' : 'focus:ring-primary focus:outline-primary/50'}`} placeholder='Ecrivez ici' onChange={handleChange} />

                                    <span className="hover:cursor-pointer hover:text-primary absolute inset-y-0 right-4 inline-flex items-center" onClick={() => { setHidePassword(!hidePassword) }}>
                                        {hidePassword == true ? (<Image src={eyeSvg} className="h-5 w-5 text-secondary" alt="eye-Svg" />) : (
                                            <Image src={eyeClosedSvg} className="h-5 w-5 text-secondary" alt="eye-closed-Svg" />
                                        )}
                                    </span>
                                </div>
                                <p className={`${(user.password != '' && user.password.length < 8)? 'text-danger' : ''}`} >Doit être au moins 8 caractères.</p>
                            </div>

                        </form>

                        {/* Forgot password and remember me section */}
                        <div>
                            <div className='w-full flex justify-between'>
                                <div className="flex gap-2">
                                    <input className="ml-2 cursor-pointer checked:accent-primary" type="checkbox" id="remember" name="remember" checked={rememberMe} onChange={(val) => setRememberMe(val.target.checked)} />
                                    <label className="block text-gray-500 font-bold" htmlFor="remember">Se souvenir de moi</label>
                                </div>
                                <div>
                                    <Link href="#" className="font-bold md:text-sm text-primary hover:text-primary/80">
                                        Mot de passe oublié
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Login buttons section */}
                        <div>
                            <Button className="bg-primary w-full text-white" isLoading={isLogingIn} variant="flat" onClick={() => { handleLogin() }}
                            // disabled={email == '' || password == '' || password.length < 8 ? true : false} 
                            >
                                {isLogingIn == false ? "Se connecter" : "Veuillez patienter"}
                                
                            </Button>
                        </div>
                        <div className='flex items-center w-full'>
                            <div className="h-0.5 bg-tertiary w-1/2" /> <span className="md:text-base font-semibold mx-2">Or</span><div className="h-0.5 bg-tertiary w-1/2" />
                        </div>
                        <div>
                            <Button className="w-full font-bold bg-white border-2 py-4" onClick={() => signIn("google")}>
                                <Image src={googleSvg} className="h-5 w-5 text-secondary" alt="google-svg" />
                                Se connecter avec google
                            </Button>
                        </div>

                        {/* New here text section */}
                        <div className="w-full flex justify-center">
                            <p>Nouveau ici ? <Link href="/auth/signup/" className="font-bold md:text-sm text-primary hover:text-primary/80">Créer un compte</Link></p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Login