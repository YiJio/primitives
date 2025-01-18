export interface Theme {
	colors: {
		gray: {
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
		};
		red: {
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
		};
		green: {
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
		};
		cyan: {
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
		};
		blue: {
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
		};
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
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
			9: "",
			10: "",
		},
		red: {
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
			9: "",
			10: "",
		},
		green: {
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
			9: "",
			10: "",
		},
		cyan: {
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
			9: "",
			10: "",
		},
		blue: {
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: "",
			6: "",
			7: "",
			8: "",
			9: "",
			10: "",
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