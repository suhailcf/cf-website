// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface MegaMenuContent {
	// componentPath: any
	// props?: Record<string, any>
	heading: string
	subHeading: string
	description: string
}

export interface NavItem {
	name: string
	id: string
	link?: string
	megaMenuItems: Array<{
		title: string
		content: MegaMenuContent
		link: string
	}>
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActionsPrimary: NavAction[]
	navActionsSecondary: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '../src/images/logo_cf.png',
		alt: 'CloudFort',
		text: 'CloudFort.'
	},
	navItems: [
		{
			name: 'Services',
			id: 'Services',
			megaMenuItems: [
				{
					title: 'Google Workspace',
					content: {
						heading: 'Canary Acuity™',
						subHeading: 'Comprehensive Gene Profiling (CGP)',
						description: `The Canary Acuity™ Comprehensive Gene Profiling (CGP) test is
		<strong>CLIA-certified</strong> and <strong>CAP-Accredited</strong> for solid and liquid tumors.
		This test examines <strong>1091 genes</strong>, including dozens that are not found in other
		competing tests, offering a thorough analysis for personalized cancer care. This comprehensive
		approach enables tailored treatment strategies such as targeted therapy or immunotherapy.`
					},
					link: '/canary-acuity'
				},
				{
					title: 'Apps Script Services',
					content: {
						heading: 'Canary Focus™',
						subHeading: 'Focused Gene Panel',
						description: `Canary Focus™ is a smaller gene panel test which is <strong>CLIA-certified</strong> and <strong
			>CAP-Accredited</strong
		> for solid and liquid tumors. This more focused and streamlined gene panel can be equally effective
		in identifying relevant mutations for targeted therapies or other actionable clinical interventions.
		Our test, tailored for cancer patients seeking personalized treatment recommendations or longitudinal
		monitoring, accurately detects genetic mutations crucial for targeted therapy selection.
`
					},
					link: '/canary-focus'
				},
				{
					title: 'AppSheet & No-code solutions',
					content: {
						heading: 'Canary Pulse™',
						subHeading: 'LIQUID BIOPSY (ctDNA)',
						description: `DNA which tumors shed into blood is called circulating tumor DNA (ctDNA). As a consequence,
		peripheral blood can be used as a source of tumor DNA to monitor disease status. Sometimes an
		analysis of ctDNA provides an oncologist with critical information earlier than is possible with
		other types of diagnostic tests, e.g., MRI or CT scan. ctDNA findings can help to detect the
		recurrence of tumor or progression of disease earlier than with other diagnostic tests. Hence,
		ctDNA results can allow oncologists to monitor a patient’s disease and make treatment decisions
		sooner than would otherwise be possible. The Canary Pulse™ Liquid Biopsy analyzes an extensive
		panel of <strong>468</strong> carefully selected cancer-related genes.`
					},
					link: '/canary-pulse'
				}
			]
		},
		{
			name: 'Products',
			id: 'Products',
			megaMenuItems: [
				{
					title: 'AI Assist for Gemini Add-on',
					content: {
						heading: 'Product Pipeline',
						subHeading: '',
						description: `From early detection to <strong>personalized</strong> treatment strategies, our pipeline team is constantly working to expand our diagnostic capabilities, ensuring patients have access to the most <strong>advanced tools</strong> at every stage of their cancer journey.`
					},
					link: '/'
				},
				{
					title: 'Smart Certificates',
					content: {
						heading: 'Publications',
						subHeading: '',
						description: `At Canary Oncoceutics, we are driven by the belief that science can empower patients to conquer cancer. We rigorously apply our scientific expertise to create innovative diagnostic tools, delivering reliable results that enable informed and confident decision-making.`
					},
					link: '/'
				},
				{
					title: 'Smart Label Maker',
					content: {
						heading: 'Manuscripts',
						subHeading: '',
						description: ``
					},
					link: '/'
				},
				{
					title: 'Smart AI Image Generator',
					content: {
						heading: 'Clinical Studies',
						subHeading:
							'Advancing Cancer Diagnostics: Innovative Tests, Personalized Treatment, and Improved Outcomes',
						description: `Canary Oncoceutics is at the forefront of cancer diagnostics, developing tests that provide both early detection and personalized treatment guidance. Our innovative tests can identify cancer before you experience symptoms, or provide invaluable information about the genes driving your specific cancer, empowering you and your doctor to choose the most effective, personalized treatment plan. Through rigorous clinical trials, we are committed to ensuring the safety and reliability of our tests, delivering innovative solutions that improve patient outcomes.`
					},
					link: '/'
				},
				{
					title: 'Smart Mail Merge',
					content: {
						heading: 'Science Grants',
						subHeading: '',
						description: `Canary Oncoceutics is committed to fostering collaborative research initiatives. We carefully evaluate research proposals based on their scientific rigor, practical feasibility, and alignment with our key areas of research. We provide comprehensive support to selected projects, which may include funding, logistical assistance, and access to our specialized resources.`
					},
					link: '/'
				}
			]
		},
		{
			name: 'Solutions',
			id: 'Solutions',
			megaMenuItems: [
				{
					title: 'Overview',
					content: {
						heading: 'Partnership Opportunities',
						subHeading: 'Collaborate with Us: Expanding the Reach of Advanced Cancer Diagnostics',
						description: `Explore opportunities to partner with Canary Oncoceutics and integrate our cutting-edge diagnostic tests into your practice. Together, we can improve patient outcomes through early detection and personalized treatment strategies.`
					},
					link: '/providers#partnership-opportunities'
				},
				{
					title: 'Sales Automation',
					content: {
						heading: 'Partnership Opportunities',
						subHeading: 'Collaborate with Us: Expanding the Reach of Advanced Cancer Diagnostics',
						description: `Explore opportunities to partner with Canary Oncoceutics and integrate our cutting-edge diagnostic tests into your practice. Together, we can improve patient outcomes through early detection and personalized treatment strategies.`
					},
					link: '/providers#partnership-opportunities'
				},
				{
					title: 'HR & Onboarding',
					content: {
						heading: 'FAQs',
						subHeading: 'Answers at Your Fingertips: Find Quick Answers to Common Questions',
						description: `Get immediate answers to frequently asked questions about our tests, services, and research. Our FAQ section provides essential information for providers seeking to learn more about Canary Oncoceutics.`
					},
					link: '/providers#faq'
				},
				{
					title: 'Project Management',
					content: {
						heading: 'Academic Research',
						subHeading:
							'Advancing Cancer Science: Explore Research Collaborations and Opportunities',
						description: `Discover how Canary Oncoceutics is contributing to cancer research and learn about opportunities to collaborate with us on academic research projects. Explore the clinical studies and advances that are driving progress in cancer diagnostics.`
					},
					link: '/providers'
				},
				{
					title: 'Marketing & Advertising',
					content: {
						heading: 'Ask a Medical Question',
						subHeading: 'Expert Insights: Connect with Our Medical Team for Personalized Guidance',
						description: `Have a specific medical question about our tests or services? Contact our dedicated medical team for expert insights and personalized guidance to support your clinical decision-making.`
					},
					link: '/providers#contact-us'
				}
			]
		},
		{
			name: 'Resources',
			id: 'Resources',
			megaMenuItems: [
				{
					title: 'Case Studies',
					content: {
						heading: 'Newsroom',
						subHeading: 'The Latest from Canary Oncoceutics: Discover Updates and Announcements',
						description: `Stay informed about the latest developments at Canary Oncoceutics, including new test launches, research breakthroughs, partnerships, and company announcements.`
					},
					link: '/newsroom'
				},
				{
					title: 'Blog',
					content: {
						heading: 'Blog',
						subHeading:
							'Insights and Perspectives: Explore Our Blog for Expert Commentary and Advice',
						description: `Dive into our blog for insightful articles, expert commentary, and valuable information on cancer prevention, early detection, genetics, and personalized treatment strategies.`
					},
					link: '/blog'
				},
				{
					title: 'Demos/Walkthroughs',
					content: {
						heading: 'Events',
						subHeading: "Connect with Us: Find Out Where We'll Be and What We're Presenting",
						description: `Explore upcoming conferences, webinars, and other events where Canary Oncoceutics will be present, showcasing our latest research and connecting with the medical community`
					},
					link: '/'
				},
				{
					title: 'Free Guides/Checklists',
					content: {
						heading: 'Press Releases',
						subHeading: 'Official Announcements: Read Our Latest Press Releases for Company News',
						description: `Access our official press releases for the latest company news, including announcements of new partnerships, clinical trial results, and other significant developments.`
					},
					link: '/'
				}
			]
		},
		{
			name: 'About',
			id: 'About',
			megaMenuItems: [
				{
					title: 'Who we are',
					content: {
						heading: 'Who we are',
						subHeading:
							'Our Mission and Vision: Discover Our Commitment to Transforming Cancer Care',
						description: `Learn about Canary Oncoceutics' mission, vision, and core values, and how we are dedicated to advancing cancer diagnostics and improving patient outcomes through innovation and collaboration.`
					},
					link: '/who-we-are'
				},
				{
					title: 'Our Team',
					content: {
						heading: 'Our Team',
						subHeading: 'The Experts Behind the Science: Meet Our Passionate Team of Innovators',
						description: `Get to know the talented individuals behind Canary Oncoceutics, including our scientists, researchers, medical professionals, and business leaders who are dedicated to making a difference in the fight against cancer.`
					},
					link: '/our-team'
				},
				{
					title: 'Contact us',
					content: {
						heading: 'Contact us',
						subHeading: 'Get in Touch: Reach Out to Our Team with Questions or Inquiries',
						description: `Connect with us! Find our contact information, including phone numbers, email addresses, and a contact form, so you can easily reach out to our team with any questions or inquiries.`
					},
					link: '/contact'
				}
			]
		}

		// { name: 'Pricing', link: '/pricing' },
		// { name: 'Features', link: '/features' },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		// { name: 'Contact', link: '/contact' }
	],
	navActionsPrimary: [
		{ name: 'Login', link: '/login', style: 'neutral', size: 'sm' },
		{ name: 'Sign up', link: '/signup', style: 'neutral', size: 'sm' }
	],
	navActionsSecondary: [{ name: 'Get a Free Consultation', link: '/', style: 'neutral', size: 'base' }]
}

// 'D:\src\components\ui\mega-menu\CanaryAcuity.astro' -> '/src/components/ui/mega-menu/CanaryAcuity.astro'
// 'D:\CloudFort\canaryonco-v2\dist\chunks\CanaryAcuity.astro'  -> canaryPulsePath
