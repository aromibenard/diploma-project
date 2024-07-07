'use client'
import { auth, provider } from "@/firebase";
import { Google } from "@mui/icons-material";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()

    async function login() {

        return signInWithPopup(auth, provider)
        .then(() => {

            router.push('/')

        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message

            return console.log(errorCode, errorMessage)
        })

    }

    return (
        <div className="h-dvh w-dvw grid bg-purple-200">
            <div className="bg-gradient-to-r from-black to-purple-600 w-2/3 h-2/3 mx-auto my-auto rounded-md shadow-md grid md:grid-cols-2">
                <div className="p-8">
                    <h1 className="my-12 font-bold text-xl text-white">Vet Assist</h1>
                    <div className="h-1 border-t w-2/3 mt-32"></div>
                    <p className="my-2 flex items-center text-white">Sign In to Get Started<span className="mx-3"><ArrowRightIcon/></span></p>

                </div>
                <div className="grid items-center border-2 border-purple-200 ">
                    <Button 
                        onClick={login}
                        className="p-3 flex mx-auto hover:scale-105 transition"
                    >Sign In With Google <span className="mx-3 flex items-center"><Google/></span></Button>

                </div>

            </div>
        </div>
    )
}