import React from "react";
import classNames from "classnames";

import { USER_TYPE } from "@/constants/User";
import { UserType } from "@/types/User";
import "@/containers/auth/TabList.scoped.scss";

const tabMap: Record<UserType, string> = {
  seeker: "개인회원",
  company: "기업회원",
};

interface TabListProps {
  currentUserType: UserType;
  onChange: (type: UserType) => void;
}

const TabList = ({ currentUserType, onChange }: TabListProps) => (
  <div className="tabList">
    {USER_TYPE.map(userType => (
      <button
        className={classNames("tab", {
          isActive: userType === currentUserType,
        })}
        key={userType}
        type="button"
        onClick={() => {
          onChange(userType);
        }}
      >
        {tabMap[userType]}
      </button>
    ))}
  </div>
);

export default TabList;
