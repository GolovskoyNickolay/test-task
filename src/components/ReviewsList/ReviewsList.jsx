import scss from "./ReviewsList.module.scss";

const ReviewsList = ({ reviews }) => {
  const renderStars = (rating) => {
    const maxStars = 5;
    const stars = Array.from({ length: maxStars }, (_, index) => index + 1);

    return (
      <div className={scss.starsWrapper}>
        {stars.map((star) => (
          <svg
            key={star}
            className={scss.star}
            width="16"
            height="16"
            style={{ fill: star <= rating ? "#FFD700" : "#CCC" }}
          >
            <use href="/icons.svg#star"></use>
          </svg>
        ))}
      </div>
    );
  };

  return (
    <ul className={scss.reviewsList}>
      {reviews.map((review, index) => (
        <li key={index} className={scss.reviewItem}>
          <div className={scss.nameRatingWrapper}>
            <div className={scss.reviewerLogo}>
              <span>{review.reviewer_name.charAt(0)}</span>
            </div>
            <div className={scss.reviewerWrapper}>
              <p>{review.reviewer_name}</p>
              {renderStars(review.reviewer_rating)}
            </div>
          </div>
          <p>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsList;
