import React, { useState } from "react";
import { NavMenu } from "./NavMenu";
import { Avatar } from "@mui/material";
import { DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuGroup, 
    DropdownMenuItem,
    DropdownMenuLabel,  
    DropdownMenuSeparator, 
    DropdownMenuShortcut, 
    DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CreditCard, Settings, Logout } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";
import Loader from "./Loader";


interface NavBarProps {
    username?: string;
    photoURL?: string;
    email?: string;
}

export default function NavBar ({ username, photoURL} : NavBarProps)  {

    const router = useRouter();
    const [loading, setLoading] = useState(false)


    const logout = async () => {
        setLoading(true)
        signOut(auth).then(() => {
            router.push("/auth/login");
            setLoading(false)
          }).catch((error) => {
            // An error happened.
        })
    }

    if(loading) return <Loader />
    
    return (
        <div className="flex w-full justify-around p-1.5 fixed top-0 left-0 z-50 shadow-sm shadow-black/10 items-center opacity-90 backdrop-blur-sm">
            <h1 className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-md">VetAssist</h1>
            <NavMenu />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar
                        src={photoURL}
                        alt={username}
                        className="hover:cursor-pointer hover:scale-110 transition-all hover:shadow-md hover:opacity-90"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 text-gray-600">
                <DropdownMenuLabel className="text-gray-600">My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                    <span>Profile</span>
                    <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <CreditCard className="mr-2 h-4 w-4" />
                    <span>Billing</span>
                    <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>
                    <Logout className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                    <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            
        </div>
    )
}