import React, { useState } from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { BsFillBagFill, BsFillLockFill, BsFillQuestionCircleFill } from "react-icons/bs";
import { data } from "../data";
import "../index.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const iconsArray = [
    <AiFillHome />,
    <IoMdPerson />,
    <BsFillQuestionCircleFill />,
    <BsFillBagFill />,
    <BsFillLockFill />,
  ];

  const menuExpandHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={`${isOpen ? "icon-menu" : "expanded-menu"} menu`}>
      <AiOutlineMenu onClick={menuExpandHandler} />
      <div className={`menu-flex-column`}>
        {isOpen ? (
          <div className="menu-flex-column">
            {iconsArray.map((icon: JSX.Element, i: number) => {
              return (
                <span key={i} className="menu-text">
                  {icon}
                </span>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="menu-flex-column">
              {data.map((menu: string, i: number) => {
                return (
                  <span key={i} className="menu-text">
                    {menu}
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
