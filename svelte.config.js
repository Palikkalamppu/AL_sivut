import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false,
			strict: true
		}),
		paths: {
			// Korvaa tämä tulevan Github-repositoriosi nimellä!
			base: '/AL_sivut'
		}
	}
};

export default config;