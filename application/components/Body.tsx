import Chat from "./Chat";
import Grid from "./Grid";


export interface BodyProps {
    username: string;
    photoURL: string;
    email: string;
}

export default function Body({ username, photoURL, email } : BodyProps) {
    return (
        <div className=" bg-yellow-50 w-dvw md:max-w-5xl mx-auto p-6 pt-14">
            <div className="">
                <Grid username={username}/>
            </div>
            <div>
                <Chat />
            </div>

        </div>
    )
}