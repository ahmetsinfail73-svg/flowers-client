import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	trailingSlash: true,
	/* config options here */
	experimental: {
		agentFeedback: true,
	},
	images: {
		remotePatterns: [new URL('https://s3.topstore.pro/demo-media/**')],
	},
	cacheComponents: true,
	partialPrefetching: true,
	turbopack: {
		rules: {
			'*.css': {
				loaders: ['@tailwindcss/turbopack'],
				as: '*.css',
			},
		},
	},
}

export default nextConfig
