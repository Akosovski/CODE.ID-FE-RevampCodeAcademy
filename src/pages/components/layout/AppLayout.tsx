import { Fragment, useEffect, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { useSelector, useDispatch } from "react-redux";
import {
  HomeIcon,
  MenuAlt1Icon,
  XIcon,
  ViewGridAddIcon,
  CogIcon,
  PhoneOutgoingIcon,
  UserGroupIcon,
  AcademicCapIcon,
  BookOpenIcon,
} from "@heroicons/react/outline";

import {
  ChevronRightIcon,
  DotsVerticalIcon,
  DuplicateIcon,
  PencilAltIcon,
  SearchIcon,
  TrashIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

const navigation = [
  {
    name: "Dashboard",
    href: "/",
    icon: HomeIcon,
    current: true,
    roles: ["Administrator", "Recruiter", "Sales", "Instructor"],
  },
  {
    name: "Candidates",
    href: "/candidates",
    icon: AcademicCapIcon,
    current: false,
    roles: ["Administrator", "Recruiter", "Instructor"],
  },
  {
    name: "Batch",
    href: "/batch",
    icon: ViewGridAddIcon,
    current: false,
    roles: ["Administrator", "Recruiter", "Instructor"],
  },
  {
    name: "Talent",
    href: "/hr/talent",
    icon: UserGroupIcon,
    current: false,
    roles: ["Administrator", "Recruiter", "Instructor", "Sales"],
  },
  {
    name: "Employee",
    href: "/hr/employee",
    icon: UserGroupIcon,
    current: false,
    roles: ["Administrator", "Recruiter", "Sales"],
  },
  {
    name: "Curriculum",
    href: "/curriculum",
    icon: BookOpenIcon,
    current: false,
    roles: ["Administrator", "Instructor"],
  },
  {
    name: "Hiring",
    href: "/hiring",
    icon: PhoneOutgoingIcon,
    current: false,
    roles: ["Administrator", "Recruiter", "Sales"],
  },
  {
    name: "Settings",
    href: "/settings",
    icon: CogIcon,
    current: false,
    roles: [
      "Administrator",
      "Recruiter",
      "Sales",
      "Instructor",
      "Candidates",
      "Talent",
      "Outsource",
    ],
  },
];

function classNames(...classes : any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function AppLayout(props: any) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { children } = props;

  const dispatch = useDispatch();
  const [user, setUser] = useState({});
  useEffect(() => {
    
  }, []);
  
  const onLogout = () => {
    router.push("/");
  };

  return (
    <div className="h-full flex overflow-hidden bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          static
          className="fixed inset-0 flex z-40 lg:hidden"
          open={sidebarOpen}
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>

              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">
                  <div className="space-y-1">
                    {navigation
                      .map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50",
                            "group flex items-center px-2 py-2 text-base leading-5 font-medium rounded-md"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? "text-gray-500"
                                : "text-gray-400 group-hover:text-gray-500",
                              "mr-3 flex-shrink-0 h-6 w-6"
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                  </div>
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:flex lg:flex-shrink-0">
        <div className="flex flex-col w-64 border-r border-gray-200 pb-4 bg-gray-100">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="h-0 flex-1 flex flex-col overflow-y-auto">
            {/* Navigation */}
            <nav className="px-3 mt-6">
              <div className="space-y-1">
                {navigation
                  .map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-700 hover:text-gray-900 hover:bg-gray-50",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </Link>
                  ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Main column */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Search header */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:hidden">
          <button
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <MenuAlt1Icon className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex-1 flex justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex-1 flex">
              <form className="w-full flex md:ml-0" action="#" method="GET">
                <label htmlFor="search_field" className="sr-only">
                  Search
                </label>
                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                  <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                    <SearchIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input
                    id="search_field"
                    name="search_field"
                    className="block w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:text-sm"
                    placeholder="Search"
                    type="search"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* Page title & actions */}
          {children}
        </main>
      </div>
    </div>
  );
}
