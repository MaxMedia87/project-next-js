import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({ isEdiatable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updateArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEdiatable,
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => click(i + 1)}
					tabIndex={isEdiatable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => isEdiatable && handleSpace(i + 1, e)}
				/>
			);
		});
		setRatingArray(updateArray);
	};

	const changeDisplay = (i: number) => {
		if (false === isEdiatable) {
			return;
		}
		constructRating(i);
	};

	const click = (i: number) => {
		if (false === isEdiatable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
		if (e.code != 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	return (
		<div {...props}>
			{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
		</div>
	);
};
