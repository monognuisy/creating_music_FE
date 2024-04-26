import React, { useState } from "react";
import Menu from "./menu";
import { ChoiceType } from "../types";

interface Props {
  PopupTitle: string;
  list: ChoiceType[];
  selected: string;
  onChangeSelected: (label: string) => void;
  getState: boolean;
  onChangeSelectedState: (st: boolean) => void;
}
export const SelectSet: React.FC<Props> = ({
  PopupTitle,
  list,
  selected,
  onChangeSelected,
  getState,
  onChangeSelectedState,
}) => {
  const notModal = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onChangeSelectedState(false);
    }
  };
  if (getState === true) {
    return (
      <>
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={notModal}
        >
          <div className="bg-gray max-w-max flex-col  items-center  rounded-2xl bg-u-gray-400 p-8">
            {/* 여기에 세부 컴포 넌트 만들기 */}
            <Menu
              title={PopupTitle}
              list={list}
              selected={selected}
              onChangeSelected={onChangeSelected}
            />
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
