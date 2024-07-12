import { run } from "@/gemini";
import { Button } from "@mui/material";
import Chat from "./Chat";


interface BodyProps {
    username: string;
    photoURL: string;
    email: string;
}

export default function Body({ username, photoURL, email } : BodyProps) {
    return (
        <div className="h-[60rem] bg-teal-100 w-dvw md:max-w-5xl mx-auto mt-10 p-6">
            <div className="p-2">
                <h1 className="font-extrabold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-yellow-700 my-2">Jambo!</h1>
                <h2 className="text-xl">We provide first-aid procedures for common animal injuries</h2>
                <p>Get started by choosing animal type below</p>
            </div>
            <div>
                <Button onClick={run}>Run</Button>
                <Chat />
            </div>

        </div>
    )
}