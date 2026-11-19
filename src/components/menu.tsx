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

  return (
    <div className="menu">
      <p className="jb logo">a2n<span className={`f${eColors.YELLOW}`}>_</span></p>
      {menuLinks.map((link) => (
        <Button className="jb" text={link.name} color={link.color} key={link.name}/>
      ))}
      <Button
        className={`jb f${eColors.PEACH}`}
        text={isDark ? "☀ Light" : "☾ Dark"}
        color={eColors.DRED}
        onClick={() => setIsDark((current) => !current)}
      />
    </div>
  )
}

