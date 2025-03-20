module.exports = async () => {
	globalThis.URL = class extends URL {
		constructor(url, base) {
			super(url, base || 'http://localhost.com');
		}
	};
};
