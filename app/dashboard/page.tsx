"use client"
import Navbar from "../../components/Navbar";
import { useTheme } from "../../context/ThemeContext";

export default function Home() {
    const { theme, toggleTheme } = useTheme();
  return (
    <>
        <div className="w-[100%] h-screen">
        <Navbar/>
        </div>
    </>
  );
}
