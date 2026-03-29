import Link from "next/link";

const ProjectsCard = ({
  id,
  projectname,
  slug,
  desc,
  imgurl,
  preview,
  code,
  type,
  year,
}) => (
  <div className="w-[100%] snap-center group">
    <Link href={`/projects/${slug}`}>
      <div className="relative overflow-hidden aspect-[4/3] bg-card mb-6 border border-border rounded-sm transition-all hover:border-foreground/50">
        
        {/* Image */}
        <img
          alt={projectname}
          className="w-full h-full object-cover opacity-70
            group-hover:scale-105 transition-transform duration-700"
          src={imgurl}
          loading="lazy"
        />

        {/* Theme-aware overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-transparent group-hover:opacity-80 group-hover:backdrop-blur-sm transition-all" />

        <div className="absolute bottom-3 left-3 xl:bottom-5 md:left-5 pr-6 transition-all">
          <h3 className="text-3xl transition-all md:text-4xl font-black text-[#e5e5e5] uppercase tracking-tighter leading-none">
            {projectname}
          </h3>
          <p className="text-white/60 text-xs mt-2 font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            View Details →
          </p>
        </div>
      </div>
    </Link>


    {/* Meta */}
    <div className="flex justify-between text-foreground font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em]">
      <span>{type}</span>
      <span>{year}</span>
    </div>
  </div>
);

export default ProjectsCard;