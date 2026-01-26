import type { IRoute } from "../types/route.types";

export const ROUTES: IRoute[] = [
  {
    id: "home",
    path: "/",
    label: "Home",
    icon: "🏠",
  },
  {
    id: "books",
    path: "/books",
    label: "Books",
    icon: "📚",
  },
  {
    id: "bookcases",
    path: "/bookcases",
    label: "Bookcases",
    icon: "🗄️",
  },
];
