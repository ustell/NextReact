import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface HtagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLTitleElement>, HTMLTitleElement> {
  tag: 'h1' | "h2" | "h3",
  children: ReactNode,
}