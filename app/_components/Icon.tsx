import type { HTMLAttributes } from "react";
import ClientIcon from "./icon/ClientIcon";

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  name: IconName;
}

const BASE_URL = process.env.NEXT_PUBLIC_ICON;

const iconMatcher = {
  airplay: `${BASE_URL}/airplay.svg`,
  download: `${BASE_URL}/download.svg`,
  edit: `${BASE_URL}/edit-2.svg`,
  equalizer2: `${BASE_URL}/equalizer-2.svg`,
  equalizer: `${BASE_URL}/equalizer.svg`,
  eyeoff: `${BASE_URL}/eye-off.svg`,
  eyeon: `${BASE_URL}/eye.svg`,
  heart: `${BASE_URL}/heart.svg`,
  music: `${BASE_URL}/music.svg`,
  pause: `${BASE_URL}/pause.svg`,
  play: `${BASE_URL}/play.svg`,
  share: `${BASE_URL}/share-2.svg`,
  trash: `${BASE_URL}/trash-2.svg`,
  search: `${BASE_URL}/search.svg`,
  avatar: `${BASE_URL}/avatar.svg`,
  delete: `${BASE_URL}/delete.svg`,
};

export type IconName = keyof typeof iconMatcher;

export default function Icon({ name, ...props }: IconProps) {
  const iconUrl = iconMatcher[name];

  return <ClientIcon iconUrl={iconUrl} {...props} />;
}
