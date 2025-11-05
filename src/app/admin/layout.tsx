import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { BookMarked, LogOut, User } from "lucide-react";
import { AdminNav } from "./components/nav";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="sidebar" className="border-r">
        <SidebarHeader>
          <Link
            href="/admin"
            className="flex items-center gap-2 p-2 group-data-[collapsible=icon]:justify-center"
          >
            <BookMarked className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline text-lg group-data-[collapsible=icon]:hidden">
              Admin
            </span>
          </Link>
        </SidebarHeader>
        <SidebarContent className="p-2">
          <AdminNav />
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 group-data-[collapsible=icon]:justify-center">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/150?u=admin" alt="Admin" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <div className="flex flex-col group-data-[collapsible=icon]:hidden">
              <span className="text-sm font-semibold">Admin User</span>
              <span className="text-xs text-muted-foreground">
                Administrator
              </span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto group-data-[collapsible=icon]:hidden"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}
