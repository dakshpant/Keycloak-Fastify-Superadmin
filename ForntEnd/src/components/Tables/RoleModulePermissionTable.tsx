import { useState } from "react";

const modulePermission = [
    { module: 'Customers Management' },
    { module: 'Module Management' },
    { module: 'Website Management' },
    { module: 'Contact Forms' },
    { module: 'Invoices & Payments' },
]

const RoleModulePermission = () => {

    const [isChecked, setIsChecked] = useState(false)

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked)

    };
    return (
        <>
            <form action="#">
                <div className="mb-5.5">
                    <label
                        className="mb-3 block text-sm font-medium text-black dark:text-white"
                        htmlFor="rolename"
                    >
                        Role Name
                    </label>

                    <input
                        className="w-full rounded-lg border border-stroke py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary"
                        type="text"
                        name="rolename"
                        id="rolename"
                        // value={values.email}
                        // onChange={handleChange}
                        // onBlur={handleBlur}
                        placeholder="Enter Role Name"
                    />
                    {/* <div style={{ height: "10px", textAlign: "left" }}>
                            {errors.username && touched.username ? (
                                <p className="text-danger text-sm">{errors.username}</p>
                            ) : null}
                        </div> */}
                </div>
                <div className="mb-5.5">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-tablebg dark:bg-gray-700 dark:text-gray-400">
                                <tr className="text-nowrap">
                                    <th scope="col" className="px-2 py-3">
                                        Module Permission
                                    </th>
                                    <th scope="col" className="px-2 py-3">
                                        Permission
                                    </th>
                                    <th scope="col" className="px-2 py-3 text-center">
                                        Read
                                    </th>
                                    <th scope="col" className="px-2 py-3 text-center">
                                        Write
                                    </th>
                                    <th scope="col" className="px-2 py-3 text-center">
                                        Delete
                                    </th>
                                </tr>
                            </thead>
                            {modulePermission.map((ele, item) => (
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                                        <td className="px-2 py-4 flex items-start flex-col">
                                            <h3>{ele.module}</h3>
                                        </td>
                                        <td className="px-2 py-4">
                                            <label className='flex cursor-pointer select-none items-center'>
                                                <div className='relative'>
                                                    <input
                                                        type='checkbox'
                                                        checked={isChecked}
                                                        onChange={handleCheckboxChange}
                                                        className='sr-only'
                                                    />
                                                    <div
                                                        className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-primary' : 'bg-[#A3DDCB]'
                                                            }`}
                                                    ></div>
                                                    <div
                                                        className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''
                                                            }`}
                                                    ></div>
                                                </div>
                                            </label>
                                        </td>
                                        <td className="px-2 py-4 text-center">
                                            <input
                                                type="checkbox"
                                                className="" />
                                        </td>
                                        <td className="px-2 py-4 text-center">
                                            <input
                                                type="checkbox"
                                                className="" />
                                        </td>
                                        <td className="px-2 py-4 text-center">
                                            <input
                                                type="checkbox"
                                                className="" />
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="flex gap-2 justify-end mb-5.5">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md border border-primary py-2.5 px-10 text-center font-medium text-primary hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Cancle
                    </button>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-primary py-2.5 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    )
}

export default RoleModulePermission;


