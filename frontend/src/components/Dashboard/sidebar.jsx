import Link from 'next/link';
import { useState } from 'react';
import { OpenIcon, DropdownIcon } from '../ui/icon'; // Assuming you have a dropdown icon

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // Tracks active dropdown menu

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <nav className="bg-gray-800 text-white p-6">
      {/* Sidebar for Desktop */}
      <div className="hidden lg:flex flex-col items-center w-60">
        <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
        <ul>
        <li className=''><Link href={'/'}>Home</Link></li>
        <li className='py-2'><Link href={'/dashboard'}>Appointment</Link></li>
          {/* Blog Dropdown */}
          <li className="mb-4">
            <div
              className={`flex items-center cursor-pointer ${activeMenu === 'blog' ? 'text-blue-500' : ''}`}
              onClick={() => toggleMenu('blog')}
            >
              Blog
              <DropdownIcon size={18} className="ml-2" />
            </div>
            {activeMenu === 'blog' && (
              <ul className="ml-6 space-y-2">
                <li><Link href="/dashboard/blog">Blog List</Link></li>
                <li><Link href="/dashboard/newPost">Create Post</Link></li>
                <li><Link href="/dashboard/blog-category">Blog Category</Link></li>
              </ul>
            )}
          </li>

          {/* Gallery Dropdown */}
          <li className="mb-4">
            <div
              className={`flex items-center cursor-pointer ${activeMenu === 'gallery' ? 'text-blue-500' : ''}`}
              onClick={() => toggleMenu('gallery')}
            >
              Gallery
              <DropdownIcon size={18} className="ml-2" />
            </div>
            {activeMenu === 'gallery' && (
              <ul className="ml-6 space-y-2">
                <li><Link href="/dashboard/gallery">Gallery List</Link></li>
                <li><Link href="/dashboard/uploadGallery">Post Gallery</Link></li>
              </ul>
            )}
          </li>

          {/* Services Dropdown */}
          <li className="mb-4">
            <div
              className={`flex items-center cursor-pointer ${activeMenu === 'services' ? 'text-blue-500' : ''}`}
              onClick={() => toggleMenu('services')}
            >
              Services
              <DropdownIcon size={18} className="ml-2" />
            </div>
            {activeMenu === 'services' && (
              <ul className="ml-6 space-y-2">
                <li><Link href="/dashboard/displayServices">Service List</Link></li>
                <li><Link href="/dashboard/addPrice">Add Service</Link></li>
                <li><Link href="/dashboard/category">Category</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Sidebar for Tablet */}
      <div className="hidden md:flex lg:hidden flex-col items-center">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-2xl font-bold">Dashboard</h2>
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
            <OpenIcon size={24} />
          </button>
        </div>

        {isOpen && (
          <ul className="mt-4 space-y-4">
               <li className='py-2'><Link href={'/'}>Home</Link></li>
               <li className='py-2'><Link href={'/dashboard'}>Appointment</Link></li>
            <li>
              <div
                className={`flex items-center cursor-pointer ${activeMenu === 'blog' ? 'text-blue-500' : ''}`}
                onClick={() => toggleMenu('blog')}
              >
                Blog
                <DropdownIcon size={18} className="ml-2" />
              </div>
              {activeMenu === 'blog' && (
                <ul className="ml-6 space-y-2">
                  <li><Link href="/dashboard/blog">Blog List</Link></li>
                  <li><Link href="/dashboard/newPost">Create Post</Link></li>
                  <li><Link href="/dashboard/blog-category">Blog Category</Link></li>
                </ul>
              )}
            </li>

            <li>
              <div
                className={`flex items-center cursor-pointer ${activeMenu === 'gallery' ? 'text-blue-500' : ''}`}
                onClick={() => toggleMenu('gallery')}
              >
                Gallery
                <DropdownIcon size={18} className="ml-2" />
              </div>
              {activeMenu === 'gallery' && (
                <ul className="ml-6 space-y-2">
                  <li><Link href="/dashboard/gallery">Gallery List</Link></li>
                  <li><Link href="/dashboard/uploadGallery">Post Gallery</Link></li>
                </ul>
              )}
            </li>

            <li>
              <div
                className={`flex items-center cursor-pointer ${activeMenu === 'services' ? 'text-blue-500' : ''}`}
                onClick={() => toggleMenu('services')}
              >
                Services
                <DropdownIcon size={18} className="ml-2" />
              </div>
              {activeMenu === 'services' && (
                <ul className="ml-6 space-y-2">
                  <li><Link href="/dashboard/displayServices">Service List</Link></li>
                  <li><Link href="/dashboard/addPrice">Add Service</Link></li>
                  <li><Link href="/dashboard/category">Category</Link></li>
                </ul>
              )}
            </li>
          </ul>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex justify-between items-center">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Sidebar">
          <OpenIcon size={24} />
        </button>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 space-y-4 md:hidden">
          <li>
          <li className='py-2'><Link href={'/'}>Home</Link></li>
          <li className='py-2'><Link href={'/dashboard'}>Appointment</Link></li>
            <div
              className={`flex items-center cursor-pointer ${activeMenu === 'blog' ? 'text-blue-500' : ''}`}
              onClick={() => toggleMenu('blog')}
            >
              Blog
              <DropdownIcon size={18} className="ml-2" />
            </div>
            {activeMenu === 'blog' && (
              <ul className="ml-6 space-y-2">
                <li><Link href="/dashboard/blog">Blog List</Link></li>
                <li><Link href="/dashboard/newPost">Create Post</Link></li>
                <li><Link href="/dashboard/blog-category">Blog Category</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div
              className={`flex items-center cursor-pointer ${activeMenu === 'gallery' ? 'text-blue-500' : ''}`}
              onClick={() => toggleMenu('gallery')}
            >
              Gallery
              <DropdownIcon size={18} className="ml-2" />
            </div>
            {activeMenu === 'gallery' && (
              <ul className="ml-6 space-y-2">
                <li><Link href="/dashboard/gallery">Gallery List</Link></li>
                <li><Link href="/dashboard/uploadGallery">Post Gallery</Link></li>
              </ul>
            )}
          </li>

          <li>
            <div
              className={`flex items-center cursor-pointer ${activeMenu === 'services' ? 'text-blue-500' : ''}`}
              onClick={() => toggleMenu('services')}
            >
              Services
              <DropdownIcon size={18} className="ml-2" />
            </div>
            {activeMenu === 'services' && (
              <ul className="ml-6 space-y-2">
                <li><Link href="/dashboard/displayServices">Service List</Link></li>
                <li><Link href="/dashboard/addPrice">Add Service</Link></li>
                <li><Link href="/dashboard/category">Category</Link></li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Sidebar;
