import React, { ReactNode } from "react";

import "@/components/page/Page.scoped.scss";

interface PageProps {
  children: ReactNode;
}

/**
 * 각 page의 root element.
 */
const Page = ({ children }: PageProps) => <div className="page">{children}</div>;

export default Page;
