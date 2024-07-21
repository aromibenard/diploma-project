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
        <div className="min-h-screen min-w-screen grid bg-violet-200 justify-center">
            <div className="bg-gradient-to-r from-black to-purple-600 w-full h-3/5 md:h-2/3 my-auto rounded-md shadow-md grid md:grid-cols-2">
                <div className="p-6 md:p-8">
                    <h1 className="my-4 md:my-10 font-bold text-xl text-white">Vet Assist</h1>
                    <div className="h-1 border-t w-2/3  md:mt-32 mt-10"></div>
                    <p className="my-2 flex items-center text-white">Sign In to Get Started<span className="mx-3"><ArrowRightIcon/></span></p>

                </div>
                <div className="flex h-full items-center justify-center border border-violet-200 p-3 w-full">
                        <Button 
                            onClick={login}
                            className=" flex items-center hover:scale-105 transition"
                        >Sign In With Google <span className="mx-3 flex items-center"><Google/></span></Button>
                </div>
            </div>
        </div>
    )
}