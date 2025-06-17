"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

type ErrorBoundaryProps = {
  error: Error & { digest: string | undefined };
  reset?: () => void | undefined;
};

export default function Error({ error, reset }: ErrorBoundaryProps | any) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset?.()}>Try again</button>
    </div>
  );
}
