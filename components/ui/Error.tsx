import { useEffect, useState } from "react";

export default function Error({ err }: { err: string }) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (!err) return;

    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [err]);

  if (!show) return null;

  return (
    <div className="absolute z-100 top-10 left-1/2 -translate-x-1/2 border border-red-600 px-5 py-3 rounded-xl animate-pulse max-w-xs w-full flex justify-center">
      <h4 className="text-red-600 text-sm text-center">{err}</h4>
    </div>
  );
}