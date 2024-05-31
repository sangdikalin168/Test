import { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

export default function SideBarItems({ item }: any) {
    const [open, setOpen] = useState(false);

    if (item.childrens) {
        return (
            <div>
                <li
                    className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-600 hover:text-gray-100 rounded-md"
                    onClick={() => setOpen(!open)}
                >
                    {item.icon ? item.icon : <MdOutlineDashboard />}
                    <span className="flex-1 text-sm">{item.title}</span>
                    {item.childrens && (
                        <BsChevronDown className={`${open && "rotate-180"} mr-2`} />
                    )}
                </li>
                {open ? (
                    <div className="px-5 text-white">
                        {item.childrens.map((child: any, index: number) => (
                            <SideBarItems key={index} item={child} />
                        ))}
                    </div>
                ) : null}
            </div>
        );
    } else {
        return (
            <li className="mb-1 group">
                <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                    {item.icon ? item.icon : <MdOutlineDashboard />}
                    <span className="text-sm">{item.title}</span>
                </a>
            </li>
            // <Link
            //     className="flex items-center py-2 px-4 text-gray-300 hover:bg-blue-600 hover:text-gray-100 rounded-md"
            //     to={item.path}
            // >
            //     {item.icon ? item.icon : <MdOutlineDashboard />}
            //     <span className="flex-1 text-sm">{item.title}</span>
            //     <p>test</p>
            // </Link>
        );
    }
}