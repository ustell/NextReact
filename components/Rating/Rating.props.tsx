import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface RatingProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isEdited?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
