"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import {
  LayoutModelNotificationField,
  MenuDropdownRecord,
  MenuItemRecord,
  MenuQuery,
  SiteLocale,
} from "@/graphql/generated";
import NotificationStrip from "./NotificationStrip";
import { Menu } from "./HeaderRenderer";
import { UserButton } from "@clerk/nextjs";
import { AppContext } from "@/context/App";

type Props = {
  lng: SiteLocale;
  data: MenuQuery;
};

const Header = ({ lng, data }: Props) => {
  const menuData: Menu[] = [];
  const { theme, themeHandler } = useContext(AppContext)

  data.layout!.menu.map((item) => {
    if (item._modelApiKey === "menu_dropdown") {
      const dropdownItem = item as MenuDropdownRecord;
      menuData.push({
        id: "1",
        title: dropdownItem.title || "Other Items",
        newTab: false,
        submenu: dropdownItem.items.map((item) => {
          return {
            id: item.id,
            title: item.title,
            path: `/${item.page.slug}`,
            newTab: true,
          };
        }),
      });
    } else {
      const menuItem = item as MenuItemRecord;
      menuData.push({
        id: menuItem.id,
        title: menuItem.title,
        path: `/${menuItem.page.slug}`,
        newTab: false,
      });
    }
  });

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [notificationStrip, setNotificationStrip] = useState(false);

  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <>
      {notificationStrip && (
        <NotificationStrip
          notification={
            data.layout?.notification as LayoutModelNotificationField
          }
          lng={lng}
          setNotificationStrip={setNotificationStrip}
        />
      )}
      <header
        className={`header left-0 z-40 w-full flex items-center bg-transparent dark:bg-dark-background ${sticky
          ? "fixed top-0 z-50 bg-white bg-opacity-80 shadow-sticky backdrop-blur-sm transition"
          : `absolute ${notificationStrip ? "top-10" : "top-0"}`
          }`}
      >
        <div className="max-w-[1440px] relative flex items-center justify-between w-full xl:px-8 px-4 mx-auto">
          <div className="flex w-full items-center justify-between xl:pl-4 sm:pl-6">
            <div className="sm:-mx-4 mx-0">
              <Link
                href={`/${lng}/about`}
                className={`header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"
                  } `}
              >
                <div className="lg:w-32 sm:w-28 w-24">
                  {data.layout?.logo.url && (
                    <Image
                      src={theme === 'dark'
                        ? '/jato-logo-crop-for-web-dark-theme.png'
                        : '/jato-logo-crop-for-web.png'}
                      alt="logo"
                      width={140}
                      height={130}
                    />
                  )}
                </div>
              </Link>
            </div>
            <div className="ml-6">
              <nav
                id="navbarCollapse"
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen
                  ? "visibility top-full opacity-100"
                  : "invisible top-[120%] opacity-0"
                  }`}
              >
                <ul className="block items-center lg:flex xl:space-x-6 space-x-3">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path ? (
                        <Link
                          href={"/" + lng + menuItem.path}
                          className={`flex py-2 xl:text-base text-sm text-dark group-hover:opacity-70 dark:text-darktext lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${menuItem.title.length > 10 ? 'xl:w-[88px] lg:w-[78px]' : ''}`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <a
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 xl:text-base text-sm text-dark group-hover:opacity-70 dark:text-darktext lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 xl:w-[10rem] lg:w-[9rem]"
                          >
                            {menuItem.title}
                            <span className="">
                              <svg width="15" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </a>
                          <div
                            className={`submenu relative left-0 top-full rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"
                              }`}
                          >
                            {menuItem.submenu?.map((submenuItem) => (
                              <Link
                                href={"/" + lng + submenuItem.path}
                                key={submenuItem.id}
                                className="block rounded py-2.5 text-sm text-dark hover:opacity-70 dark:hover:bg-[#201f2f] dark:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 mx-3" onClick={themeHandler}>
                <Image
                  src={
                    theme === 'dark'
                      ? '/dark-mode-icon.svg'
                      : '/moon.svg'
                  }
                  width={20}
                  height={20}
                  alt="light"
                  className={`cursor-pointer ${theme === 'dark' ? 'rotate-90' : 'rotate-[40]'} `}
                />
              </div>
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="block rounded-lg md:px-3 px-1 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span
                  className={`relative lg:my-1.5 my-1 block h-0.5 lg:w-[30px] w-5 bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[5px] rotate-45" : " "
                    }`}
                />
                <span
                  className={`relative lg:my-1.5 my-1 block h-0.5 lg:w-[30px] w-5 bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "
                    }`}
                />
                <span
                  className={`relative lg:my-1.5 my-1 block h-0.5 lg:w-[30px] w-5 bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "
                    }`}
                />
              </button>
              <UserButton />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
