import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({ view, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: view === 'primary',
				[styles.ghost]: view === 'ghost',
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' &&
				<span className={cn(styles.arrow, {
					[styles.down]: arrow === 'down'
				})}>
					<ArrowIcon />
				</span>
			}
		</button>
	);
};
