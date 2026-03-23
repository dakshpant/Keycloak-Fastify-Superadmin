import { FaPlusCircle } from "react-icons/fa"
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb"

const VisualElement = () => {
    return(
        <>
        <Breadcrumb pageName="Visual Element" />
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-4">
            <div className="dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <div className="flex justify-between items-center p-2 border-b">
                    <h2 className="text-gray-500 font-bold text-md">Logo Management</h2>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                        Update
                    </button>
                </div>

            </div>
            <div className="dark:border-strokedark dark:bg-boxdark rounded-lg shadow-lg border border-stroke border-tablebg">
                <div className="flex justify-between items-center p-2 border-b">
                    <h2 className="text-gray-500 font-bold text-md">Social Management</h2>
                    <button><FaPlusCircle /></button>
                    <button className="inline-flex items-center justify-center rounded-md bg-primary py-2 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10">
                        Update
                    </button>
                </div>
                
            </div>
        </div>
        <div className="col-span-12 xl:col-span-8">
        </div>
        </div>
        </>
    )
}

export default VisualElement