import { Paths } from "@/types/types";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const useCurrentPath = () => {
  const [currentPath, setCurrentPath] = useState<Paths>(Paths.home);
  const path = usePathname();

  const mainPath = useMemo(() => {
    return path.split("/")[1];
  }, [path]);

  useEffect(() => {
    setCurrentPath(() => {
      switch (mainPath) {
        case Paths.home:
          return Paths.home;
        case Paths.my_books:
          return Paths.my_books;
        case Paths.book:
          return Paths.book;
        default:
          return Paths.home;
      }
    });
  }, [mainPath]);

  return { currentPath };
};

export default useCurrentPath;
