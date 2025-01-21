// packages
import React, { createContext, useContext, useReducer } from 'react';
import { ColorKeys, Theme, defaultTheme } from './theme';

interface ThemeState {
	theme: Theme;
}

interface ThemeAction {
	type: 'UPDATE_THEME';
	payload: Partial<Theme>;
}

type ThemeContextType = {
	theme: Theme;
	updateTheme: (theme: Theme) => void;
	isValidColorSchemeKey: (key: string, theme: Theme) => boolean;
}

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
	switch(action.type) {
		case 'UPDATE_THEME':
			return { theme: { ...state.theme, ...action.payload } };
		default:
			return state;
	}
}

export const ThemeContext = createContext<ThemeContextType>(null);

export const ThemeProvider: React.FC<{ children: React.ReactNode, initialTheme?: Partial<Theme> }> = ({ children, initialTheme }) => {
	const [state, dispatch] = useReducer(themeReducer, { theme: { ...defaultTheme, ...initialTheme } });

	const updateTheme = (newTheme: Partial<Theme>) => {
		dispatch({ type: 'UPDATE_THEME', payload: newTheme });
	};

	const isValidColorSchemeKey = (key: string, theme: Theme): key is ColorKeys => key in theme.colors;

	return (
		<ThemeContext.Provider value={{ theme: state.theme, updateTheme, isValidColorSchemeKey }}>
			{children}
		</ThemeContext.Provider>
	);
}

export const useTheme = () => {
	const context = useContext(ThemeContext);
	if(!context) {
		throw new Error('`useTheme` must be used within a `ThemeProvider`!');
	}
	return context;
}