import React, { useEffect, useState, ReactNode } from "react";

import { Seeker } from "@/models/Seeker";
import { getSeekerList } from "@/api/API";
import Card from "@/components/card";
import "@/components/list/List.scoped.scss";

interface ListProps {
  children: ReactNode;
}

const List = ({ children }: ListProps) => {
  <div>{children}</div>;
};

const SeekerCardList = () => {
  const [currentSeekerList, setCurrentSeekerList] = useState<Array<Seeker>>([]);

  useEffect(() => {
    (async () => {
      setCurrentSeekerList(await getSeekerList());
    })();
  }, []);

  return (
    <div className="seekerCard">
      {currentSeekerList.map(seeker => (
        <Card.Seeker key={seeker.id} seeker={seeker} />
      ))}
    </div>
  );
};

export default Object.assign(List, {
  Seeker: SeekerCardList,
});
