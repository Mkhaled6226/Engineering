import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "الصفحة الرئيسية",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  {
    title: "الأقسام",
    path: "/departments",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text"
  },
  {
    title: "شئون الطلاب",
    path: "/inquiry",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
  {
    title: "المدينة الجامعية",
    path: "/housing",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text"
  },
  {
    title: "تسجيل دخول",
    path: "/sign-in",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text"
  },
  // {
  //   title: "Support",
  //   path: "/support",
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: "nav-text"
  // }
];
