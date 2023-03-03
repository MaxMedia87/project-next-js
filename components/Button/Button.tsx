import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ view, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: view === 'primary',
				[styles.ghost]: view === 'ghost',
			})}
			{...props}
		>
			{children}
		</button>
	);
};
