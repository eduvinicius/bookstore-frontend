export interface Route {
  path: string;
  label: string;
  icon?: string;
}

export const ROUTES: Route[] = [
  {
    path: "/books",
    label: "Books",
    icon: "📚",
  },
  {
    path: "/bookcases",
    label: "Bookcases",
    icon: "🗄️",
  },
];
