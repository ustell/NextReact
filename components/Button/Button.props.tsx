import { ReactNode , ButtonHTMLAttributes, DetailedHTMLProps} from "react"

export interface BtnProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  view?: 'primary' | 'ghost';
  children: ReactNode;
  arrow?: "right" | "down" | "none";
}
