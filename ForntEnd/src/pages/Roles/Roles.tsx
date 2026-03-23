import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import AddUserPopup from "../../components/Popups/AddUserPopup";
import UserListTable from "../../components/Tables/UserListTable";
import RolesTableList from "../../components/Tables/RolesTableList";
import { useNavigate } from "react-router-dom";

const Roles = () => {



    const [editPopup, setEditpopup] = useState(false);

    const [activeTab, setActiveTab] = useState("userList");

    const navigate = useNavigate()

    return (
        <>
            <Breadcrumb pageName="Roles & Permissions" />

            <div className="w-full mt-10 p-4 bg-white rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark border border-stroke border-tablebg">
                <div className="flex justify-between">
                    <div className="flex">
                        <button
                            className={`py-2 px-4 text-sm text-center ${activeTab === "userList" ? "border-b-2 border-primary text-primary font-bold" : "text-black font-medium dark:text-white "}`}
                            onClick={() => setActiveTab("userList")}
                        >
                            User List
                        </button>
                        <button
                            className={`py-2 px-4 text-sm text-center ${activeTab === "role" ? "border-b-2 border-primary text-primary font-bold" : "text-black font-medium dark:text-white "}`}
                            onClick={() => setActiveTab("role")}
                        >
                            Roles Configurations
                        </button>
                    </div>
                    <div className="flex space-x-2">
                        {activeTab === "userList" && (
                            <button 
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                onClick={()=>{setEditpopup(true)}}
                            >
                                Add User
                            </button>
                        )}
                        {activeTab === "role" && (
                            <button 
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                onClick={()=>{navigate("/configurator/roles/addrole")}}
                            >
                                Add Role
                            </button>
                        )}
                    </div>
                    {editPopup && (<AddUserPopup editPopup={editPopup} setEditpopup={setEditpopup} />)}
                </div>
            </div>




            <div className="w-full mt-10 p-4 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <div className="">
                    {activeTab === "userList" && <div><UserListTable /></div>}
                    {activeTab === "role" && <div><RolesTableList /></div>}
                </div>
            </div>
        </>
    )
}

export default Roles