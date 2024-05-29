import { useSideBarContext } from "../../context/SideBarContext";
import SideBarItems from "./SideBarItems";
import { HiOutlineUserCircle, HiOutlineTicket } from "react-icons/hi";
import { FaUserCog } from "react-icons/fa";

export default function SideBar() {

    const { expanded } = useSideBarContext();
    const items = [
        {
            title: "សំបុត្រ",
            path: "/ticket",
            icon: <HiOutlineTicket className="mr-3 text-lg" />,
        },
        {
            title: "សមាជិក",
            path: "/members",
            icon: <HiOutlineTicket className="mr-3 text-lg" />,
        },
        {
            title: "Request",
            icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
            childrens: [
                {
                    title: "Hold Request",
                    path: "/hold_request",
                    icon: <HiOutlineUserCircle className="mr-3 text-lg" />,
                },
                {
                    title: "Transfer",
                    path: "/transfer_request",
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
                {/* <li className="mb-1 group">
                    <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100">
                        <HiOutlineTicket className="mr-3 text-lg" />
                        <span className="text-sm">Dashboard</span>
                    </a>
                </li>
                <li className="mb-1 group">
                    <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                        <HiOutlineTicket className="mr-3 text-lg" />
                        <span className="text-sm">Orders</span>
                        <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                    </a>
                    <ul className="pl-7 mt-2 group-[.selected]:block">
                        <li className="mb-4">
                            <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active order</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Completed order</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
                        </li>
                    </ul>
                </li>
                <li className="mb-1 group">
                    <a href="#" className="flex items-center py-2 px-4 text-gray-300 hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-800 group-[.active]:text-white group-[.selected]:bg-gray-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                        <HiOutlineTicket className="mr-3 text-lg" />
                        <span className="text-sm">Orders</span>
                        <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                    </a>
                    <ul className="pl-7 mt-2 group-[.selected]:block">
                        <li className="mb-4">
                            <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active order</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Completed order</a>
                        </li>
                        <li className="mb-4">
                            <a href="#" className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled order</a>
                        </li>
                    </ul>
                </li> */}
            </ul>
        </div>

    )
}