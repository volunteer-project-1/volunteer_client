import React, { ReactNode } from "react";

import Header from "@/containers/layout/Header";
import Footer from "@/containers/layout/Footer";
import "@/containers/layout/Layout.scoped.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="layout">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
