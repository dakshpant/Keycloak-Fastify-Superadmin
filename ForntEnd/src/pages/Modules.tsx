import Breadcrumb from "../components/Breadcrumbs/Breadcrumb";
import ModulesCard from "../components/ModulesCard";

const Modules = () => {
    return(
        <>
        <Breadcrumb pageName="Modules" />

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
            <ModulesCard/>
        </div>
        </>
    )
};

export default Modules