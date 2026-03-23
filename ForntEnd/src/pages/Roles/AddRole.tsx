import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import RoleModulePermission from "../../components/Tables/RoleModulePermissionTable";

const AddRole = () => {
    return (
        <>
            <Breadcrumb pageName="Roles & Permission" InnerpageName="Add Roles" />

            <div className="rounded-lg border border-stroke border-tablebg bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <RoleModulePermission/>
            </div>
        </>
    )
}
export default AddRole;