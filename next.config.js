/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['www.themealdb.com'],
	},
	experimental: {
		forceSwcTransforms: true,
	},
};

module.exports = nextConfig;
