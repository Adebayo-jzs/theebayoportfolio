import Link from "next/link";
import { LucideHome,User, Code, Briefcase, Mail } from "lucide-react";
export default function Navbar(){
    const navLinks = [
    { name: "Home", href: "/", icon: LucideHome },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: Briefcase },
    // { name: "Projects", href: "#projects", icon: Briefcase },
    // { name: "Contact", href: "#contact", icon: Mail },
  ];
    return(
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center  text-black p-6">
            {/* <div className="glass-effect w-6xl flex justify-center"> */}

            <div className="flex items-center justify-center gap-3  py-4 px-4 w-4xl bg-gray glass-effect " >
                 {navLinks.map((link) =>{
                     const Icon = link.icon;
                     return(
                         <Link key={link.name} href={link.href}  className="flex items-center gap-2 px-0 text-md  transition-gap duration-300 hover:px-1">
                            <Icon className="h-4 w-4" />
                            <span className="">
                                {link.name}
                            </span>
                        </Link>
                    );
                })}
            </div>
            {/* </div> */}
        </nav>
    );
}