import React from "react";
import {
  BrandIcon,
  Button,
  Container,
} from "@/components/green-supermarket-common-ui";
import { description, email, developers, name } from "@/constants";
import Link from "next/link";

import { link } from "fs";
import { FooterLinks, FooterLogos } from "@/data";
import { Item } from "@radix-ui/react-navigation-menu";

type Props = {};

const Year = new Date().getFullYear();
const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-900 text-gray-0">
      <Container>
        <div className="divide-y-[1px] divide-gray-800">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10 gap-y-14">
            {/* GREEN SUPERMARKET */}
            <div className="flex flex-col gap-5 text-center md:text-left">
              <BrandIcon mode="light" />
              <p className="text-sm text-gray-200">{description}</p>
              <Link href={`mailto:${email}`} className="text-gray-0 hover:text-gray-200 text-sm">
                {email}
              </Link>
            </div>
            {/* useful list */}
            <div className="flex flex-col gap-5 text-center ">
              <h2 className="font-semibold uppercase ">useful links</h2>
              <div className="text-gray-200 flex flex-col gap-y-2">
                {FooterLinks.map((item) => (
                  <Link
                    className="hover:underline hover:text-gray-0"
                    href={item.link}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col  gap-4 text-center md:text-right list-none  ">
              <h2 className="font-semibold uppercase">follow us on</h2>
              <div className=" flex justify-center md:justify-end gap-5 z-50">
                {FooterLogos.map((item) => (
                  <Link href={item.link} key={item.id}>
                    <Button
                      size="icon"
                      className="hover:bg-green-400 hover:text-gray-0  "
                    >
                      {React.createElement(item.icon)}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </div>
                
          <div className="flex flex-col md:flex-row items-center gap-1 justify-between py-5 text-xs">
            <div className="">
              Copyright &copy;{Year} | {name}{" "}
            </div>
            <div className=" ">
              Designed & Developed by{" "}
              <span className="uppercase"> {developers}</span>{" "}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
