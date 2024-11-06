import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Profile = ({data}) => {
    const { content } = useContext(LanguageContext);
    
    if (!content || !content.profile) {
        return null;
    }
    
    const profileData = data || content.profile;
    
    const aboutMeTextParts = content.profile.aboutMeText.split('.');
    const firstPart = aboutMeTextParts[0] + '. ' + aboutMeTextParts[1] + '.';
    const secondPart = aboutMeTextParts[2] + '? ' + aboutMeTextParts[3] + '!';
    
    return (
     <section className="py-12 px-6 bg-white dark:bg-[#1F2937] font-['Inter']">
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-[#1F2937] dark:text-[#AEBCCF] mb-8">
                {content.profile.title}
            </h2>
                
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div>
                    <h3 className="text-[#4338CA] dark:text-[#B7AAFF] mb-6 text-2xl font-semibold">
                        {content.profile.tabTitles.profile}
                    </h3>
                    <div className="space-y-4">
                        <div className="grid grid-cols-[200px_1fr] items-start">
                            <span className="font-bold text-[#000000] dark:text-white">
                                {content.profile.labels.dogumTarihi}
                            </span>
                            <span className="text-[#000000] dark:text-white">
                                {content.profile.values.dogumTarihi}
                            </span>
                        </div>
                            
                        <div className="grid grid-cols-[200px_1fr] items-start">
                            <span className="font-bold text-[#000000] dark:text-white">
                                {content.profile.labels.ikametSehri}
                            </span>
                            <span className="text-[#000000] dark:text-white">
                                {content.profile.values.ikametSehri}
                            </span>
                        </div>
                            
                        <div className="grid grid-cols-[200px_1fr] items-start">
                            <span className="font-bold text-[#000000] dark:text-white">
                                {content.profile.labels.egitimDurumu}
                            </span>
                            <div className="text-[#000000] dark:text-white">
                                <div>{content.profile.values.egitimDurumu.line1}</div>
                                <div>{content.profile.values.egitimDurumu.line2}</div>
                            </div>
                        </div>
                            
                        <div className="grid grid-cols-[200px_1fr] items-start">
                            <span className="font-bold text-[#000000] dark:text-white">
                                {content.profile.labels.tercihEttigiRol}
                            </span>
                            <span className="text-[#000000] dark:text-white">
                                {content.profile.values.tercihEttigiRol}
                            </span>
                        </div>
                    </div>
                </div>
                    
                <div>
                    <div className="max-w-[85%]">
                        <div className="mb-4">
                            <h3 className="text-[#4338CA] dark:text-[#B7AAFF] mb-6 text-2xl font-semibold">
                                {content.profile.tabTitles.aboutMe}
                            </h3>
                        </div>
                        <div className="space-y-6">
                            <p className="text-[#6B7280] dark:text-white text-sm">
                                {firstPart}
                            </p>
                            <p className="text-[#6B7280] dark:text-white text-sm">
                                {secondPart}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
                
        <div className="border-b border-gray-200 dark:border-gray-700 mt-12" />
    </div>
</section>
    );
};

export default Profile;