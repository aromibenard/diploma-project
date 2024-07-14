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
                <p className="my-1 text-gray-600">The Animal Firstaid Guide</p>
                <h1 className="font-extrabold text-5xl bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow-lg">VetAssist</h1>
                <p className="mt-5 text-center text-lg font-medium text-gray-600 ">
                    Welcome to VetAssist{username ? `, ${username}` : ''}. Get first aid instructions for any injuries
                    or accidents involving pets and farm animals.
                </p>
                <p className="text-left text-lg flex items-center font-medium">Get started by describing the accident/injury in the chatbox below 
                    <span className="mx-1 font-bold">
                        <ArrowDownIcon color="purple" className="" />
                    </span>
                </p>
                <div className="flex items-center mt-3 space-x-4 pt-6">
                    <Facebook />
                    <Twitter/>
                    <Instagram/>
                </div>
            </div>
        </section>
    )
}
    