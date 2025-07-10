// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Canary Onco',
		aboutText:
			'Canary Oncoceutics leverages cutting-edge genomics technology to provide highly accurate and comprehensive genomic profiling tests, including CGP, focused panels, and ctDNA tests.',
		logo: {
			src: '/logo.png',
			alt: 'Canary Onco',
			text: 'Precision Diagnostics. Healthier Outcomes'
		}
	},
	footerColumns: [
		{
			category: 'Products & Services',
			subCategories: [
				{
					subCategory: 'Canary Acuity',
					subCategoryLink: '/canary-acuity'
				},
				{
					subCategory: 'Canary Pulse',
					subCategoryLink: '/canary-pulse'
				},
				{
					subCategory: 'Canary Focus',
					subCategoryLink: '/canary-focus'
				},
				{
					subCategory: 'Provider Services',
					subCategoryLink: '/providers'
				}
			]
		},
		{
			category: 'For Patients',
			subCategories: [
				{
					subCategory: 'Patients Overview',
					subCategoryLink: '/patients'
				},
				{
					subCategory: 'Our Testing Process',
					subCategoryLink: '/patients#our-process'
				},
				{
					subCategory: 'Schedule a genetic information session',
					subCategoryLink: '/patients#contact-us'
				},
				{
					subCategory: 'Patient Stories',
					subCategoryLink: '/patients#patient-info'
				}
			]
		},
		{
			category: 'Resources',
			subCategories: [
				{
					subCategory: 'Publications',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Content',
					subCategoryLink: '/faq'
				},
				{
					subCategory: 'Events',
					subCategoryLink: '/pricing'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				},
				{
					subCategory: 'News',
					subCategoryLink: '/newsroom'
				},
				{
					subCategory: 'Accreditions',
					subCategoryLink: '/certifications'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'Who we are',
					subCategoryLink: '/who-we-are'
				},
				{
					subCategory: 'Our Team',
					subCategoryLink: '/our-team'
				},
				{
					subCategory: 'Our Advisory Board',
					subCategoryLink: '/advisory-board'
				},
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Careers',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Terms & Conditions',
					subCategoryLink: '/privacy-policy'
				},
				{
					subCategory: 'Privacy Policy',
					subCategoryLink: '/privacy-policy'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Canary Oncoceutics 2024. All Rights Reserved.'
	}
}
