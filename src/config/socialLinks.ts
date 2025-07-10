// Social Links
// ------------
// Description: The social links data for the website.

export interface SocialLink {
	name: string
	link: string
	icon: string
}

export const socialLinks: SocialLink[] = [
	{
		name: 'Twitter',
		icon: 'fa-brands fa-x-twitter',
		link: 'https://www.twitter.com/canaryonco'
	},
	{
		name: 'Facebook',
		icon: 'fab fa-facebook-square',
		link: 'https://www.facebook.com/canaryonco'
	},
	{
		name: 'YouTube',
		icon: 'fa-brands fa-youtube',
		link: 'https://www.youtube.com/@canaryonco'
	},
	{
		name: 'LinkedIn',
		icon: 'fa-brands fa-linkedin-in',
		link: 'https://www.linkedin.com/company/canaryonco'
	},
	{
		name: 'Instagram',
		icon: 'fa-brands fa-instagram',
		link: 'https://www.instagram.com/canaryonco'
	},
	// {
	// 	name: 'facebook',
	// 	link: '/',
	// 	icon: 'fb-icon'
	// },
	// {
	// 	name: 'twitter',
	// 	link: '/',
	// 	icon: 'twitter-icon'
	// },
	// {
	// 	name: 'discord',
	// 	link: '/',
	// 	icon: 'discord-icon'
	// }
]
