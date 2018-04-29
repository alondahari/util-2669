import React from 'react'
import {
  Navbar, NavbarHeading, NavbarGroup, NavbarDivider, Button, Alignment
} from "@blueprintjs/core";

const Nav = (props) => {
  return (
    <Navbar className="pt-dark">
      <NavbarGroup align={Alignment.LEFT}>
        <NavbarHeading>Utilities 2669</NavbarHeading>
        <NavbarDivider />
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button className="pt-minimal" icon="home" text="Home" />
        <Button className="pt-minimal" icon="document" text="Files" />
      </NavbarGroup>
    </Navbar>
  )
}

export default Nav