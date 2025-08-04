

import { useEffect, useState } from "react";

import { Link } from "react-router";
import IconRocket from 'src/assets/images/landingpage/icon/rocket-icon.svg'

type AnnouncementBarProps = {
    setIsVisible: (visible: boolean) => void;
};

const AnnouncementBar = ({ setIsVisible }: AnnouncementBarProps) => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY >= 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // AnnouncementBar is always visible, parent controls visibility
    return (
        <div className={`px-2 pt-2 pb-1 ${sticky ? '' : ''}`}>
            <div className="bg-primary relative flex flex-wrap items-center justify-center text-center gap-1 sm:gap-2 rounded-xl p-2.5">
                <div className="flex-1 overflow-hidden">
                    <div className="inline-flex items-center gap-8 relative animate-slide-left-content whitespace-nowrap">
                        {/* Sliding content instance 1 */}
                        <div className="sm:hidden inline-flex gap-3">
                            <img src={IconRocket} alt="rocket-icon" width={20} height={20} />
                            <p className="text-sm text-white font-normal whitespace-nowrap">
                                NiceAdmin can be used in personal & commercial projects.
                            </p>
                            <Link to="/" className="text-sm text-secondary hover:text-secondary/70 font-semibold border-b whitespace-nowrap">
                                Learn more
                            </Link>
                        </div>
                        <div className="inline-flex gap-3">
                            <img src={IconRocket} alt="rocket-icon" width={20} height={20} />
                            <p className="text-sm text-white font-normal whitespace-nowrap">
                                NiceAdmin can be used in personal & commercial projects.
                            </p>
                            <Link to="/" className="text-sm text-secondary hover:text-secondary/70 font-semibold border-b whitespace-nowrap">
                                Learn more
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 ml-2">
                    <button
                        onClick={() => setIsVisible(false)}
                        className="cursor-pointer"
                        aria-label="Close"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;
