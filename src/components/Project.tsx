import PROJECTS from "../data/projectDetails";
import ProjectLink from "./ProjectLink";

const ProjectCard = ({ project }: { project: string }) => {
    const { title, description, githubLink, liveLink, img } = PROJECTS[project];
    return (
        <section className="flex w-fit">
            <img
                src={`../../public/${img}`}
                className="w-48 h-48 object-cover m-2
                "
            />
            <div className="flex flex-col justify-between">
                <p className="text-xs font-roboto font-normal p-2">
                    <span className="text-base font-bold">{title}</span>
                    &nbsp;{description}
                </p>
                <p className="text-sm font-roboto font-normal p-2">
                    <ProjectLink url={liveLink} text="Live App" />
                    &nbsp;.........................&nbsp;{" "}
                    <ProjectLink url={githubLink} text="GitHub" />
                </p>
            </div>
        </section>
    );
};

export default ProjectCard;
