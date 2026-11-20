import { useEffect, useState } from "react";
import { eColors } from "../types/enums";
import Button from "./button";

export default function Menu() {
  const [isDark, setIsDark] = useState(() => window.matchMedia("(prefers-color-scheme: dark)").matches);

  useEffect(() => {
    document.documentElement.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const menuLinks = [
    { name: "Home", color: eColors.ORANGE, action: "" },
    { name: "Blog", color: eColors.YELLOW, action: "" },
    { name: "About", color: eColors.PEACH, action: "" },
  ];

  /**
   * Render the logo with additional CSS classes
   * @param classname - Additional CSS classes for the logo
   * @returns The logo element
   */
  const logo = (classname: string) => {
    return (
      <p className={`jb logo ${classname}`}>
        a2n
        <span className={`f${eColors.YELLOW}`}>
          _
        </span>
      </p>
    )
  }

  return (
    <>
      <div className="menu hide-xs hide-s">
        <div className="menu-left">
          {logo("hide-xs hide-s")}
          {menuLinks.map((link) => (
            <Button className="jb" text={link.name} color={link.color} key={link.name}/>
          ))}
        </div>
        <div className="menu-right">
          <Button
            className={`jb f${isDark ? eColors.PEACH : eColors.DRED}`}
            text={isDark ? "☀ Light" : "☾ Dark"}
            color={isDark ? eColors.DRED : eColors.PEACH}
            onClick={() => setIsDark((current) => !current)}
          />
        </div>
      </div>
      <div>
        {logo("hide-m hide-l hide-xl")}
        <Button
          className={`hide-m hide-l hide-xl jb f${isDark ? eColors.PEACH : eColors.DRED}`}
          text={isDark ? "☀ Light" : "☾ Dark"}
          color={isDark ? eColors.DRED : eColors.PEACH}
          onClick={() => setIsDark((current) => !current)}
        />
      </div>
    </>
  )
}

