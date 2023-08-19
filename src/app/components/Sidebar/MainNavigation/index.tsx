import { BarChart, CheckSquare, Flag, Home as HomeIcon, SquareStack, Users } from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title='Home' icon={HomeIcon} />
      <NavItem title='Dashboard' icon={BarChart} />
      <NavItem title='Projects' icon={SquareStack} />
      <NavItem title='Tasks' icon={CheckSquare} />
      <NavItem title='Reporting' icon={Flag} />
      <NavItem title='Users' icon={Users} />
    </nav>
  )
}