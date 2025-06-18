
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";

const MainLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
            <header className="flex h-14 items-center gap-4 border-b bg-background px-6 shrink-0">
                <SidebarTrigger />
                <h1 className="text-xl font-semibold">Ghostip Network</h1>
            </header>
            <div className="p-6 overflow-auto">
                <Outlet />
            </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
export default MainLayout;
