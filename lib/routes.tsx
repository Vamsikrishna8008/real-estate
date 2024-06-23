import {
  HomeIcon,
  LucideProps,
  Mails,
  MessageCircle,
  Projector,
} from "lucide-react";

interface Route {
  moduleId?: number;
  path?: string;
  icon?: (props?: LucideProps) => JSX.Element;
  name: string;
  subRoutes?: Route[];
}

const routes: Route[] = [
  {
    path: "/admin",
    name: "Dashboard",
    icon: (props?: LucideProps) => <HomeIcon {...props} />,
  },

  {
    name: "Property",
    path: "/admin/properties",
    icon: (props?: LucideProps) => <Mails {...props} />,
  },
  {
    name: "Enquires",
    path: "/admin/contacts",
    icon: (props?: LucideProps) => <Projector {...props} />,
  },
  {
    name: "Users",
    path: "/admin/users",
    icon: (props?: LucideProps) => <Projector {...props} />,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: (props?: LucideProps) => <MessageCircle {...props} />,
  },
];

export const selectableModules = routes.flatMap((route) => {
  if (!route.subRoutes) {
    return {
      label: route.name,
      value: `${route.moduleId?.toString()}-${route.name}`,
      id: route.moduleId,
    };
  } else {
    const subRouteObjects = route.subRoutes.map((subRoute) => ({
      label: subRoute.name,
      value: `${subRoute.moduleId?.toString()}-${subRoute.name}`,
      id: subRoute.moduleId,
    }));
    return subRouteObjects;
  }
});

export default routes;
