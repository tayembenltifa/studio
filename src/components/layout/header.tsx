"use client";

import Link from "next/link";
import {
  BookMarked,
  LayoutGrid,
  LogIn,
  LogOut,
  Mail,
  PlusCircle,
  User as UserIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { currentUserId, users } from "@/lib/placeholder-data";

const navLinks = [
  { href: "/sell", label: "Vendre un livre", icon: PlusCircle },
  { href: "/messages", label: "Messages", icon: Mail },
];

const UserNav = () => {
  // In a real app, you'd get the user from an auth context
  const isLoggedIn = true; // Mock login state
  const user = users.find((u) => u.id === currentUserId);

  if (!isLoggedIn || !user) {
    return (
      <Button asChild>
        <Link href="/auth">
          <LogIn className="mr-2 h-4 w-4" />
          Se connecter
        </Link>
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-10 w-10 rounded-full">
          <Avatar className="h-10 w-10">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              Membre
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/dashboard">
            <LayoutGrid className="mr-2 h-4 w-4" />
            <span>Mes annonces</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="#">
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Mon profil</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Se déconnecter</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const MobileNav = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon">
        <Menu className="h-5 w-5" />
        <span className="sr-only">Ouvrir le menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <div className="flex flex-col space-y-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <BookMarked className="h-6 w-6 text-primary" />
          <span className="font-headline">Le Livre Local</span>
        </Link>
        <nav className="flex flex-col space-y-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground"
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
    {navLinks.map(({ href, label }) => (
      <Link
        key={href}
        href={href}
        className="transition-colors hover:text-primary"
      >
        {label}
      </Link>
    ))}
  </nav>
);

export default function Header() {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        {isMobile && <MobileNav />}
        <div className="flex items-center flex-1 md:flex-initial">
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-lg md:ml-0 ml-4"
          >
            <BookMarked className="h-6 w-6 text-primary" />
            <span className="font-headline">Le Livre Local</span>
          </Link>
        </div>
        <div className="hidden md:flex flex-1 justify-center">
          <DesktopNav />
        </div>
        <div className="flex items-center justify-end md:flex-initial">
          <UserNav />
        </div>
      </div>
    </header>
  );
}
