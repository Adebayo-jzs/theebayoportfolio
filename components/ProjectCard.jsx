const ProjectsCard = ({
  id,
  projectname,
  desc,
  imgurl,
  preview,
  code,
  type,
  year,
}) => (
  <div className="min-w-[85vw] md:min-w-[450px] lg:min-w-[500px] snap-center">
    <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 group mb-6 border border-white/10 rounded-sm">
      
      {/* Image */}
      <img
        alt={projectname}
        className="w-full h-full object-cover opacity-70
          group-hover:scale-105 transition-transform duration-700"
        src={imgurl}
        loading="lazy"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:opacity-80 group-hover:backdrop-blur-sm" />

       

      
      <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6 transition-all">
         
        <h3 className="text-3xl transition-all md:text-4xl font-black text-white uppercase tracking-tighter leading-none">
          {projectname}
        </h3>
        <p className="
            translate-y-8 group-hover:translate-y-0
            transition-transform duration-500 text-[#939393]
            text-sm md:text-base leading-relaxed my-6 max-w-md 
            opacity-0 group-hover:opacity-100 absolute group-hover:relative">
            {desc}
        </p>
        <div className="flex gap-4 mt-4">
            <a
              href={preview}
              target="_blank"
              className="inline-block py-3 px-6 border-2 border-white text-xs font-black uppercase tracking-widest
                hover:bg-white hover:text-black transition-all"
            >
              View Project
            </a>

            {code && (
              <a
                href={code}
                target="_blank"
                className="inline-block py-3 px-6 border border-white/40 text-xs font-black uppercase tracking-widest
                  hover:border-white transition-all text-white/80"
              >
                Code
              </a>
            )}
          </div>
      </div>
    </div>

    {/* Meta */}
    <div className="flex justify-between text-white font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
      <span>{type}</span>
      <span>{year}</span>
    </div>
  </div>
);

export default ProjectsCard;