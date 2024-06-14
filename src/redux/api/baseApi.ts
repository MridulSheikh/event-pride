import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
    // prepareHeaders: (headers, { getState }) => {
    //   const { auth } = getState() as { auth: TAuthState };
    //   const authHeader = "bearer" + " " + auth.token;
    //   headers.set("authorization", authHeader ? authHeader : "");
    //   return headers;
    // },
  }),
  endpoints: () => ({}),
});
