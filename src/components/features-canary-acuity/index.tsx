import { useState } from 'react'
import { FlaskConical } from 'lucide-react'

const FeaturesCanaryAcuity = () => {
	const [activeTab, setActiveTab] = useState('gene-testing')

	const tabs = [
		{
			id: 'gene-testing',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Extensive Gene Testing',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Extensive Gene Testing</h2>
					<div className="rounded-lg">
						<p>
							Examining 1091 cancer-related genes with clinically relevant treatment options, we
							provide the most complete diagnostic test available.
						</p>
						<img src="/images/extensive-gene-testing.jpg" width="40%"></img>
					</div>
				</div>
			)
		},
		{
			id: 'germline-testing',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Comprehensive Germline Variant Testing',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Germline Variant Testing</h2>
					<div className="rounded-lg">
						<p>
							Testing 637 germline variants, providing insight into patient-specific toxicities or
							sensitivities that may influence treatment selection.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'acmg-analysis',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Complete ACMG Oncology Analysis',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">ACMG Oncology Germline Mutational Analysis</h2>
					<div className="rounded-lg">
						<p>
							Testing all oncology-related genes recommended by the American College of Medical
							Genetics and Genomics for screening germline mutations. Knowing that you may have
							passed a mutation to your children can enable them to be proactive in the own
							healthcare journey.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'deep-sequencing',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Deep Sequencing Analysis',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Deep Sequencing at 2,000x Coverage</h2>
					<div className="rounded-lg">
						<p>
							Examining 1091 cancer-related genes with clinically relevant treatment options, we
							provide the most complete diagnostic NGS test available.
						</p>
						<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Sensitivity</h3>
								<p>
									Deeper sequencing coverage increases variant detection sensitivity, especially for
									low-frequency variants.
								</p>
							</div>
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Precision</h3>
								<p>
									Improved precision in variant calling, reducing false positive rates and
									increasing accuracy.
								</p>
							</div>
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Statistical Power</h3>
								<p>
									Increased statistical power for detecting variants, particularly rare variants.
								</p>
							</div>
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Reproducibility</h3>
								<p>
									Enhanced reproducibility of variant calling results across different samples and
									runs.
								</p>
							</div>
						</div>
					</div>
				</div>
			)
		},
		{
			id: 'dna-alterations',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'DNA Alterations & Interventions',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Therapeutic Interventions</h2>
					<p>
						Therapeutic interventions guided by somatic variants, such as targeted therapies,
						immunotherapies, hormonal therapies etc.
					</p>
					<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
						<div className="rounded-lg bg-gray-100 p-4">
							<h3 className="mb-2 text-xl font-semibold">Targeted Therapies</h3>
							<p>
								Precision therapies targeting specific gene mutations and proteins, such as tyrosine
								kinase inhibitors.
							</p>
						</div>
						<div className="rounded-lg bg-gray-100 p-4">
							<h3 className="mb-2 text-xl font-semibold">Immunotherapies</h3>
							<p>
								Treatments influenced by somatic variants affecting tumor microenvironment and
								immune response.
							</p>
						</div>
					</div>
				</div>
			)
		},
		{
			id: 'predictive',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Enhanced Predictive Capabilities',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Predictive Analysis</h2>
					<div className="rounded-lg">
						<p>
							Assessment of TMB (Tumor Mutational Burden), MSI (Microsatellite Instability) and HRD
							(Homologous Recombination Deficiency) to inform therapeutic decisions.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'pathways',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Cancer-Relevant Pathways',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Cancer-Relevant Pathways</h2>
					<div className="rounded-lg">
						<p>
							Diagrams illustrating identified pathways with potential treatment implications,
							helpful for physician-patient interactions and treatment recommendations.
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'amplifications',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Amplifications and Deletions',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Copy Number Variants</h2>
					<div className="rounded-lg">
						<p>
							Analysis of amplifications and deletions (copy number variants) that involve the
							duplication or deletion of genomic segments, with important implications for
							therapeutic intervention.
						</p>
					</div>
				</div>
			)
		}
	]

	return (
		<div>
			<h1 className="mb-10 flex justify-center text-3xl font-semibold">Test Features</h1>
			<div className="block h-fit rounded-md bg-gray-50 shadow-md lg:flex">
				<div className="flex w-full overflow-x-auto bg-white lg:block lg:w-72">
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex w-full items-center px-6 py-4 text-left transition-all duration-200 ${
								activeTab === tab.id
									? 'border-b-4 border-primary-600 bg-primary-50 text-primary-600 lg:border-b-0 lg:border-l-4'
									: 'border-b-4 border-transparent hover:bg-gray-50'
							}`}
						>
							<span
								className={`mr-4 ${activeTab === tab.id ? 'text-primary-600' : 'text-gray-500'}`}
							>
								{tab.icon}
							</span>
							<span
								className={`text-sm font-medium ${
									activeTab === tab.id ? 'text-primary-600' : 'text-gray-700'
								}`}
							>
								{tab.label}
							</span>
						</button>
					))}
				</div>

				<div className="flex-1 overflow-auto p-8 pt-0">
					{tabs.find((tab) => tab.id === activeTab)?.content}
				</div>
			</div>
		</div>
	)
}

export default FeaturesCanaryAcuity
