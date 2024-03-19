import { PAGE_ENUM } from "@/libraries/enum/pages";
import HomeIcon from "@/libraries/icon/svg/home-icon";
import SearchIcon from "@/libraries/icon/svg/search-icon";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

type Props = {};
type NavigationLinks = {
  href: string;
  icon: any;
  title: string;
};
const NavigationComponent = (props: Props) => {
  const pathname = usePathname();
  const navigationLinks: NavigationLinks[] = [
    {
      href: PAGE_ENUM.HOME_PAGE,
      icon: <HomeIcon width="25" height="25" />,
      title: "Home",
    },
    {
      href: PAGE_ENUM.SEARCH_PAGE,
      icon: <SearchIcon height="25" width="25" />,
      title: "Search",
    },
  ];
  return (
    <div className="mb-2 bg-slight-gray px-6 py-1 rounded-md">
      {navigationLinks.map((link) => (
        <Link
          key={link.href}
          className={
            "flex my-6 items-center" +
            " navigation-links" +
            (link.href === pathname ? " active" : "")
          }
          href={link.href}
        >
          <div className="link-icon">{link.icon}</div>
          <p
            className={`text-gray-300 ml-4 mx-auto hover:text-white hover:font-semibold ${
              pathname === link.href ? "text-white font-semibold" : ""
            }`}
          >
            {link.title}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default NavigationComponent;
