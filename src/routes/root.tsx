import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  useProSidebar,
} from 'react-pro-sidebar';
import {
  ChartPieIcon,
  Bars3Icon,
  ShoppingCartIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';

export default function Root() {
  const { collapseSidebar, collapsed, broken, toggled } = useProSidebar();
  console.log(collapsed);
  console.log(broken);
  console.log(toggled);
  return (
    <div className='relative flex w-full min-h-screen bg-body-light/10'>
      <aside>
        <Sidebar
          width='230px'
          customBreakPoint='800px'
          className='h-full'
          backgroundColor='white'>
          <Menu
            menuItemStyles={{
              button: ({ level, active, disabled }) => {
                if (level === 0)
                  return {
                    fontSize: 14,
                    color: disabled ? '#d1d5db' : '#374151',
                    backgroundColor: active ? '#fb7185' : undefined,
                  };
              },
            }}>
            <SubMenu
              className='text-sm'
              defaultOpen
              label='Charts'
              icon={<Bars3Icon width={20} className='text-rose-500' />}>
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
            <MenuItem
              icon={<ChartPieIcon width={20} className='text-rose-500' />}>
              Calendar
            </MenuItem>
            <MenuItem
              icon={<ShoppingCartIcon width={20} className=' text-rose-500' />}>
              E-commerce
            </MenuItem>
            <MenuItem
              icon={<ServerIcon width={20} className=' text-rose-500' />}>
              Examples
            </MenuItem>
          </Menu>
        </Sidebar>
      </aside>
      <div className='flex flex-col px-6 w-full justify-between'>
        <div>
          <header className='flex h-14 bg-white w-full mt-4 rounded-md shadow-md justify-between items-center px-4 mb-4'>
            <div>
              <Bars3Icon
                onClick={() => collapseSidebar()}
                className='text-gray-600 w-8 h-8 cursor-pointer hover:text-rose-500'
              />
            </div>
            <div>
              <h1>Icon</h1>
            </div>
          </header>
          <main className='px-4'>
            <h1>Main Root</h1>
          </main>
        </div>
        <footer>Footer</footer>
      </div>
    </div>
  );
}
