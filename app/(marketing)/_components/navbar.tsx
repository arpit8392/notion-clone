'use client'

import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { useScrollTop } from '@/hooks/use-scroll-top'
import { cn } from '@/lib/utils'
import Logo from './logo'

const Navbar = () => {
	const scrolled = useScrollTop()
	return (
		<div
			className={cn(
				'z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6',
				scrolled && 'border-b shadow-sm'
			)}>
			<Logo />
			<div className='md:ml-auto md:justify-end justify-between w-full flex items-center gap-2'>
				<Button size='sm'>Get Jotion Free</Button>
				<ModeToggle />
			</div>
		</div>
	)
}
export default Navbar
