"use client";

import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import { PropsWithChildren } from "react";

interface ModalProps {
  title: string;
}

function ModalProps({ title, children }: PropsWithChildren<ModalProps>) {
  const dispatch = useAppDispatch();

  const handleClickBackdrop = () => {
    const action = setModal(null);
    dispatch(action);
  };

  return <div>ModalProps</div>;
}

export default ModalProps;
