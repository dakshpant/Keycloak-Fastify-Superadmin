import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb"
import CustomerInfoCard from "../../components/Customer/CustomerInfoCard";

const ViewCustomer = () => {
    return(
        <>
        <Breadcrumb pageName="Customer" InnerpageName="Customer Details" />

        <div className="grid grid-cols-1">
            <CustomerInfoCard/>
        </div>

        </>
    )
}

export default ViewCustomer;