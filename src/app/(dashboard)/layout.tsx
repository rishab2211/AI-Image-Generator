import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <div className="w-fit items-center gap-2 my-1 ">
          <SidebarTrigger className="ml-1" />
        </div>
      <main className="flex flex-1 flex-col gap-4 " >{children}</main>
      </SidebarInset>
    </SidebarProvider>
  );
}
