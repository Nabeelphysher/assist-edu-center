import React, { useState, useMemo, useRef } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

// Example guides data (replace with your actual guides/tutorials)
const guides = [
	{ title: 'Add a New Student', description: 'Step-by-step student registration' },
	{ title: 'Generate Reports', description: 'How to create and export reports' },
	{ title: 'Teacher Onboarding', description: 'Guide for adding new teachers' },
	{ title: 'Bulk Import', description: 'Upload multiple records at once' },
	{ title: 'Advisor Scheduling', description: 'Manage advisor schedules' },
];

const HeroSection = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [focused, setFocused] = useState(false);
	const [highlighted, setHighlighted] = useState(-1);
	const resultsRef = useRef<HTMLDivElement>(null);

	// Filter guides based on search query
	const filteredGuides = useMemo(() => {
		if (!searchQuery.trim()) return [];
		return guides.filter(
			(guide) =>
				guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				guide.description.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}, [searchQuery]);

	// Keyboard navigation for dropdown
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (!filteredGuides.length) return;
		if (e.key === 'ArrowDown') {
			setHighlighted((prev) => (prev + 1) % filteredGuides.length);
		} else if (e.key === 'ArrowUp') {
			setHighlighted((prev) => (prev - 1 + filteredGuides.length) % filteredGuides.length);
		} else if (e.key === 'Enter' && highlighted >= 0) {
			// You can add navigation or action here
			setSearchQuery(filteredGuides[highlighted].title);
			setFocused(false);
		}
	};

	return (
		<section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
					Welcome to <span className="text-blue-200">EduSystem Support</span>
				</h1>
				<p className="text-xl md:text-2xl mb-10 text-blue-100 font-medium">
					Instantly find guides, tutorials, and answers for students, teachers, and more.
				</p>
				<div className="max-w-2xl mx-auto relative">
					<div className="relative">
						<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
						<Input
							type="text"
							placeholder="How can we help you? Search for guides, tutorials..."
							value={searchQuery}
							onChange={(e) => {
								setSearchQuery(e.target.value);
								setHighlighted(-1);
							}}
							onFocus={() => setFocused(true)}
							onBlur={() => setTimeout(() => setFocused(false), 150)}
							onKeyDown={handleKeyDown}
							aria-label="Search guides and tutorials"
							className="pl-12 pr-4 py-4 text-lg bg-white text-gray-900 border-0 rounded-xl shadow-xl focus:ring-2 focus:ring-blue-400 transition-all duration-200"
							autoComplete="off"
						/>
						{/* Search Results Dropdown */}
						{focused && searchQuery && (
							<div
								ref={resultsRef}
								className="absolute left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl z-20 text-left max-h-72 overflow-auto border border-blue-100"
								role="listbox"
							>
								{filteredGuides.length > 0 ? (
									filteredGuides.map((guide, idx) => (
										<div
											key={idx}
											className={`px-5 py-4 cursor-pointer border-b last:border-b-0 transition 
                        ${highlighted === idx ? 'bg-blue-50' : 'hover:bg-blue-50'}
                      `}
											tabIndex={0}
											role="option"
											aria-selected={highlighted === idx}
											onMouseEnter={() => setHighlighted(idx)}
											onMouseDown={() => {
												setSearchQuery(guide.title);
												setFocused(false);
											}}
										>
											<div className="font-semibold text-gray-900">{guide.title}</div>
											<div className="text-gray-500 text-sm">{guide.description}</div>
										</div>
									))
								) : (
									<div className="px-5 py-4 text-gray-500">No results found.</div>
								)}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
