"use client";

import { fetchIcon } from "@/app/_api/fetchIcon";
import { useQuery } from "@tanstack/react-query";
import type { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
  iconUrl: string;
}

export default function ClientIcon({ iconUrl, ...props }: Props) {
  const { data: icon, error } = useQuery([`icon-${iconUrl}`], () =>
    fetchIcon(iconUrl),
  );

  if (error) return;

  return <span dangerouslySetInnerHTML={{ __html: icon ?? "" }} {...props} />;
}
