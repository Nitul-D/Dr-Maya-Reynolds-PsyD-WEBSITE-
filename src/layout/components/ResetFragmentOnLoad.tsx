"use client";

import { useEffect } from "react";

export function ResetFragmentOnLoad() {
  useEffect(() => {
    if (!window.location.hash) return;

    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(window.history.state, "", cleanUrl);
    window.scrollTo(0, 0);
  }, []);

  return null;
}
