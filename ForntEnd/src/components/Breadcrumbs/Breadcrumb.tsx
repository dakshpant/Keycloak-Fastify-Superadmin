import { Link, useNavigate } from 'react-router-dom';
import { MdArrowBack, MdArrowBackIos, MdKeyboardArrowRight, MdOutlineArrowBackIos } from "react-icons/md";
import { RiHome6Line } from "react-icons/ri";

interface BreadcrumbProps {
  pageName: string;
  InnerpageName?: string;
}
const Breadcrumb = ({ pageName, InnerpageName }: BreadcrumbProps) => {
  const navigate = useNavigate();
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white flex items-center gap-2">
      {InnerpageName && (
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-primary-dark"
          >
            <MdOutlineArrowBackIos className='text-center flex items-center bg-primary justify-center m-auto p-1 rounded-full w-[24px] h-[24px]'/>
          </button>
        )}
      {InnerpageName || pageName}
      </h2>

      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium" to="/">
              <RiHome6Line />
            </Link>
          </li>
          <li><MdKeyboardArrowRight /></li>
          <li className="font-medium text-primary">
            <Link to={`/${pageName.toLowerCase()}`}>{pageName}
            </Link>
          </li>
          {InnerpageName && (
            <>
              <li><MdKeyboardArrowRight /></li>
              <li className="font-medium text-primary">{InnerpageName}</li>
            </>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
