import { ReactNode } from "react";
import Banner from "./_components/Banner";
import { MUSIC_LIST_PAGE } from "@/app/_constants/routes";
import Frame from "@/app/_components/Frame";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return <>{children}</>;
}
