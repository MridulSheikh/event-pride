import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://event-pride-server.vercel.app/api/v1",
    // prepareHeaders: (headers, { getState }) => {
    //   const { auth } = getState() as { auth: TAuthState };
    //   const authHeader = "bearer" + " " + auth.token;
    //   headers.set("authorization", authHeader ? authHeader : "");
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});
