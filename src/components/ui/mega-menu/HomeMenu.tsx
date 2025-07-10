import { useState } from 'react'

const RightArrow = () => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.5"
		stroke-linecap="round"
		stroke-linejoin="round"
		className="lucide lucide-chevron-right"
	>
		<path d="m9 18 6-6-6-6"></path>
	</svg>
)

const HomeMenu = () => {
	const [hoveredItem, setHoveredItem] = useState('')

	return (
		<div className="flex">
			<div className="border-r-2 text-left" onMouseEnter={(e) => {}}>
				<button className="flex min-w-52 justify-between rounded-l-md px-2 py-2 text-lg hover:bg-gray-200">
					<div className="">Canary Acuity</div>
					<RightArrow />
				</button>
				<div className="flex min-w-52 justify-between rounded-l-md px-2 py-2 text-lg hover:bg-gray-200">
					<button>Canary Focus</button>
					<RightArrow />
				</div>
				<div className="flex min-w-52 justify-between rounded-l-md px-2 py-2 text-lg hover:bg-gray-200">
					<button>Canary Pulse</button>
					<RightArrow />
				</div>
			</div>

			<div>Content here for Canary Focus</div>
		</div>
	)
}

export default HomeMenu
