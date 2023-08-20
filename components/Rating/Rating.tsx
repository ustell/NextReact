'use client';

import { useState, useEffect } from 'react';

import { RatingProps } from './Rating.props';

import styles from './Rating.module.scss';
import cn from 'classnames';

export const Rating = ({
  isEdited = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>)); // обычный useState

  useEffect(() => {
    // при изменение состояния rating и перерендере вызывается этот код
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    // констркутор его суть в том что он хранит в себе измененый массив и и передает в state измененый массив то есть в setRatingArray
    const updateArray = ratingArray.map((r: JSX.Element, el: number) => {
      return (
        <svg
          onMouseEnter={() => changeDispay(el + 1)} // при наведение на svg у меня срабатывает функция changedisplay el+1 нужен для того что элементы массива начинаются то с 0 если выбрали элемент 3 то js увидит это как элемент 2 по этому +1
          onMouseLeave={() => changeDispay(rating)} // при выходе курсора из svg значение рейтинга равняется переданому значению из родителя то есть 3 условно
          onClick={() => renderRating(el + 1)} // при клике срабатывает функция которая выбирает активный элемент так же как и с changeDispay
          className={cn(styles.star, {
            [styles.filled]: el < currentRating,
          })}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='#E2E2E2'
          xmlns='http://www.w3.org/2000/svg'>
          <path d='M19.9477 7.55686C19.816 7.13427 19.4568 6.83508 19.0335 6.79511L13.2601 6.24816L10.9784 0.673859C10.81 0.264321 10.4267 0 10 0C9.57337 0 9.18991 0.264321 9.02252 0.673859L6.74084 6.24816L0.966519 6.79511C0.543233 6.83587 0.184799 7.13507 0.0523506 7.55686C-0.0793348 7.97946 0.0422796 8.44298 0.362414 8.73596L4.72665 12.7293L3.43985 18.6434C3.34571 19.0782 3.50745 19.5279 3.85322 19.7887C4.03908 19.9296 4.25743 20 4.47655 20C4.66485 20 4.8533 19.9478 5.0216 19.8427L10 16.7364L14.9775 19.8427C15.3427 20.0704 15.8018 20.0495 16.1468 19.7887C16.4926 19.5279 16.6543 19.0782 16.5602 18.6434L15.2734 12.7293L19.6376 8.73596C19.9576 8.44298 20.0794 7.98041 19.9477 7.55686Z' />
        </svg>
      );
    });
    setRatingArray(updateArray);
  };

  const changeDispay = (i: number) => { // i тут это элемент можео использовать так же хоть что за место i суть такая
    if (!isEdited ) { // если фолс то выходим из функции
      return;
    }
    constructRating(i); // теперь вызываем функцию с коструктором и в него переводим элемент который выбран то есть i
  };
  const renderRating = (i: number) => { // тут тоже самое 
    if (!isEdited || !setRating) {
      return;
    }
 
    setRating(i); // при вызове функции будет срабатывать это setRating это пропс который мы передали и его значение будет переходить в активыный элемент
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
