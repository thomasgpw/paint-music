export type Theme = {
	background: string,
	base: {primary: string, secondary: string},
	accents: {primary: string, secondary: string}
}
const THEMES: {
	[key: string]: Theme
} = {
	light: {
		background: '#FFFFFF',
		base: {
			primary: '#FEF8ED',
			secondary: '#938C7E'
		},
		accents: {
			primary: '#F09B9B',
			secondary: '#EDF8ED'
		}
    },
    dark: {
		background: '#151515',
		base: {
			primary: '#333333',
			secondary: '#000000'
		},
		accents: {
			primary: '#270526',
			secondary: '#191D0C'
		}
    }
}
export default THEMES;