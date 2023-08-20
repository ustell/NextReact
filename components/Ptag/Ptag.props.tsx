import { ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface PtagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
  size?: "fs" | "fm" | "fl";
  children: ReactNode
}