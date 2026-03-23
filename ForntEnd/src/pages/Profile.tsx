import { useEffect, useState } from "react"; // ✅ ADD
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link } from 'react-router-dom';
import { userProfile } from "../api/auth.api"; // ✅ ADD

const Profile = () => {

  const [user, setUser] = useState<any>(null); // ✅ ADD

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await userProfile();
        console.log("PROFILE:", data);
        setUser(data);
      } catch (err) {
        console.error("PROFILE ERROR:", err);
      }
    };

    fetchProfile();
  }, []);

  return (
    <>
      <Breadcrumb pageName="Profile" />

      <div className="overflow-hidden rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="relative z-20 h-35 md:h-65">
          <img
            src={CoverOne}
            alt="profile cover"
            className="h-full w-full rounded-tl-sm rounded-tr-sm object-cover object-center"
          />
          <div className="absolute bottom-1 right-1 z-10 xsm:bottom-4 xsm:right-4">
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded bg-primary py-1 px-2 text-sm font-medium text-white hover:bg-opacity-90 xsm:px-4">
              <input type="file" className="sr-only" />
              <span>Edit</span>
            </label>
          </div>
        </div>

        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11.5">
          <div className="relative z-30 mx-auto -mt-22 h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="relative drop-shadow-2">
              <img src={userSix} alt="profile" />
            </div>
          </div>

          <div className="mt-4">

            {/* ✅ ONLY THIS CHANGED */}
            <h3 className="mb-1.5 text-2xl font-semibold text-black dark:text-white">
              {user?.username || "Danish Heilium"}
            </h3>

            {/* ✅ ONLY THIS CHANGED */}
            <p className="font-medium">
              {user?.roles?.[2] || "Ui/Ux Designer"}
            </p>

            {/* (optional email if you want later)
            <p className="text-gray-500">{user?.email}</p>
            */}

            <div className="mx-auto max-w-180">
              <h4 className="font-semibold">About Me</h4>
              <p className="mt-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            {/* social icons unchanged */}
            {/* <div className="mt-6.5">
              <h4 className="mb-3.5 font-medium">Follow me on</h4>
              <div className="flex justify-center gap-3.5">
                <Link to="#">FB</Link>
                <Link to="#">TW</Link>
                <Link to="#">IN</Link>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;