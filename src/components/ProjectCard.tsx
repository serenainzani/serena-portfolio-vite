import PROJECTS from "../data/projectDetails";
import ProjectLink from "./ProjectLink";

const ProjectCard = ({ project }: { project: string }) => {
    const { title, description, githubLink, liveLink, img } = PROJECTS[project];
    return (
        <section className="flex w-fit md:mb-5">
            <img
                src={`../../public/${img}`}
                className="w-40 h-40 object-cover m-2
                "
            />
            <div className="flex flex-col justify-between">
                <p className="text-xs md:text-base font-roboto font-normal p-2">
                    <span className="text-base md:text-lg font-bold">
                        {title}
                    </span>
                    &nbsp;{description}
                </p>
                <p className="text-sm md:text-base font-roboto font-normal p-2">
                    {liveLink && (
                        <>
                            <ProjectLink url={liveLink} text="Live App" />
                            &nbsp;...........&nbsp;
                        </>
                    )}
                    <ProjectLink url={githubLink} text="GitHub" />
                </p>
            </div>
        </section>
    );
};

export default ProjectCard;
