import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { ArrowDownIcon } from "@radix-ui/react-icons";

interface GridProps {
    username: string;
}


export default function Grid({ username } : GridProps) {
    return (
        <section className="h-[31.5rem] w-full pt-8 relative flex items-center justify-center flex-col">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#800080_1px,transparent_1px),linear-gradient(to_bottom,#800080_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]">
            </div>
            <div className="flex flex-col items-center mt-12">
                <p className="my-1 text-gray-600">The Animal FirstAid Guide</p>
                <h1 className="font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">VetAssist</h1>
                <p className="px-4 mt-5 md:text-center md:text-lg font-medium text-gray-600 mx-auto ">
                    Welcome to VetAssist<span className="font-semibold text-gray-800">{username ? `, ${username}` : ''}.</span> Get first aid instructions for any injuries
                    or accidents involving pets and farm animals.
                </p>
                <p className="text-center text-lg flex items-center font-semibold text-gray-600 my-5 md:my-1">Get started by describing the accident/injury in the chatbox below 
                    <span className="mx-1 font-bold">
                        <ArrowDownIcon color="purple" className="hidden md:inline-block" />
                    </span>
                </p>
                <div className="flex items-center mt-3 space-x-5 pt-6">
                    <Facebook sx={ {height: 35 , width: 35 , color: 'purple'}}/>
                    <Twitter sx={ {height: 35 , width: 35 , color: 'purple'}}/>
                    <Instagram sx={ {height: 35 , width: 35 , color: 'purple'}}/>
                </div>
            </div>
        </section>
    )
}
    