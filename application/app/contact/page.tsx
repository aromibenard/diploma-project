'use client'

import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { Paper } from "@mui/material";

export default function Contact() {
    return (
        <div className="w-dvw h-dvh p-6">
            <NavBar />
            <div className="h-dvh w-full grid items-center">
                <Paper 
                    className="w-full mx-auto h-3/4 my-auto p-4"
                    elevation={10}
                >
                    <div>
                        <h1 className="text-xl text-gray-600 font-semibold ">Reach us on the following contacts</h1>
                    </div>
                </Paper>
            </div>
            <Footer />
        </div>
    
    )
}