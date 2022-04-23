import React, { useEffect, useState, ReactNode } from "react";

import { Seeker } from "@/types/Dummy";
import DummyAPI from "@/api/DummyAPI";
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
      setCurrentSeekerList(await DummyAPI.getSeekerList());
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
