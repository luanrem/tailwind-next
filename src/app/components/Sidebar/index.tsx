import { BarChart, CheckSquare, Cog, Flag, HomeIcon, LifeBuoy, Search, SquareStack, Users } from 'lucide-react'
import { Logo } from "./Logo";
import { NavItem } from './NavItem';
import { UsedSpaceWidget } from './UsedSpaceWidget';
import { Profile } from './Profile';
import { Input } from '../Input';


export function Sidebar() {
  return (
    <aside className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 lg:relative lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className='h-5 w-5 text-zinc-500' />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title='Home' icon={HomeIcon} />
        <NavItem title='Dashboard' icon={BarChart} />
        <NavItem title='Projects' icon={SquareStack} />
        <NavItem title='Tasks' icon={CheckSquare} />
        <NavItem title='Reporting' icon={Flag} />
        <NavItem title='Users' icon={Users} />
      </nav>

      <UsedSpaceWidget />

      <div className='h-px bg-zinc-200' />
      <Profile />
    </aside>
  )
}