import AddMoney from "@/pages/User/AddMoney";
import MyTransaction from "@/pages/User/MyTransaction";
import Withdraw from "@/pages/User/Withdraw";
import type { ISidebarItem } from "@/types";

export const userSidebarItems : ISidebarItem[] = [
    {
        title: "Wallet",
        items: [
            {
                title: "Add-Money",
                url: "/user/add-money",
                component: AddMoney,
            },
            {
                title: "Withdraw",
                url: "/user/withdraw",
                component: Withdraw,
            },
        ],
    },
    {
        title: "Transaction",
        items: [
            {
                title: "My Transaction",
                url: "/user/transaction",
                component: MyTransaction,
            },
        ],
    },
]