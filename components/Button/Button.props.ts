import { ReactNode } from 'react';

export interface ButtonProps {
	view: 'primary' | 'ghost';
	children: ReactNode;
}
