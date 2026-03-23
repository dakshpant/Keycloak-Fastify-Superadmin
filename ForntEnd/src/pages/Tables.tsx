import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UserListTable from '../components/Tables/UserListTable';

const Tables = () => {
  return (
    <>
      <Breadcrumb pageName="Users" />

      <div className="flex flex-col gap-10">
        <UserListTable />
      </div>
    </>
  );
};

export default Tables;