// @jsxImportSource @react/server-components
'use client';
import { Htag, Button, Ptag, Tag, Rating } from '../../components';
import React, { useState } from 'react';

export default function Home() {
  const [rating, setRating] = useState<number>(2)
  return (
    <>
      

      <Rating rating={rating} setRating={setRating} isEdited />
    </>
  );
}
