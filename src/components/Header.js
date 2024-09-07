import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../car/carSlice";
import { useSelector } from "react-redux";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(false);         
  const cars = useSelector(selectCars);  

  return (
    <Contain>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <MenuBar>
        {cars &&
          cars.map((car, index) => (
            <a href="/" key={index}>
              {car}
            </a>
          ))}
      </MenuBar>
      <RightM>
        <a href="/">Shop </a>
        <a href="/">Account </a>
        <a href="/">Connect</a>
        <CustomM
          onClick={() => {
            setBurgerStatus(true);
          }}
        />
      </RightM>
      <BurgerNav show={burgerStatus}>
        <CustomClose
          onClick={() => {                            
            setBurgerStatus(false);                 
          }}
        />
        {cars &&
          cars.map((car, index) => (                              
            <li key={index}>
              <a href="/" key={index}>                  
                {car}
              </a>
            </li>
          ))}
        <li>
          <a href="/">Existing Inventory</a>              
        </li>
        <li>
          <a href="/">Used Inventory</a>
        </li>
        <li>
          <a href="/">CyberFast</a>
        </li>
        <li>
          <a href="/">Track Order</a>
        </li>
      </BurgerNav>
    </Contain>
  );
}

const Contain = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 1;
`;

const MenuBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightM = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomM = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    a {
      font-weight: 600;
    }
  }
  
`;

const CustomClose = styled(CloseIcon)`
  align-self: end;
  cursor: pointer;
  margin-right: 10px;
`;

export default Header;
