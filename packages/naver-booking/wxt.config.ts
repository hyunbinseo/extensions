import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
	srcDir: 'src',
	extensionApi: 'chrome',
	modules: [
		'@wxt-dev/auto-icons', //
		'@wxt-dev/module-svelte',
	],
});
