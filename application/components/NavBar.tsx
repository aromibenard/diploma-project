import React from "react";
import { NavMenu } from "./NavMenu";
import { Avatar } from "@mui/material";
import { DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuGroup, 
    DropdownMenuItem,
    DropdownMenuLabel, 
    DropdownMenuPortal, 
    DropdownMenuSeparator, 
    DropdownMenuShortcut,
    DropdownMenuSub, 
    DropdownMenuSubContent, 
    DropdownMenuSubTrigger, 
    DropdownMenuTrigger } from "./ui/dropdown-menu";
import { CreditCard, Settings, Keyboard, Mail, Cloud, Logout } from "@mui/icons-material";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase";
import { useRouter } from "next/navigation";


interface NavBarProps {
    username: string;
    photoURL: string;
    email: string;
}

export default function NavBar ({ username, photoURL, email} : NavBarProps)  {

    const router = useRouter();

    const logout = async () => {
        signOut(auth).then(() => {
            router.push("/auth/login");
          }).catch((error) => {
            // An error happened.
        })
    }
    
    return (
        <div className="flex w-full justify-around p-1.5 fixed bg-emerald-500 top-0 left-0 z-50 shadow-sm shadow-black/10 items-center opacity-90 backdrop-blur-md">
            <h1 className="font-extrabold">VetAssist</h1>
            <NavMenu />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Avatar
                        src={photoURL}
                        alt={username}
                        className="hover:cursor-pointer hover:scale-110 transition-all hover:shadow-md hover:opacity-90"
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
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
                    <DropdownMenuItem>
                    <Keyboard className="mr-2 h-4 w-4" />
                    <span>Keyboard shortcuts</span>
                    <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>

                    <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <span>Invite users</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                        <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>

                            <span>Message</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <span>More...</span>
                        </DropdownMenuItem>
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                    <span>New Team</span>
                    <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4" />
                    <span>API</span>
                </DropdownMenuItem>
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