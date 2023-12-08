import React from "react";
import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

export const StarRaiting = ({ raiting }: { raiting: number }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    // Проверяем, если текущий индекс меньше целой части рейтинга
    if (i < Math.floor(raiting)) {
      stars.push(<FaStar key={i} />);
    } else {
      // Проверяем, если десятичная часть больше или равна 0.5
      if (i - raiting < 0.5) {
        stars.push(<FaStarHalfStroke key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
  }

  return <>{stars}</>;
};
