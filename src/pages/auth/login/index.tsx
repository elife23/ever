import { Avatar, AvatarGroup, Button, Divider, Input } from '@nextui-org/react'
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';

// Images
import googleSvg from "../../../../public/images/icons/google-color.svg";
import eyeClosedSvg from "../../../../public/images/icons/eye-off.svg";
import eyeSvg from "../../../../public/images/icons/eye.svg";
import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';
import { AuthCheck } from '@/utils/auth';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/router';
import { getUserConnectedDatas, login } from '@/utils/requests';
import dashboardPaths from '@/utils/routes/dashboard_routes';
import { UserContext } from '@/utils/context/User';
import clientPaths from '@/utils/routes/client_routes';
import importedImages from '@/utils/importedImg';
import Typography from '@/components/atomic/atoms/Typography';
import { IoMdAlert } from "react-icons/io";
import { RiCloseLine } from 'react-icons/ri';

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
        } else {
            setEmailVerif(false);
        }


        if (user.password == "" || user.password.length < 8) {
            setPasswordVerif(true);
        } else {
            setPasswordVerif(false);
        }

        if (user.email != "" && (user.password.length > 8)) {
            setIsLogingIn(true);
            const response = await login(user);

            // if (response.status == 200) {
            //     console.log(200);

            //     router.push(dashboardPaths.userMeetings);
            // } else {
            //     setErrorMsg(response.data.detail);
            // }

            setIsLogingIn(false);
        }

    }

    useEffect(() => {
        session ? console.log(session.user) : console.log("no body");

        const tmpUser = getUserConnectedDatas();

        if (tmpUser && tmpUser.user != null) {
            router.back();
        }
    }, []);

    if (session) {
        // router.replace("/")
    }

    function closeMessage() {
        setErrorMsg("");
    }

    return (
        <div className="flex h-[95vh] lg:h-[90vh] items-center relative bg-[url(/images/backgrounds/authBg.png)] bg-no-repeat bg-cover bg-center ">
            <div className="absolute w-full h-full bg-[#000000]/40 z-0" />

            <div className="z-10 flex items-center justify-center w-full h-full lg:py-8">
                {/* Left side of the login page */}
                <div className="hidden rounded-l-xl lg:flex lg:flex-col relative h-full w-1/5 bg-light">
                    <div className="lg:relative lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center">
                        <Image src={importedImages.logo2} alt={'logo'} className="w-96 h-96 p-0 object-cover" />
                        <Typography fontVariation='semibold' className="relative bottom-14 text-gray text-xl">Bienvenue</Typography>
                    </div>
                </div>

                {/* Rigt side of the login page */}
                <div className="rounded-xl lg:rounded-l-none lg:bg-white w-full relative h-full lg:w-2/5 lg:rounded-r-xl">
                    <div className="relative w-full h-full flex justify-center items-center px-8 lg:px-[3%] lg:overflow-y-hidden">
                        <div className='bg-white lg:w-full py-4 px-4 lg:px-0 rounded-lg lg:rounded-none flex flex-col w-full h-auto gap-y-4'>

                            <div className="">
                                <h1 className="text-lg lg:text-2xl font-extrabold text-gray text-center">Connexion</h1>
                                {/* <p>Commencez vos 30 jours gratuits</p> */}
                                {errorMsg && <div className="flex flex-row items-center justify-between rounded-md p-2 bg-[#FFD9D9] shadow-lg mt-2">
                                    <IoMdAlert className="rotate-180" size={25} style={{ fill: "#ff0000" }} />
                                    <p className="text-danger w-[80%]">
                                        {errorMsg ? errorMsg : ''}
                                    </p>
                                    {/* <RiCloseLine size={25} style={{fill:"#ff0000"}} className="hover:cursor-pointer" onclick={() => {closeMessage()}} /> */}
                                </div>}
                            </div>

                            {/* Inputs section */}
                            <form className='flex flex-col gap-y-unit-xl lg:gap-y-unit-md'>
                                <div className='flex flex-col gap-2'>
                                    <label className="text-sm font-bold after:content-['*'] after:ml-0.5 after:text-red-500 text-gray" htmlFor="email">Email</label>
                                    <input type="email" id='email' name='email' value={user.email} className={`py-2 w-full border-1 border-gray  rounded-sm px-4 md:text-base focus:ring-1 transition-all ease-in-out focus:outline placeholder-gray-four  ${emailVerif == true ? 'focus:outline-danger border-danger focus:ring-danger' : 'focus:outline-gray-secondary/50 focus:ring-gray-secondary'}`} placeholder='Exple: John Doe@gmail.com' onChange={handleChange} />
                                </div>
                                <div className='flex flex-col gap-1'>
                                    <label className='text-sm font-bold text-gray' htmlFor="password">Mot de passe <span className="text-danger">*</span></label>
                                    <div className='relative w-full'>
                                        <input type={hidePassword ? "password" : "text"} id='password' name='password' value={user.password} className={`py-2 w-full border-1 border-gray  rounded-sm px-4 md:text-base focus:ring-1 transition-all ease-in-out focus:outline placeholder-gray-four  ${passwordVerif == true || (user.password != '' && user.password.length < 8) ? 'border-danger focus:ring-danger focus:outline-red-600/50' : 'focus:ring-gray-secondary focus:outline-gray-secondary/50'}`} placeholder='Ecrivez ici' onChange={handleChange} />

                                        <span className="hover:cursor-pointer hover:text-primary absolute inset-y-0 right-4 inline-flex items-center" onClick={() => { setHidePassword(!hidePassword) }}>
                                            {hidePassword == true ? (<Image src={eyeSvg} className="h-5 w-5 text-secondary" alt="eye-Svg" />) : (
                                                <Image src={eyeClosedSvg} className="h-5 w-5 text-secondary" alt="eye-closed-Svg" />
                                            )}
                                        </span>
                                    </div>
                                    { (user.password != '' && user.password.length < 8) && <p className={`${(user.password != '' && user.password.length < 8) ? 'text-danger' : 'text-gray'}`} >Doit être au moins 8 caractères.</p>}
                                </div>

                            </form>

                            {/* Forgot password and remember me section */}
                            <div>
                                <div className='w-full flex justify-between'>
                                    {/* <div className="flex gap-2">
                                        <input className="ml-2 cursor-pointer checked:accent-primary" type="checkbox" id="remember" name="remember" checked={rememberMe} onChange={(val) => setRememberMe(val.target.checked)} />
                                        <label className="block text-gray-500 font-bold" htmlFor="remember">Se souvenir de moi</label>
                                    </div> */}
                                    <div>
                                        <Link href="#" className="font-bold md:text-sm text-gray hover:text-gray/80">
                                            Mot de passe oublié
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Login buttons section */}
                            <div>
                                <Button className="bg-gray-secondary w-full text-white font-medium rounded-md" isLoading={isLogingIn} variant="flat" onClick={() => { handleLogin() }}
                                // disabled={email == '' || password == '' || password.length < 8 ? true : false} 
                                >
                                    {isLogingIn == false ? "Se connecter" : "Veuillez patienter"}

                                </Button>
                            </div>
                            <div className='flex items-center w-full'>
                                <div className="h-0.5 bg-tertiary w-1/2" /> <span className="md:text-base font-semibold mx-2">Ou</span><div className="h-0.5 bg-tertiary w-1/2" />
                            </div>
                            <div>
                                <Button className="w-full font-bold bg-white border-1 border-gray py-4 text-sm md:text-base flex items-center justify-center rounded-md" onClick={() => signIn("google")}>
                                    <Image src={googleSvg} className="h-3 w-3 lg:h-5 lg:w-5 text-gray" alt="google-svg" />
                                    <p>Se connecter avec google</p>
                                </Button>
                            </div>

                            {/* New here text section */}
                            <div className="w-full flex flex-col justify-center items-center lg:gap-y-2">
                                <p className="text-gray">Nouveau sur Everseed ? </p>
                                <Link href="/auth/signup/" className="font-bold md:text-sm text-gray hover:text-gray/80 underline">Créer un compte</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login