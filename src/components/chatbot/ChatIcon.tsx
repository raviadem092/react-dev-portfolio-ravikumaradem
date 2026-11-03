import React from "react";

type IconName = "send" | "stop" | "copy" | "check" | "down" | "minimize" | "maximize" | "restore" | "close" | "codeCopy" | "spark";

const paths: Record<IconName, React.ReactNode> = {
  send: <path d="m3 3 18 9-18 9 4-9-4-9Zm4 9h9" />,
  stop: <rect x="6" y="6" width="12" height="12" rx="1" />,
  copy: <><rect x="9" y="9" width="10" height="10" rx="2" /><path d="M15 9V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  down: <path d="m6 9 6 6 6-6M12 15V3" />,
  minimize: <path d="M5 12h14" />,
  maximize: <rect x="5" y="5" width="14" height="14" rx="1" />,
  restore: <><rect x="8" y="5" width="11" height="11" rx="1" /><path d="M5 8v11h11" /></>,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  codeCopy: <><path d="m8 8-4 4 4 4M16 8l4 4-4 4" /><path d="m14 5-4 14" /></>,
  spark: <path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />,
};

export default function ChatIcon({ name }: { name: IconName }) {
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>;
}
