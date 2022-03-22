import React, { ReactNode } from "react";

import styles from "@/components/page/Page.module.scss";

interface PageProps {
  children: ReactNode;
}

/**
 * 각 page의 root element.
 */
const Page = ({ children }: PageProps) => <div className={styles.page}>{children}</div>;

export default Page;
