const ProjectCard = ({ title, description, image, githubLink, githubText, siteLink, siteText }) => {
    return (
        <div className="flex flex-col">

            <img 
                src={image} 
                alt={title} 
                className="w-full h-auto rounded-lg mb-4"
            />
            

            <h3 className="text-[#7B61FF] dark:text-[#8F88FF] text-lg font-medium mb-2">
                {title}
            </h3>
            

            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {description}
            </p>
            

            <div className="flex gap-4 mt-auto">
                <a 
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7B61FF] dark:text-[#8F88FF] hover:underline text-sm"
                >
                    {githubText}
                </a>
                <a 
                    href={siteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#7B61FF] dark:text-[#8F88FF] hover:underline text-sm"
                >
                    {siteText}
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;