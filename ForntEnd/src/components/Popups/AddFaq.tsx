import { useState } from "react"
import { RiCloseCircleLine } from "react-icons/ri"
import { ToastContainer } from "react-toastify"
import { useFormik } from "formik";
import * as Yup from "yup";


const AddFaq = (props) => {
    const [loaderforfetching, setloaderforfetching] = useState()

    const initialValues = {
        question: "",
        answer: "",
    };

    const signUpSchema = Yup.object({
        question: Yup.string().required('Enter Question'),
        answer: Yup.string().required("Enter Answer"),
    });

    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
        useFormik({
            initialValues,
            validationSchema: signUpSchema,
            validateOnChange: true,
            validateOnBlur: false,
            onSubmit: (values) => {
                // console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
                console.log(values);
            },
        });
    return (
        <>
            <div
                className="relative z-999"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
            onClick={() => { props.setAddFaqpopup(false) }}
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
                                onClick={() => props.setAddFaqpopup(!props.addFaqPopup)}
                            >
                                <RiCloseCircleLine className="h-12 w-[23px]" />
                            </button>



                            <div className="bg-white rounded-lg dark:border-strokedark dark:bg-boxdark">

                                <div className="px-2 py-4 sm:p-4 bg-background dark:bg-gray-700 rounded-t-lg">
                                    <h3
                                        className="font-bold text-primary text-xl dark:text-white"
                                        id="modal-title"
                                    >
                                        Add FAQ
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
                                                    <form action="#" onSubmit={handleSubmit}>
                                                        <div className="mb-5.5">
                                                            <label
                                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                                htmlFor="question"
                                                            >
                                                                Question
                                                            </label>

                                                            <input
                                                                className="w-full rounded-lg border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                                type="text"
                                                                name="question"
                                                                id="question"
                                                                // value={values.email}
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                placeholder="Enter Title"
                                                            />
                                                            <div style={{ height: "10px", textAlign: "left" }}>
                                                                {errors.question && touched.question ? (
                                                                    <p className="text-danger text-sm">{errors.question}</p>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="mb-5.5">
                                                            <label
                                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                                htmlFor="email"
                                                            >
                                                                Answer
                                                            </label>
                                                            <textarea
                                                                className="w-full h-[120px] rounded-lg border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                                                                name="answer"
                                                                id="answer"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                placeholder="Enter Email"
                                                            >

                                                            </textarea>
                                                            <div style={{ height: "10px", textAlign: "left" }}>
                                                                {errors.answer && touched.answer ? (
                                                                    <p className="text-danger text-sm">{errors.answer}</p>
                                                                ) : null}
                                                            </div>
                                                        </div>
                                                        <div className="mb-5.5">
                                                            <label
                                                                className="mb-3 block text-sm font-medium text-black dark:text-white"
                                                            >
                                                                Faq is for:
                                                            </label>
                                                            <div className="relative z-20 w-full flex sm:gap-10 md:gap-20 items-center">
                                                                <div className="gap-2 flex items-center">
                                                                    <input
                                                                        type="radio"
                                                                        id="faqmobile"
                                                                        name="faqfor"
                                                                    />
                                                                    <label htmlFor="faqmobile">Mobile Only</label>
                                                                </div>
                                                                <div className="gap-2 flex items-center">
                                                                    <input
                                                                        type="radio"
                                                                        id="faqweb"
                                                                        name="faqfor"
                                                                    />
                                                                    <label htmlFor="faqweb">Web Only</label>
                                                                </div>
                                                                <div className="gap-2 flex items-center">
                                                                    <input
                                                                        type="radio"
                                                                        id="faqboth"
                                                                        name="faqfor"
                                                                    />
                                                                    <label htmlFor="faqboth">Both Mobile and Web</label>
                                                                </div>
                                                            </div>
                                                            {/* <div style={{ height: "10px", textAlign: "left" }}>
                                                                {errors.role && touched.role ? (
                                                                    <p className="text-danger text-sm">{errors.role}</p>
                                                                ) : null}
                                                            </div> */}
                                                        </div>
                                                        <div className="flex gap-2 justify-end">
                                                            <button
                                                                onClick={() => props.setAddFaqpopup(!props.addFaqPopup)}
                                                                className="inline-flex items-center justify-center rounded-md border border-primary py-2.5 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                                                            >
                                                                Cancle
                                                            </button>
                                                            <button
                                                                className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                                                            >
                                                                Save
                                                            </button>
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

export default AddFaq