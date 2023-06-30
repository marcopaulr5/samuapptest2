import React from "react";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Navbar from "./Navbar";

const navigation = [
  { name: "Inicio", icon: HomeIcon, href: "/", current: true },
  { name: "Personal", icon: UsersIcon, href: "#", current: false },
  { name: "Registros", icon: FolderIcon, href: "#",  current: false },
  { name: "Calendario", icon: CalendarIcon, href: "#", current: false },
  { name: "Documentos", icon: InboxIcon, href: "#",  current: false },
  { name: "Reportes", icon: ChartBarIcon, href: "/reporte", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SidebarLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="fixed  flex min-h-0 h-screen flex-1 flex-col bg-indigo-700">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300"
              alt="Minsa"
            />
          </div>
          <nav className="mt-5 flex-1 space-y-1 px-2" aria-label="Sidebar">
           
            
            {navigation.map((item) => (
              <a  
                key={item.name}
                href={
                  item.name === "Registros" ? "/registro_paciente" :
                  item.name === "Inicio" ? "/" :
                  item.name === "Calendario" ? "/calendario" :
                  item.name === "Documentos" ? "/documentos" :
                  item.name === "Personal" ? "/personal" :
                  item.name === "Reportes" ? "/reportes" :
                  "/Error"
                }
                className={classNames(
                  item.current
                    ? "bg-indigo-800 text-white"
                    : "text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-75",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className="mr-3 h-6 w-6 flex-shrink-0 text-indigo-300"
                  aria-hidden="true"
                />
                <span className="flex-1">{item.name}</span>
                {item.count ? (
                  <span
                    className={classNames(
                      item.current ? "bg-indigo-600" : "bg-indigo-800",
                      "ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                    )}
                  >
                    {item.count}
                  </span>
                ) : null}
              </a>
            ))}

          </nav>
        </div>
        <div className="flex flex-shrink-0 border-t border-indigo-800 p-4">
          <a href="#" className="group block w-full flex-shrink-0">
            <div className="flex items-center">
              <div>
                <img
                  className="inline-block h-9 w-9 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white">Marco Quispe</p>
                <p className="text-xs font-medium text-indigo-200 group-hover:text-white">
                  Ver Perfil
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}

export default SidebarLayout;
