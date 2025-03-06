import Link from 'next/link';
import { useState } from 'react';
import { OpenIcon, DropdownIcon, BlogIcon, GalleryIcon, MakeUpIcon, AppointmentIcon, DashboardIcon, HolidayIcon,CertificateIcon } from '../ui/icon';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="lg:h-[100dvh] bg-white border-r border-gray-400 text-secondery p-6">
      <div className="flex flex-col items-center lg:w-60">
        <div className="py-10">
          <Image
              src="/images/home/logo.png"
               alt="Logo"
              width={300}
              height={300}
              priority
            />
        </div>

        <button
          className="lg:hidden mb-4 p-2 border rounded-md text-3xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Sidebar"
        >
          <OpenIcon size={24} />
        </button>

        <ul className={`flex-col w-full ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
          <li className="text-[#232323]">
            <Link className="flex items-center" href="/dashboard">
              <DashboardIcon className="text-2xl mr-2" />
              <span className="text-2xl">Dashboard</span>
            </Link>
          </li>

          {DropdownMenu('services', 'Services', MakeUpIcon, [
            { name: 'Service List', href: '/dashboard/displayServices' },
            { name: 'Add Service', href: '/dashboard/addPrice' },
            { name: 'Category', href: '/dashboard/category' },
          ])}

          <li className="text-[#232323]">
            <Link className="flex items-center" href="/dashboard/appointment">
              <AppointmentIcon className="text-2xl mr-2" />
              <span className="text-2xl">Appointment</span>
            </Link>
          </li>

          <li className="text-[#232323] py-2 mt-1">
            <Link className="flex items-center" href="/dashboard/holiday">
              <HolidayIcon className="text-2xl mr-2" />
              <span className="text-2xl">Holiday</span>
            </Link>
          </li>

          {DropdownMenu('blog', 'Blog', BlogIcon, [
            { name: 'List of Blog', href: '/dashboard/blog' },
            { name: 'Create Blog Post ', href: '/dashboard/newPost' },
            { name: 'Blog Category', href: '/dashboard/blog-category' },
          ])}

          {DropdownMenu('gallery', 'Gallery', GalleryIcon, [
            { name: 'Gallery List', href: '/dashboard/gallery' },
            { name: 'Post Gallery', href: '/dashboard/uploadGallery' },
          ])}
          {DropdownMenu('cartificate', 'Certificate', CertificateIcon, [
            { name: 'Certificate List', href: '/dashboard/certificate' },
            { name: 'Post Certificate', href: '/dashboard/uploadCertificate' },
          ])}



        </ul>
      </div>
    </nav>
  );

  function DropdownMenu(key, label, Icon, links) {
    return (
      <li className="py-2 text-[#232323]">
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
