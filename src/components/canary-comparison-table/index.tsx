const CanaryTestResults = () => {
	return (
		<div className="overflow-x-auto">
			<table className="w-full border-collapse overflow-auto rounded-lg border bg-white shadow-lg">
				<caption className="caption-bottom">
					{/* <p className="mt-6 text-lg text-gray-600">
            <span className="font-medium">Note:</span>{" "}
            <span className="text-red-500">Red Color</span> highlighted text
            indicated test results where Canary has a differentiated advantage.
          </p> */}
				</caption>
				<thead>
					<tr className="bg-primary-50 text-xl font-bold">
						<th className="sticky left-0 w-1/4 bg-inherit p-6 text-left lg:relative">
							Test Results
						</th>
						<th className="w-1/4 p-6 text-center text-primary-900">Canary Acuity™</th>
						<th className="w-1/4 p-6 text-center text-primary-900">Canary Pulse™</th>
						<th className="w-1/4 p-6 text-center text-primary-900">Canary Focus™</th>
					</tr>
				</thead>
				<tbody>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 p-3 text-lg font-semibold text-primary-900 lg:relative">
							Number of Genes Analyzed via NGS
						</td>
						<td className="p-3 text-center text-xl">1091 (+637 Variants)</td>
						<td className="p-3 text-center text-xl">468 (+37 Variants)</td>
						<td className="p-3 text-center text-xl">115+</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Therapeutic SNVs and InDels
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Amplifications and Deletions
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Fusions Genes
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Tumor Mutational Burden (TMB)
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">
							<span className="text-red-500">✗</span>
						</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Microsatellite Instability (MSI)
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Homologous Recombination Deficiency (HRD)
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">
							<span className="text-red-500">✗</span>
						</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Loss of Heterozygosity (LOH)
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold lg:relative">
							Comprehensive Proprietary Database of FDA Approved/Clinical Trial Drugs for
							Corresponding Biomarkers
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold text-primary-900 lg:relative">
							Depiction of Cancer-Relevant Pathways
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">
							<span className="text-red-500">✗</span>
						</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold text-primary-900 lg:relative">
							Germline Variants Affecting Drug Metabolism
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">
							<span className="text-red-500">✗</span>
						</td>
					</tr>
					<tr className="border-b border-gray-200">
						<td className="sticky left-0 bg-white p-3 text-lg font-semibold text-primary-900 lg:relative">
							Complete ACMG Oncology Germline Mutational Analysis
						</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">✓</td>
						<td className="p-3 text-center text-3xl">
							<span className="text-red-500">✗</span>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default CanaryTestResults
