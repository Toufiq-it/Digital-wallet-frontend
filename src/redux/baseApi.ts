import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
//   baseQuery: axiosBaseQuery(),
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: () => ({}),
});