const ProjectCard = ({ title, description, image, githubLink, githubText, siteLink, siteText }) => {
    return (
    <div className="flex flex-col max-w-[90%] p-4 font-['Inter'] h-full">
     <img src={image} alt={title} className="w-full h-auto rounded-lg mb-4"/>
         <h3 className="text-2xl font-medium mb-3 text-[#4338CA] dark:text-[#CFCBFF]">
           {title}
         </h3>
            
        <p className="text-[#6B7280] dark:text-white text-sm mb-4">
            {description}
         </p>
            
         <div className="flex gap-3 mb-4">
            <span className="px-5 py-1 border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3] dark:text-[#8F88FF] bg-white dark:bg-[#383838] rounded text-sm">
                 react
            </span>
            <span className="px-5 py-1 border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3] dark:text-[#8F88FF] bg-white dark:bg-[#383838] rounded text-sm">
                redux
            </span>
            <span className="px-5 py-1 border border-[#3730A3] dark:border-[#8F88FF] text-[#3730A3] dark:text-[#8F88FF] bg-white dark:bg-[#383838] rounded text-sm">
                axios
            </span>
            </div>
            
            <div className="flex justify-between mt-auto pb-8">
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-[#3730A3] dark:text-[#E1E1FF] hover:underline text-sm border-b border-[#3730A3] dark:border-[#E1E1FF]">
                {githubText}
            </a>
            <a href={siteLink} target="_blank" rel="noopener noreferrer" className="text-[#3730A3] dark:text-[#E1E1FF] hover:underline text-sm border-b border-[#3730A3] dark:border-[#E1E1FF]">
                {siteText}
            </a>
            </div>
        </div>
    );
};

export default ProjectCard;