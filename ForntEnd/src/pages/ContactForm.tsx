import { FiUsers } from "react-icons/fi";
import { RiBuildingLine } from "react-icons/ri";
import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import ContactFormTable from "../components/Tables/ContactFormTable";

const ContactFormCard = [
    { id: '0', Name: "Total Users(All organizations overall users)", Count: '600', icon: <RiBuildingLine size="16px" className='text-primary' /> },
    { id: '1', Name: "Active Users ( Active within the last 30 days)", Count: '500', icon: <RiBuildingLine size="16px" className='text-primary' /> },
    { id: '2', Name: "Total Organization (Org. using the HRMS system)", Count: '100', icon: <FiUsers size="16px" className='text-primary' /> },
    { id: '3', Name: "Total Subscription (Number of active plans)", Count: '80', icon: <RiBuildingLine size="16px" className='text-primary' /> },
];

const ContactForm = () => {
    return (
        <>
            <Breadcrumb pageName="Contact Form" />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                {ContactFormCard.map((ele, item) => {
                    return (

                        <div className='dashcardbox flex justify-center items-center bg-white shadow-xs rounded-sm relative overflow-hidden'>
                            <div className='icon-area w-[100%] sm:w-[100%] md:w-[90%] lg:w-[80%] xl:w-[80%] h-full'><div className='icon-section w-full flex items-center justify-center relative h-full'>{ele.icon}</div></div>
                            <div className='text-section grow ml-[-10px] h-full p-[10px]'>
                                <h3 className='text-sm leading-[1.4em] text-black text-right'>{ele.Name}</h3>
                                <p className='text-2xl font-bold text-primary text-right'>{ele.Count}</p>
                            </div>
                        </div>

                    );
                })
                }
            </div>

            <div className="grid grid-cols-1 mt-4 ">
        <ContactFormTable/>
      </div>
        </>
    )
}

export default ContactForm