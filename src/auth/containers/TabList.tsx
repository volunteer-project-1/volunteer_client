import React from "react";
import classNames from "classnames";

import { ACCOUNT_TYPE } from "@/common/constants/Auth";
import { AccountType } from "@/common/types/Auth";
import "@/auth/containers/TabList.scoped.scss";

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
