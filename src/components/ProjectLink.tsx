const ProjectLink = ({ url, text }: { url: string; text: string }) => {
    return (
        <a
            href={url}
            className="underline text-fishing-aqua"
            target="_blank"
            rel="noopener noreferrer"
        >
            {text}
        </a>
    );
};

export default ProjectLink;
