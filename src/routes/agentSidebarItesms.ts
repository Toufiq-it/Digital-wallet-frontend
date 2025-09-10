import CashIn from "@/pages/Agent/CashIn";
import CashOut from "@/pages/Agent/CashOut";
import type { ISidebarItem } from "@/types";


export const agentSidebarItems : ISidebarItem[] = [
    {
        title: "Wallet",
        items: [
            {
                title: "Cash-In",
                url: "/agent/cash-in",
                component: CashIn,
            },
            {
                title: "Cash-Out",
                url: "/agent/cash-out",
                component: CashOut,
            },
        ],
    },
]