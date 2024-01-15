"use client"
import React, { useEffect, useState } from "react";
import { MenuItem } from "./MenuItem/MenuItem";
import DashboardIcon from "../../../../public/icons/blue-dashboard-icon.svg";
import InboxIcon from "../../../../public/icons/inbox-icon.svg";
import AllChatsIcon from "../../../../public/icons/blue-all-chats-icon.svg";
import LiveChatIcon from "../../../../public/icons/blue-livechat-icon.svg";
import FacebookIcon from "../../../../public/icons/blue-facebook-icon.svg";
import InstagramIcon from "../../../../public/icons/blue-instagram-icon.svg";
import WhatsappIcon from "../../../../public/icons/blue-whatsapp-icon.svg";
import EmailIcon from "../../../../public/icons/blue-email-icon.svg";
import WebsiteVisitorIcon from "../../../../public/icons/website-visitor-icon.svg";
import ChatbotIcon from "../../../../public/icons/chatbot-icon.svg";
import QuestionMarkIcon from "../../../../public/icons/question-mark-icon.svg";
import ClockIcon from "../../../../public/icons/clock-icon.svg";
import DepartmentIcon from "../../../../public/icons/department-icon.svg";
import GraphIcon from "../../../../public/icons/question-mark-icon.svg";
import IntegrationsIcon from "../../../../public/icons/integrations-icon.svg";
import ChatWidgetIcon from "../../../../public/icons/chat-widget-icon.svg";
import SettingsIcon from "../../../../public/icons/settings-icon.svg";
import GeneralIcon from "../../../../public/icons/settings-general-icon.svg";
import BlackListIcon from "../../../../public/icons/settings-blacklist-icon.svg";
import ResponseIcon from "../../../../public/icons/settings-response-icon.svg";
import { useRouter } from 'next/router';

const Sidebar: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const router = useRouter();

  const currentRoute = router.route;


  const upperMenuItems = [
    {
      id: "m-1",
      label: "Dashboard",
      icon: <DashboardIcon />,
      link: "/",
    },
    {
      id: "m-2",
      label: "Inbox",
      icon: <InboxIcon />,
      subItems: [
        {
          id: "m2-s1",
          label: "All Chats",
          icon: <AllChatsIcon />,
          link: "/",
        },
        {
          id: "m2-s2",
          label: "Ola Chats",
          icon: <LiveChatIcon />,
          link: "/",
        },
        {
          id: "m2-s3",
          label: "Facebook",
          icon: <FacebookIcon />,
          link: "/",
        },
        {
          id: "m2-s4",
          label: "Instagram",
          icon: <InstagramIcon />,
          link: "/",
        },
        {
          id: "m2-s5",
          label: "WhatsApp",
          icon: <WhatsappIcon />,
          link: "/",
        },
        {
          id: "m2-s6",
          label: "Email",
          icon: <EmailIcon />,
          link: "/",
        },
      ],
    },
    {
      id: "m-3",
      label: "Website Visitors",
      icon: <WebsiteVisitorIcon />,
      link: "/visitors",
    },
    {
      id: "m-4",
      label: "Chatbot",
      icon: <ChatbotIcon />,
      link: "/chatbot",
    },
    {
      id: "m-5",
      label: "FAQs",
      icon: <QuestionMarkIcon />,
      link: "/faqs",
    },
    {
      id: "m-6",
      label: "Chat History",
      icon: <ClockIcon />,
      link: "/",
    },
    {
      id: "m-7",
      label: "Department/User",
      icon: <DepartmentIcon />,
      link: "/users",
    },
    {
      id: "m-8",
      label: "Reports",
      icon: <GraphIcon />,
      link: "/",
    },
  ];

  const lowerMenuItems = [
    {
      id: "m-9",
      label: "Integrations",
      icon: <IntegrationsIcon />,
      link: "/integrations",
    },
    {
      id: "m-10",
      label: "Chat Widget",
      icon: <ChatWidgetIcon />,
      link: "/chat-widget",
    },
    {
      id: "m-11",
      label: "Settings",
      icon: <SettingsIcon />,
      subItems: [
        {
          id: "m11-s1",
          label: "General Settings",
          link: "/",
          icon: <GeneralIcon />,
        },
        {
          id: "m11-s2",
          label: "Responses",
          link: "/",
          icon: <ResponseIcon />,
        },
        {
          id: "m11-s3",
          label: "Url Blacklist",
          link: "/",
          icon: <BlackListIcon />,
        },
      ],
    },
  ];

 

  useEffect(() => {    
    // Find the menu item that corresponds to the current route
    const findMenuItem = (menuItems: any[], path: string): string | null => {
      for (const menuItem of menuItems) {
        if (menuItem.link === path) {
          return menuItem.id;
        }

        if (menuItem.subItems) {
          const foundSubItem = findMenuItem(menuItem.subItems, path);
          if (foundSubItem) {
            return foundSubItem;
          }
        }
      }

      return null;
    };

    const activeMenuId = findMenuItem([...upperMenuItems, ...lowerMenuItems], location.pathname);    

    if (activeMenuId) {
      setActiveMenu(activeMenuId);
    }
  }, [currentRoute]);

  const onMenuClick = (item: any, index: number) => {
    if (item.id.includes("s")) {
      setActiveMenu(item.id);
    } else {
      setActiveMenu(item.id);

      if (item.subItems && !item.id.includes("s") && item.subItems.length > 0) {
        // If the clicked menu item has sub-items

        setOpenMenu(
          openMenu == index && (item.id == "m-2" || item.id == "m-11")
            ? null
            : index
        ); // Always keep the submenu open
        // Set the clicked submenu item as the active menu item
        setActiveMenu(item.subItems[0].id);
      } else {
        // If it's a regular menu item without sub-items, set it as the active menu item
        setOpenMenu(null);
      }
    }
  };

  return (
    <div className="bg-white py-0 px-3 w-64 z-5 fixed bottom-0 left-0 top-[calc(100vh-89%)] shadow-sidebar overflow-y-scroll h-[calc(100vh-78px)] no-scrollbar">
      <ul className="list-none p-0 mt-6 mb-3">
        {upperMenuItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <MenuItem
              item={item}
              index={index}
              openMenu={openMenu}
              isActive={activeMenu === item.id}
              activeMenu={activeMenu}
              onMenuClick={(item, index) => onMenuClick(item, index)}
            />
            {index === upperMenuItems.length - 1 && (
              <div className="h-[0.5px] my-8 opacity-[0.20] bg-gray-500"></div>
            )}
          </React.Fragment>
        ))}
        {lowerMenuItems.map((item, index) => (
          <React.Fragment key={item.id}>
            <MenuItem
              item={item}
              index={index}
              openMenu={openMenu}
              isActive={activeMenu === item.id}
              activeMenu={activeMenu}
              onMenuClick={(item, index) => onMenuClick(item, index)}
            />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
