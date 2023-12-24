"use client";
import { Menu } from "antd";
import { useRouter } from "next/navigation";

export default function HeaderMenu() {
  const router = useRouter();
  const items = [
    { key: "/", label: "Início", href: "/inicio" },
    { key: "tupperware", label: "Tupperware", href: "/tupperware" },
    { key: "boticario", label: "O Boticário", href: "/boticario" },
    { key: "demillus", label: "Demillus", href: "/demillus" },
    { key: "adm", label: "Área admnistrativa", href: "/adm" },
  ];
  return (
    <Menu
      mode="horizontal"
      items={items}
      style={{
        flex: 1,
        minWidth: 0,
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
      }}
      onClick={(e) => router.push(e.key)}
    />
  );
}
