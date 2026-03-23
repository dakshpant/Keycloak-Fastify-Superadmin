import { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import TextEditor from "../components/TextEditor/TextEditor";

const CmsPages = () => {
    const [activeTab, setActiveTab] = useState("userList");
    return (
        <>
            <Breadcrumb pageName="CMS Pages" />
            <form action="#">
                <div className="w-full mt-10 p-4 bg-white rounded-lg shadow-lg dark:border-strokedark dark:bg-boxdark border border-stroke border-tablebg">
                    <div className="flex justify-between">
                        <div className="flex">
                            <button
                                className={`py-2 px-4 text-sm text-center ${activeTab === "userList" ? "border-b-2 border-primary text-primary font-bold" : "text-black font-medium dark:text-white "}`}
                                onClick={() => setActiveTab("userList")}
                            >
                                Pravicy Policy
                            </button>
                            <button
                                className={`py-2 px-4 text-sm text-center ${activeTab === "role" ? "border-b-2 border-primary text-primary font-bold" : "text-black font-medium dark:text-white "}`}
                                onClick={() => setActiveTab("role")}
                            >
                                Terms & Conditions
                            </button>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md border border-primary py-2.5 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                            // onClick={() => { setEditpopup(true) }}
                            >
                                Reset
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                            // onClick={() => { navigate("/configurator/roles/addrole") }}
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-10 p-4 bg-white dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                    <div className="">
                        {activeTab === "userList" && 
                        <div className="">
                            <h1 className="text-xl font-bold text-black dark:text-white mb-3">Pravicy Policy</h1>
                            <TextEditor />
                        </div>}
                        {activeTab === "role" && 
                        <div>
                            <h1 className="text-xl font-bold text-black dark:text-white mb-3">Terms & Conditions</h1>
                            <TextEditor />
                        </div>}
                    </div>
                </div>
            </form>
        </>
    )
}

export default CmsPages;