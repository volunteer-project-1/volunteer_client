import React, { ReactNode } from "react";

import styles from "@/components/common/Page.module.scss";

interface PageProps {
  children: ReactNode;
}

/**
 * 각 page의 root element.
 */
const Page = ({ children }: PageProps) => <div className={styles.page}>{children}</div>;

export default Page;
