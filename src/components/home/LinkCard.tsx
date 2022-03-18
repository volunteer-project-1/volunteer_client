import React from "react";

import styles from "@/components/home/LinkCard.module.scss";

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
}

const LinkCard = ({ title, description, url }: LinkCardProps) => <div className={styles.linkCard}>{description}</div>;

export default LinkCard;
