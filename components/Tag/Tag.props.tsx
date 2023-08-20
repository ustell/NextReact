import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface TagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "s" | "m";
  children: ReactNode;
  color?: "ghost" | "red" | "green" | "primary" | "grey";
  href?: string
}