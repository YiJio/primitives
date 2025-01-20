import * as React from 'react';
import { Theme, defaultTheme } from './theme';

type ThemeContextType = {
	theme: Theme;
	updateTheme: (theme: Theme) => void;
}

export const ThemeContext = React.createContext<ThemeContextType>(null);

interface ThemeProviderProps {
	children: React.ReactNode;
}

export const Ellipse = ({ children }: ThemeProviderProps) => {

	return (
		<div />
	);
}


const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = React.useState<Theme>(defaultTheme);

	const updateTheme = (newTheme: Theme) => {
		setTheme(newTheme);
	};

	return (
		<div></div>
	);
}