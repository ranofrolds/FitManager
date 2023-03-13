import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Header from "./components/Header.tsx"
import Login from "./components/Login.tsx"
import './styles/style.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Login />
    </main>
  );
}
