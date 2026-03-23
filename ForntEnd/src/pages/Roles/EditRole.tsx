import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import EditRoleModulePermission from "../../components/Tables/EditRoleModulePermissionTable";

const EditRole = () => {
    return (
        <>
            <Breadcrumb pageName="Roles & Permission" InnerpageName="Edit Roles" />

            <div className="rounded-lg border border-stroke border-tablebg bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
                <EditRoleModulePermission />
            </div>
        </>
    )
}

export default EditRole;