import SideNav from 'app/ui/dashboard/sidenav';
export const experimental_ppr = true;

interface LayoutProps {
  readonly children: React.ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex h-screen md:flex-row md:overflow-hidden'>

      <div className='w-full transition-all flex-none md:w-64'>
        <SideNav />
      </div>

      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>
        {children}
      </div>

    </div>
  )
}