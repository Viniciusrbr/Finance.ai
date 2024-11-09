"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="relative z-50 flex items-center justify-between border-b border-solid bg-background px-8 py-4">
      {/* LOGO E LINKS DE NAVEGAÇÃO */}
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" width={173} height={39} alt="Finance AI" />

        {/* Menu de navegação - escondido em telas pequenas */}
        <div className="hidden gap-10 md:flex">
          <Link
            href="/"
            className={`${
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={`${
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }`}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={`${
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }`}
          >
            Assinatura
          </Link>
        </div>
      </div>

      {/* BOTÃO DO USUÁRIO E MENU DE HAMBÚRGUER */}
      <div className="flex items-center gap-4">
        {/* Botão do menu de hambúrguer - aparece em telas pequenas */}
        <button
          onClick={toggleMenu}
          className="ml-auto text-2xl focus:outline-none md:hidden"
          aria-label="Menu"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        {/* BOTÃO DO USUÁRIO - escondido em telas pequenas */}
        <div className="hidden md:block">
          <UserButton showName />
        </div>
      </div>

      {/* Menu móvel com animação */}
      <div
        className={`fixed left-0 right-0 top-[73px] z-50 w-full transform bg-background p-4 shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        } `}
      >
        <div className="flex flex-col items-start space-y-4">
          <Link
            href="/"
            className={`w-full transform py-2 transition-transform duration-200 hover:scale-105 ${
              pathname === "/"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }`}
          >
            Dashboard
          </Link>
          <Link
            href="/transactions"
            className={`w-full transform py-2 transition-transform duration-200 hover:scale-105 ${
              pathname === "/transactions"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }`}
          >
            Transações
          </Link>
          <Link
            href="/subscription"
            className={`w-full transform py-2 transition-transform duration-200 hover:scale-105 ${
              pathname === "/subscription"
                ? "font-bold text-primary"
                : "text-muted-foreground"
            }`}
          >
            Assinatura
          </Link>
          <div className="mt-4">
            <UserButton showName />
          </div>
        </div>
      </div>

      {/* Overlay para quando o menu estiver aberto */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          style={{ top: "73px" }}
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
}
