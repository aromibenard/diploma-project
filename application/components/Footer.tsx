import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Paper } from "@mui/material";
import Link from "next/link";

export default function Footer() {
    return (
        <Paper className="w-dvw md:max-w-5xl mx-auto p-4 my-4 border-2 border-purple-500" elevation={10} >
            <div className="grid items-center grid-cols-4 gap-4 font-medium text-gray-600">
                <div className="flex flex-col items-center border-r-2 border-purple-500">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="flex flex-col items-center border-r-2 border-purple-500">
                    <Link href="/terms">Terms of Use</Link>
                    <Link href="/privacy">Privay Policy</Link>
                </div>
                <div className="flex flex-col items-center border-r-2 border-purple-500">
                <Link href="/services">Services</Link>
                    <Link href="/resources">Resources</Link>
                    <Link href="/newsletter">Newsletter</Link>
                </div>
                <div className="flex flex-col items-center">
                    <Facebook sx={ {height: 30 , width: 30 , color: 'purple'}}/>
                    <Twitter sx={ {height: 30 , width: 30 , color: 'purple'}}/>
                    <Instagram sx={ {height: 30 , width: 30 , color: 'purple'}}/>
                </div>
            </div>
        </Paper>
    )
}  