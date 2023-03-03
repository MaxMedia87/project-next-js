import { ButtonProps } from './Button.props';
import styles from './Button.module.css';
import cn from 'classnames';

export const Button = ({ view, children }: ButtonProps): JSX.Element => {
	return (
		<button className={cn(styles.button, {
			[styles.primary]: view === 'primary',
			[styles.ghost]: view === 'ghost',
		})}>
			{children}
		</button>
	);
};
