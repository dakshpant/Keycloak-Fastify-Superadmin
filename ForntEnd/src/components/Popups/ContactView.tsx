import { useState } from "react"
import { MdEditSquare } from "react-icons/md"
import { RiCloseCircleLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"

const ConatctView = (props) => {

  const [loaderforfetching, setloaderforfetching] = useState()
  return (
    <>
      <div
        className="relative z-999"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      // onClick={() => { props.setEditpopup(false) }}
      >
        <div
          className="fixed inset-0 bg-gray-500/75 transition-opacity"
          aria-hidden="true"

        ></div>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
          >
            <div className="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[47rem]">
              <button
                className="float-right mr-4"
                onClick={() => props.setEditpopup(!props.editPopup)}
              >
                <RiCloseCircleLine className="h-12 w-[23px]" />
              </button>



              <div className="bg-white rounded-lg dark:border-strokedark dark:bg-boxdark">

                <div className="px-2 py-4 sm:p-4 bg-background dark:bg-gray-700 rounded-t-lg">
                  <h3
                    className="font-bold text-primary text-white text-xl"
                    id="modal-title"
                  >
                    Request Detail
                  </h3>
                </div>

                <div className="sm:items-start">
                  {loaderforfetching ? (


                    <div className="flex flex-col justify-center items-center h-full">
                      {' '}
                      <svg
                        aria-hidden="true"
                        role="status"
                        className="inline w-14 h-12 text-[#3c50e0] animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        ></path>
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                      <p className="mt-4">Loading....</p>{' '}
                    </div>
                  ) : (
                    <>
                      {' '}
                      <div className="mt-3 px-2 py-4 sm:p-4 sm:mt-0 sm:ml-4 sm:text-left">
                        <div className="mt-2">
                          {' '}
                          <div className="flex justify-between items-center my-3">
                            <h4>Request Id:</h4>
                            <p className="text-sm text-right w-[70%]">#000</p>
                          </div>
                          <div className="flex justify-between items-center my-3">
                            <h4>Request Date:</h4>
                            <p className="text-sm text-right w-[70%]">12 May 2025</p>
                          </div>
                          <div className="flex justify-between items-center my-3">
                            <h4>Name:</h4>
                            <p className="text-sm text-right w-[70%]">Nisha Singh</p>
                          </div>
                          <div className="flex justify-between items-center my-3">
                            <h4>Phone Number:</h4>
                            <p className="text-sm text-right w-[70%]">1234567890</p>
                          </div>
                          <div className="flex justify-between items-center my-3">
                            <h4>Email:</h4>
                            <p className="text-sm text-right w-[70%]">NishaSingh@vmstechs.com</p>
                          </div>
                          <div className="flex justify-between my-3">
                            <h4>Message:</h4>
                            <p className="text-sm text-right w-[70%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis nisl cursus bibendum sit nulla accumsan sodales ornare. At urna viverra non suspendisse neque, lorem. Pretium condimentum pellentesque gravida id etiam sit sed arcu euismod. Rhoncus proin orci duis scelerisque molestie cursus tincidunt aliquam.</p>
                          </div>
                          <form action="#">
                            <div className="mb-5.5">
                              <label
                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                htmlFor="changestatus"
                              >
                                Change Status
                              </label>
                              <div className="relative z-20 inline-block w-full">
                                <select
                                  name="#"
                                  id="#"
                                  className="relative w-full z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 py-2 border border-solid border-[#DEE1E6] rounded-lg text-sm font-medium outline-none"
                                >
                                  <option value="" className='dark:bg-boxdark selected'>All</option>
                                  <option value="" className='dark:bg-boxdark'>New </option>
                                  <option value="" className='dark:bg-boxdark'>Contacted</option>
                                  <option value="" className='dark:bg-boxdark'>Scheduled For Demo</option>
                                  <option value="" className='dark:bg-boxdark'>Not Responded</option>
                                  <option value="" className='dark:bg-boxdark'>Closed</option>
                                  <option value="" className='dark:bg-boxdark'>Converted</option>
                                </select>
                                <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                                  <svg
                                    width="10"
                                    height="6"
                                    viewBox="0 0 10 6"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z"
                                      fill="#637381"
                                    />
                                    <path
                                      fillRule="evenodd"
                                      clipRule="evenodd"
                                      d="M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z"
                                      fill="#637381"
                                    />
                                  </svg>
                                </span>
                              </div>
                            </div>
                            <div className="flex gap-2 justify-end">
                              <Link
                                to="#"
                                onClick={() => props.setEditpopup(!props.editPopup)}
                                className="inline-flex items-center justify-center rounded-md border border-primary py-2.5 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                              >
                                Cancle
                              </Link>
                              <Link
                                to="#"
                                className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                              >
                                Save
                              </Link>
                            </div>
                          </form>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>


            </div>
          </div>
          <ToastContainer />

        </div>
      </div>
    </>
  )
}

export default ConatctView