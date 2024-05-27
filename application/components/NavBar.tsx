import { NavMenu } from "./NavMenu";

export default function NavBar() {
    return (
        <div className="flex w-full justify-around p-1.5 fixed bg-slate-50 top-0 left-0 z-50 shadow-sm shadow-black/10 items-center opacity-90">
            <h1 className="font-extrabold">VetAssist</h1>
            <NavMenu />
            
        </div>
    )
}