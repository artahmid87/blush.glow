import Link from 'next/link';
import { useState } from 'react';
import { OpenIcon, DropdownIcon, BlogIcon, GalleryIcon, MakeUpIcon, AppointmentIcon, DashboardIcon } from '../ui/icon';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className= "  lg:h-[100dvh] bg-white border-r border-gray-400 text-secondery p-6">
      {/* Sidebar for All Views */}
      <div className="flex flex-col items-center lg:w-60">
        {/* Logo */}
        <div className="py-10">
          <img src="/images/home/logo.png" alt="Logo" />
        </div>

        {/* Desktop Sidebar */}
        <ul className="hidden lg:flex flex-col w-full">
          <li className="text-secondery">
            <Link className="flex items-center" href="/dashboard">
              <DashboardIcon className="text-2xl mr-2" />
              <span className="text-2xl">Dashboard</span>
            </Link>
          </li>

          {renderDropdownMenu('services', 'Services', MakeUpIcon, [
            { name: 'Service List', href: '/dashboard/displayServices' },
            { name: 'Add Service', href: '/dashboard/addPrice' },
            { name: 'Category', href: '/dashboard/category' },
          ])}
      
      <li className="py-4 text-secondery">
            <Link className="flex items-center" href="/dashboard/appointment">
              <AppointmentIcon className="text-2xl mr-2" />
              <span className="text-2xl">Appointment</span>
            </Link>
            </li>

          {/* Dropdown Menus */}
          {renderDropdownMenu('blog', 'Blog', BlogIcon, [
            { name: 'List of Blog', href: '/dashboard/blog' },
            { name: 'Create Blog Post ', href: '/dashboard/newPost' },
            { name: 'Blog Category', href: '/dashboard/blog-category' },
          ])}
           

          {renderDropdownMenu('gallery', 'Gallery', GalleryIcon, [
            { name: 'Gallery List', href: '/dashboard/gallery' },
            { name: 'Post Gallery', href: '/dashboard/uploadGallery' },
          ])}
         
        </ul>

        {/* Tablet and Mobile Views */}
        <div className="flex lg:hidden w-full flex-col">
          <div className="flex justify-between items-center w-full mb-4">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar" className='text-3xl'>
              <OpenIcon size={24} />
            </button>
          </div>
          {isOpen && (
            <ul className="space-y-4">
              <li>
                <Link className="flex items-center text-2xl" href="/dashboard">
                  <DashboardIcon className="text-xl mr-2" />
                  Dashboard
                </Link>
              </li>

              {renderDropdownMenu('services', 'Services', MakeUpIcon, [
                { name: 'Service List', href: '/dashboard/displayServices' },
                { name: 'Add Service', href: '/dashboard/addPrice' },
                { name: 'Category', href: '/dashboard/category' },
              ])}

<li>
                <Link className="flex items-center text-2xl" href="/dashboard/appointment">
                  <AppointmentIcon className="text-2xl mr-2" />
                  Appointment
                </Link>
              </li>
             
              {/* Dropdown Menus */}
              {renderDropdownMenu('blog', 'Blog', BlogIcon, [
                { name: 'List of Blog', href: '/dashboard/blog' },
                { name: 'Create Blog Post', href: '/dashboard/newPost' },
                { name: 'Blog Category', href: '/dashboard/blog-category' },
              ])}
              {renderDropdownMenu('gallery', 'Gallery', GalleryIcon, [
                { name: 'Gallery List', href: '/dashboard/gallery' },
                { name: 'Post Gallery', href: '/dashboard/uploadGallery' },
              ])}
            
            </ul>
          )}
        </div>
      </div>
    </nav>
  );

  function renderDropdownMenu(key, label, Icon, links) {
    return (
      <li className="mb-4">
        <div
          className={`flex items-center cursor-pointer ${activeMenu === key ? 'text-blue-500' : ''}`}
          onClick={() => toggleMenu(key)}
        >
          <Icon className="text-2xl mr-2" />
          <span className="text-2xl">{label}</span>
          <DropdownIcon size={18} className="ml-2" />
        </div>
        {activeMenu === key && (
          <ul className="ml-6 space-y-2 text-lg font-semibold text-gray-500">
            {links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }
};

export default Sidebar;
