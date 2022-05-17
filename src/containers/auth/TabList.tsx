import React from "react";
import classNames from "classnames";

import { ACCOUNT_TYPE } from "@/constants/Auth";
import { AccountType } from "@/types/Auth";
import "@/containers/auth/TabList.scoped.scss";

const tabMap: Record<AccountType, string> = {
  seeker: "개인회원",
  company: "기업회원",
};

interface TabListProps {
  currentAccountType: AccountType;
  onChange: (type: AccountType) => void;
}

const TabList = ({ currentAccountType, onChange }: TabListProps) => (
  <div className="tabList">
    {ACCOUNT_TYPE.map(type => (
      <button
        className={classNames("tab", {
          isActive: type === currentAccountType,
        })}
        key={type}
        type="button"
        onClick={() => {
          onChange(type);
        }}
      >
        {tabMap[type]}
      </button>
    ))}
  </div>
);

export default TabList;
