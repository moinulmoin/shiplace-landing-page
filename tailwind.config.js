module.exports = {
	mode: 'jit',
	content: ['./*.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		container: {
			center: true,
		},
		extend: {
			boxShadow: {
				large: '20px 10px 100px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('@tailwindcss/forms')],
};
