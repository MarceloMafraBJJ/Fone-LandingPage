import React from "react";
import { Container, Header, Image, Items, Menu } from './styles';
import { faMagnifyingGlass, faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const header = () => {
  return (
    <Container>
      <Header>
        <Image />
        <Items>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Products
          </li>
          <li>
            Support
          </li>
        </Items>
        <Menu>
          <li >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </li>
          <li>
            <FontAwesomeIcon icon={faCartShopping} />
          </li>
          <li>
            <FontAwesomeIcon icon={faBars} />
          </li>

        </Menu>
      </Header>

    </Container>
  );
};

export default header;
