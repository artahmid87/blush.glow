import Sidebar from '@/components/Dashboard/sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar/>
      <main className="flex-grow p-8 w-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
