"use client";
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import axiosInterceptor from "interceptors/axios.interceptor";
// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  axiosInterceptor();
  return (
    <html lang="en">
      <body className="bg-slate-200">
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
