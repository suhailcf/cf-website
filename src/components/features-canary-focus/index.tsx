import { useState } from 'react'
import { FlaskConical } from 'lucide-react'

const FeaturesCanaryFocus = () => {
	const [activeTab, setActiveTab] = useState('gene-testing')

	const tabs = [
		{
			id: 'gene-testing',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Genes Analyzed',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">Genes Analyzed</h2>
					<div className="rounded-lg">
						<p>
							Examines <strong>119</strong> cancer-related genes including <strong>SNVs</strong>,{' '}
							<strong>InDels</strong>, <strong>amplifications</strong> and{' '}
							<strong>deletions</strong> that can impact treatment decisions.
						</p>
						<img src="/images/extensive-gene-testing.jpg" width="40%"></img>
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
					<h2 className="text-2xl font-semibold">
						Deep sequencing at 2,000x coverage to detect subclonal variants
					</h2>
					<div className="rounded-lg">
						<p>
							Deep sequencing, typically ranging from 500x to 1,000x coverage, is often recommended
							for detecting subclonal variants in next-generation sequencing (NGS) data. Deep
							sequencing can lead to high:
						</p>
						<div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Sensitivity</h3>
								<p>
									Higher sequencing coverage increases the sensitivity of variant detection,
									allowing for the detection of low-frequency variants present in a small fraction
									of cells or subclones within a sample. This is particularly important for
									identifying subclonal variants, which may be present at lower allele frequencies
									compared to dominant or clonal variants.
								</p>
							</div>
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Precision</h3>
								<p>
									Higher coverage also improves the precision of variant calling, reducing the false
									positive rate and increasing the accuracy of variant detection. This is important
									for minimizing false positives that can result from sequencing errors, mapping
									errors, or other technical artifacts.
								</p>
							</div>
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Statistical Power</h3>
								<p>
									Higher coverage increases the statistical power for detecting variants,
									particularly rare variants. It provides more robust evidence for the presence of a
									variant, which is particularly important when dealing with low-frequency subclonal
									variants that may be present in a small fraction of cells.
								</p>
							</div>
							<div className="rounded-lg bg-gray-100 p-4">
								<h3 className="mb-2 text-xl font-semibold">Reproducibility</h3>
								<p>
									Higher coverage helps ensure the reproducibility of variant calling results across
									different samples, sequencing runs, or bioinformatics pipelines. It provides a
									more consistent and reliable basis for comparing variant calls across different
									datasets or studies.
								</p>
							</div>
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
					<h2 className="text-2xl font-semibold">Enhanced Predictive Capabilities</h2>
					<div className="rounded-lg">
						<p>
							Our assessment of Microsatellite Instability (MSI) and Loss of Heterozygosity (LOH)
							can also inform therapeutic decisions
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
					<h2 className="text-2xl font-semibold">In-depth understanding of Metabolic Pathways</h2>
					<div className="rounded-lg">
						<p>
							Equipping clinicians with detailed metabolic pathway insights for each mutation
							provides a clear understanding of underlying pathology
						</p>
					</div>
				</div>
			)
		},
		{
			id: 'germline-variants',
			icon: <FlaskConical className="h-5 w-5" />,
			label: 'Germline Variants',
			content: (
				<div className="space-y-4 p-4">
					<h2 className="text-2xl font-semibold">
						Delivers Germline variants affecting drug metabolism.
					</h2>
					<div className="rounded-lg">
						<p></p>
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
									? 'bg-greprimaryen-50 border-b-4 border-primary-600 text-primary-600 lg:border-b-0 lg:border-l-4'
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

export default FeaturesCanaryFocus
