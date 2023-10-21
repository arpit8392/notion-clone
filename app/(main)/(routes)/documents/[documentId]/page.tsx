'use client'

import { Id } from '@/convex/_generated/dataModel'

interface DocumentIdPageProps {
	params: {
		documentId: Id<'documents'>
	}
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
	// const document = useQuery(api.documents.get)
	return (
		<div className='pb-40'>
			{/* Cover Image Component */}
			<div className='md:max-w-3xl lg:max-w-4xl mx-auto'>
				{/* Toolbar Component */}
				{/* Editor Component */}
			</div>
		</div>
	)
}
export default DocumentIdPage
