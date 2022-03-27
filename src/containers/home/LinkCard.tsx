import React from "react";

import "@/containers/home/LinkCard.scoped.scss";

interface LinkCardProps {
  title: string;
  description: string;
  url: string;
}

const LinkCard = ({ title, description, url }: LinkCardProps) => <div className="linkCard">{description}</div>;

export default LinkCard;