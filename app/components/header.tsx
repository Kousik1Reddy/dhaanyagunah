'use client'
import React, { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import Dhaanyagunah from "../assets/Dhaanyagunha.jpg"
import { usePathname } from 'next/navigation'
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentpath = usePathname();

    const menuItems = [
      {
        lname: "Mission",
        nlink: '/mission',
      },
      {
        lname: "Vision",
        nlink: '/vision',
      },
      {
        lname: "About Us",
        nlink: '/about-us',
      },
      {
        lname: "Blog",
        nlink: '/blog'
      },
      {
        lname: "Contact Us",
        nlink: '/contact-us'
      }
      
    ];
    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand>
              <Link color="foreground" href="/">
              <Image src={Dhaanyagunah} alt="ImageFuckingbooty" className="h-10 w-10"/>
              <p className="font-bold text-inherit">Dhaanyagunah</p>
            </Link>
            </NavbarBrand>
          </NavbarContent>
    
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
          {menuItems.map((item, index) => (
              <NavbarItem key={`${item}-${index}`} isActive={item.nlink === currentpath}>
                <Link color="foreground" href={item.nlink}>
                {item.lname}
              </Link>
              </NavbarItem>

                ))}
          </NavbarContent>
          <NavbarMenu>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`} isActive={item.nlink === currentpath}>
                <Link
                  color="foreground"
                  className="w-full"
                  href={item.nlink}
                  size="lg"
                >
                  {item.lname}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      );
}

export default Header;