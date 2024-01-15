export interface SubMenuItemProps {
  subItem: {
    id: string;
    label: string;
    icon: JSX.Element;
    link: string;
  };
  onMenuClick: (item: any, index: number) => void;
  isActive: boolean;
  index: number;
}

export interface MenuItemProps {
  item: {
    id?: string;
    label: string;
    icon: JSX.Element;
    link?: string;
    subItems?: {
      id: string;
      label: string;
      icon: JSX.Element;
      link: string;
    }[];
  };
  index: number;
  openMenu: number | null;
  isActive: boolean;
  activeMenu: string | null;
  onMenuClick: (item: any, index: number) => void;
}

export interface SubMenuItem {
  id: string;
  label: string;
  icon: JSX.Element;
  link: string;
}

export interface MenuItem {
  id?: string;
  label: string;
  icon: JSX.Element;
  link?: string;
  subItems?: SubMenuItem[];
}
