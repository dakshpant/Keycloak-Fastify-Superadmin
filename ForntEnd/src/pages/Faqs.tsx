import { useState } from "react";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb"
import AddFaq from "../components/Popups/AddFaq";
import FaqTable from "../components/Tables/FaqTable";

const Faqs = () => {
    const [addFaqPopup, setAddFaqpopup] = useState(false);
    
    return (
        <>
            <Breadcrumb pageName="Faqs" />

            <div className='mb-4 shadow-md sm:rounded-lg rounded-lg border border-stroke border-tablebg bg-white px-5 py-3 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <div className="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between">
                    <h2 className="text-xl font-semibold text-black dark:text-white">
                        Manage FAQs
                    </h2>
                    <div className='flex gap-2 items-center'>
                        <button
                            className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                        onClick={()=>{setAddFaqpopup(true)}}
                        >
                            Add FAQ
                        </button>
                    </div>
                </div>
            </div>

            <div className='mb-4 shadow-md sm:rounded-lg rounded-lg border border-stroke border-tablebg bg-white px-5 py-3 shadow-default dark:border-strokedark dark:bg-boxdark'>
                <FaqTable/>
            </div>
            {addFaqPopup && (<AddFaq addFaqPopup={addFaqPopup} setAddFaqpopup={setAddFaqpopup} />)}
            
        </>
    )
}

export default Faqs