'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import App from "../../App";

export default function Page() {

  console.log("/top of /src/app/%5B%5B..route_name%5D%5D/page.tsx: Rendering Page component");

  const pathname = usePathname();
  const searchParams = useSearchParams();
  //
  const url = useMemo(() => {
    const search = searchParams?.toString();
    return search ? `${pathname}?${search}` : pathname;
  }, [pathname, searchParams]);

  return <App url={url} />;
}