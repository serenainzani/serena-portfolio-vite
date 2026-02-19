type Project = {
    title: string;
    description: string;
    githubLink: string;
    liveLink?: string;
    img: string;
};

const projectData: { [key: string]: Project } = {
    rpgNotes: {
        title: "RPG Notes App",
        description:
            "A custom web app to record and manage RPG game notes, featuring tailored categorization and a chronological display to streamline session tracking and storytelling.",
        githubLink: "https://github.com/serenainzani/rpg-notes-app",
        liveLink: "https://rpgnotes.serena.software/",
        img: "rpg-notes.JPEG",
    },
    aiRestReccs: {
        title: "AI Restaurant Recommender",
        description:
            "Inspired by talks from the React Advance Conference, this web app uses OpenAI to create bespoke dining reccomendations based on unique and specific requirements from the user.",
        githubLink:
            "https://github.com/serenainzani/restaurant-recommender-openai",
        liveLink: "https://airestaurantreccs.serena.software/",
        img: "ai-reccs-diner.JPEG",
    },
    arduino: {
        title: "Arduino Fundamentals",
        description:
            "Developing my electionical engineering and microcontroller skills by creating mini Arduino projects.",
        githubLink: "https://github.com/serenainzani/arduino-tutorial-notes",
        img: "arduino.jpeg",
    },
};

export default projectData;
