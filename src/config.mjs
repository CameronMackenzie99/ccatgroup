export const SITE = {
	name: 'CCAT Group',

	origin: 'https://astrowind.vercel.app',
	basePathname: '/',
	trailingSlash: false,

	title: 'CCAT Group - Aviation Consultants and Advisory',
	description:
		'CCAT Group has over 45 years of  aviation safety management oversight experience in flight operations, both as a Regulator and operator at senior level.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
