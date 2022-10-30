import React, { useState } from "react";
import { AiOutlineMenu, AiFillHome } from "react-icons/ai";
import { IoMdPerson } from "react-icons/io";
import { BsFillBagFill, BsFillLockFill, BsFillQuestionCircleFill, BsXLg } from "react-icons/bs";
import { data } from "../data";
import { FlexColumn, MenuText, MenuWrapper } from "../Style/Sidebar.style";

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
    <MenuWrapper className={`${isOpen ? "icon-menu" : "expanded-menu"} menu`}>
      {isOpen ? (
        <AiOutlineMenu onClick={menuExpandHandler} />
      ) : (
        <BsXLg onClick={menuExpandHandler} />
      )}
      <FlexColumn>
        {isOpen ? (
          <FlexColumn>
            {iconsArray.map((icon: JSX.Element, i: number) => {
              return <MenuText key={i}>{icon}</MenuText>;
            })}
          </FlexColumn>
        ) : (
          <div>
            <FlexColumn>
              {data.map((menu: string, i: number) => {
                return (
                  <MenuText key={i} onClick={menuExpandHandler}>
                    {menu}
                  </MenuText>
                );
              })}
            </FlexColumn>
          </div>
        )}
      </FlexColumn>
    </MenuWrapper>
  );
};

export default Sidebar;
