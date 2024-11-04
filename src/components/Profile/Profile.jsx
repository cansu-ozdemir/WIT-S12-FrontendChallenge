import { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Profile = () => {
    const { content } = useContext(LanguageContext);

    if (!content || !content.profile) {
        return null;
    }

    return (
        <section className="py-12 px-6 bg-white dark:bg-[#1F2937]">
            <div className="max-w-7xl mx-auto">

                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                    {content.profile.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div>
                        <h3 className="text-[#7B61FF] dark:text-[#8F88FF] mb-6">
                            {content.profile.profileLink}
                        </h3>
                        <div className="space-y-4 text-gray-700 dark:text-gray-300">
                            <p>
                                <span className="font-semibold text-gray-900 dark:text-white">{content.profile.labels.dogumTarihi} </span>{' '}
                                {content.profile.values.dogumTarihi}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-900 dark:text-white">{content.profile.labels.ikametSehri} </span>{' '}
                                {content.profile.values.ikametSehri}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-900 dark:text-white">{content.profile.labels.egitimDurumu} </span>{' '}
                                {content.profile.values.egitimDurumu}
                            </p>
                            <p>
                                <span className="font-semibold text-gray-900 dark:text-white">{content.profile.labels.tercihEttigiRol}</span>{' '}
                                {content.profile.values.tercihEttigiRol}
                            </p>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-[#7B61FF] dark:text-[#8F88FF] mb-6">
                        {content.profile.tabTitles.aboutMe}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                        {content.profile.aboutMeText}
                        </p>
                    </div>
                </div>


                <div className="border-b border-gray-200 dark:border-gray-700 mt-8" />
            </div>
        </section>
    );
};

export default Profile;