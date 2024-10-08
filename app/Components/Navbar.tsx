"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { github } from "../utils/Icons";
import Themedropdown from "./ThemeDropdown/Themedropdown";
import SearchDialog from "./SearchDialog/SearchDialog";
import { useGlobalContext } from "../context/globalContext";
import { Target } from "lucide-react";

function Navbar() {
  const router = useRouter();
  const { state } = useGlobalContext();

  return (
    <div className="w-full py-4 flex items-center justify-between">
      <div className="left"></div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />

        <div className="btn-group flex items-center gap-2">
          <Themedropdown />

          <Button
            className="source-code flex items-center gap-2"
            onClick={() => {
              window.open(
                "https://github.com/amar-rakhpasre/weather-app",
                "_blank"
              );
            }}
          >
            {" "}
            {github} Source code
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
