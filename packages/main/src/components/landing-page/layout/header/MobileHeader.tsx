import { Link } from "react-router";




const MobileHeader: React.FC<{ item: any }> = ({ item }) => {

    return (
        <>
            <Link to={item.href} className="text-forest-black dark:text-darklink hover:text-opacity-50 rounded-md text-base font-medium">
                <li className="rounded-md w-full p-2 px-4 hover:bg-primary/5">
                    {item.label}
                </li>
            </Link>
        </>
    );
};

export default MobileHeader;
