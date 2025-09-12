import Agents from "@/pages/Admin/Agents";
// import Analytics from "@/pages/Admin/Analytics";
import Users from "@/pages/Admin/Users";
import type { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/Analytics"));

export const adminSidebarItems : ISidebarItem[] = [
    {
        title: "Dashboard",
        items: [
            {
                title: "Analytics",
                url: "/admin/analytics",
                component: Analytics,
            },
        ],
    },
    {
        title: "Agent Management",
        items: [
            {
                title: "All Agents",
                url: "/admin/agents",
                component: Agents,
            },
        ],
    },
    {
        title: "User Management",
        items: [
            {
                title: "All Users",
                url: "/admin/users",
                component: Users,
            },
        ],
    },
]