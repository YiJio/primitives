export type GrayKeys = 'white' | 'black';
export type ColorKeys = 'gray' | 'red' | 'green' | 'cyan' | 'blue';

export type GrayAlphas = {
	5: string;
	10: string;
	15: string;
	20: string;
	25: string;
	30: string;
	35: string;
	40: string;
	45: string;
	50: string;
	55: string;
	60: string;
	65: string;
	70: string;
	75: string;
	80: string;
	85: string;
	90: string;
	95: string;
	100: string;
}

export type ColorShades = {
	0: string;
	1: string;
	2: string;
	3: string;
	4: string;
	5: string;
	6: string;
	7: string;
	8: string;
	9: string;
	10: string;
}

export type ColorPalette = {
	[key: string]: ColorShades;
}

export interface Theme {
	colors: {
		[key in ColorKeys]: ColorShades;
	};
	fontSizes: {
		hairline: number;
		thin: number;
		light: number;
		regular: number;
		medium: number;
		semibold: number;
		bold: number;
		extrabold: number;
		black: number;
	}
}

export const defaultTheme: Theme = {
	colors: {
		gray: {
			0: "#eeeeee",
			1: "#d5d5d5",
			2: "#bcbcbc",
			3: "#a4a4a4",
			4: "#8d8d8d",
			5: "#767676",
			6: "#606060",
			7: "#4b4b4b",
			8: "#373737",
			9: "#242424",
			10: "#111111",
		},
		red: {
			0: "#ffe7e1",
			1: "#ffcfc3",
			2: "#ffb5a6",
			3: "#ff9a88",
			4: "#ff7c69",
			5: "#ff5848",
			6: "#d04b3d",
			7: "#a43d31",
			8: "#793027",
			9: "#51231c",
			10: "#2c1612",
		},
		green: {
			0: "#e1f6e9",
			1: "#c2ecd3",
			2: "#a3e2be",
			3: "#81d8a9",
			4: "#5bce94",
			5: "#22C380",
			6: "#25a06a",
			7: "#247e54",
			8: "#205d3f",
			9: "#1a3f2c",
			10: "#132219",
		},
		cyan: {
			0: "#e4f8fb",
			1: "#c7f0f6",
			2: "#a9e9f2",
			3: "#88e1ed",
			4: "#5ed9e9",
			5: "#00d1e4",
			6: "#1aabba",
			7: "#218692",
			8: "#20636b",
			9: "#1c4247",
			10: "#142426",
		},
		blue: {
			0: "#e2edfb",
			1: "#c4dbf7",
			2: "#a5c9f2",
			3: "#83b8ee",
			4: "#5aa7e9",
			5: "#0097e4",
			6: "#187cba",
			7: "#1e6292",
			8: "#1e496b",
			9: "#1a3247",
			10: "#131c26",
		}
	},
	fontSizes: {
		hairline: 100,
		thin: 200,
		light: 300,
		regular: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900,
	}
}