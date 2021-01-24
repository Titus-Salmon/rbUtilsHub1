import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'v0rld'
	}
});

export default app;