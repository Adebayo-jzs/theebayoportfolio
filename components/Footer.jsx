const social_links = [
  {id:1,href:"https://github.com/adebayo-jzs",label:"github",iconPath:<path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12c0-5.523-4.477-10-10-10z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>},
  {id:2,href:"https://linkendin/in/theebayo",label:"LInkedin",iconPath:<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 110-4 2 2 0 010 4z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>},
  {id:3,href:"https://x.com/theebayo",label:"𝕏",iconPath:<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>}
]
const SocialLink = ({ href, iconPath, label }) => (
  <a className="group text-white flex flex-col items-center" href={href} target="_blank" aria-label={label}>
    <svg className="w-12 h-12 md:w-20 md:h-20 transition-transform group-hover:-translate-y-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      {iconPath}
    </svg>
    <span className="uppercase block text-center mt-4 md:mt-6 text-[10px] md:text-sm font-black tracking-[0.2em] md:tracking-[0.4em] text-white">
      {label}
    </span>
    {/* <Github/> */}
  </a>
);

export default function Footer(){
    return(
        <footer className="bg-[#050505]"> 
            <div className="w-full mb-20 md:mb-32 ">
           
          <div className="flex flex-wrap justify-center  items-center gap-12 md:gap-32">
            {social_links.map((links) => (
    					<SocialLink
      					key={links.id}
      					{...links}
							/>
						))}
          </div>
            </div>
        
            <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">

                <div className="w-full flex flex-col md:flex-row justify-between items-center py-10 border-t border-white/20 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em] gap-6 md:gap-0">
                    <p> &copy; {new Date().getFullYear()} ADEDEJI ADEBAYO</p>
                    <div className="flex gap-8 md:gap-12">
                        <a className="hover:underline underline-offset-4 transition-all" href="#">PRIVACY</a>
                        <a className="hover:underline underline-offset-4 transition-all" href="#">TERMS</a>
                    </div>
                    <p>fabriqué la nuit</p>
                </div>
            </div>
            <footer className="footer-container">
                <div className="big-text text-[17vw] md:text-[15vw]">LET'S BUILD</div>
            </footer>
        </footer>
    );
}