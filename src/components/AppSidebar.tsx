
import { NavLink, useLocation } from "react-router-dom";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import { Grid2x2, Mail, MessageSquare, Vote, User, Settings, Lock, Users } from "lucide-react";

const AppSidebar = () => {
    const location = useLocation();
    const menuItems = [
        { to: "/app/dashboard", icon: Grid2x2, label: "Dashboard" },
        { to: "/app/send-feedback", icon: Mail, label: "Send Feedback" },
        { to: "/app/community-messages", icon: Users, label: "Community Messages" },
        { to: "/app/received-messages", icon: MessageSquare, label: "Received Messages" },
        { to: "/app/voting", icon: Vote, label: "Voting" },
    ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
            <Lock className="w-6 h-6 text-primary" />
            <h2 className="text-lg font-semibold">Ghost-Chat</h2>
        </div>
      </SidebarHeader>
      <SidebarContent className="flex-grow">
        <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
                 <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarMenuItem key={item.label}>
                            <SidebarMenuButton isActive={location.pathname === item.to} asChild>
                                <NavLink to={item.to}>
                                    <item.icon className="h-4 w-4" />
                                    <span>{item.label}</span>
                                </NavLink>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>
                  <User className="h-4 w-4" />
                  <span>Anonymous Punk</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
               <SidebarMenuItem>
                <SidebarMenuButton>
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
