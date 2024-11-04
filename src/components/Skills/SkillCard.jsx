const SkillCard = ({ title, description, icon }) => {
    return (
      <div className="w-[300px] flex-shrink-0 p-6 bg-white dark:bg-[#1F2937] rounded-lg transition-all hover:shadow-lg flex flex-col">

        <div className="flex items-center gap-3 mb-3">
          {icon && (
          <div className="w-8 flex-shrink-0">
            <img 
              src={icon} 
              alt={title} 
              className="w-8 h-8 object-contain"
            />
            </div>
          )}
          <h3 className="text-[#7B61FF] dark:text-[#8F88FF] text-lg font-medium">
            {title}
          </h3>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {description}
        </p>
      </div>
    );
  };
  
  export default SkillCard;