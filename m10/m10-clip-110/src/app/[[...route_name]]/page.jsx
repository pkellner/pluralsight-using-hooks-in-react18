"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useMemo } from "react";
import App from "../../App";

export default function Page() {
  console.log("/page.jsx");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  //
  const url = useMemo(() => {
    const search = searchParams?.toString();
    return search ? `${pathname}?${search}` : pathname;
  }, [pathname, searchParams]);

  return <App url={url} />;
}
