import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addMoney: builder.mutation({
      query: (addMoney) => ({
        url: "/user/add-money",
        method: "POST",
        data: addMoney,
      }),
    }),
    withdraw: builder.mutation({
      query: (withdraw) => ({
        url: "/user/withdraw",
        method: "POST",
        data: withdraw,
      }),
    }),
    getMyTransaction: builder.query({
      query: (slug) => ({
        url: `/transaction/${slug}`,
        method: "GET",
      }),
      transformResponse: (response) => response.data
    }),
  }),
});

export const { 
    useAddMoneyMutation,
    useWithdrawMutation,
 } = userApi;