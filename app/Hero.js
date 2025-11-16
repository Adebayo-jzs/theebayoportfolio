import Image from "next/image";
export default function Hero() {
    return(
        <section className="max-w-5xl mx-auto mt-16 text-left">
                <Image 
                 src="/avatar.jpg" 
                 alt="Profile photo"
                 width={100}
                 height={100} 
                 className="mb-9 rounded-full"
                />
                <h1 className="text-4xl md:text-5xl  tracking-tight max-w-xl">Hi, I'm Adedeji Adebayo.</h1>
                <h2 className="text-4xl md:text-5xl  tracking-tight max-w-xl">Software Developer</h2>
                <p className="text-base md:text-lg  mt-4 text-[#5a5a5a] max-w-xl  ">
                  Year 2 Software Engineering student  passionate about creating beautiful, functional websites and web applications with cutting-edge technology.
                </p>
                <button className="button1 mt-4">Get In Touch</button>
              </section>
    );
}