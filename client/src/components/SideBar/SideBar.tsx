import { useSideBarContext } from "../../context/SideBarContext";
import SideBarItems from "./SideBarItems";
import { HiOutlineUserCircle } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";

export default function SideBar() {

    const { expanded } = useSideBarContext();
    const items = [
        {
            title: "Oganization",
            icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
            childrens: [
                {
                    title: "Departments",
                    path: "/departments",
                    icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
                },
                {
                    title: "Positions",
                    path: "/positions",
                    icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
                },
            ],
        },
        {
            title: "Report",
            icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
            childrens: [
                {
                    title: "ចំណូល",
                    path: "/income",
                    icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
                },
                {
                    title: "អតិថិជន",
                    path: "/expense",
                    icon: <FaUserCog className="mr-3 text-lg" />,
                },
            ],
        },
        {
            title: "អ្នកប្រើប្រាស់",
            icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
            childrens: [
                {
                    title: "អ្នកប្រើប្រាស់",
                    path: "/user",
                    icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
                },
                {
                    title: "កំណត់សិទ្ធិ",
                    path: "/user_authorize",
                    icon: <FaUserCog className="mr-3 text-lg" />,
                },
            ],
        },
    ];

    return (
        <div className={`fixed left-0 top-0 w-64 h-full bg-gray-900 p-4 z-50 transition-transform ${expanded ? "" : "-translate-x-full"}`}>
            <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
                <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover" />
                <span className="text-lg font-bold text-white ml-3">Premier Park</span>
            </a>
            <ul className="mt-4">
                {items.map((item: any, index: number) => (
                    <SideBarItems key={index} item={item} />
                ))}
            </ul>
        </div>

    )
}