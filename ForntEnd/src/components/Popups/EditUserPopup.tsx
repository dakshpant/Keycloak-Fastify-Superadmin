import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { ToastContainer, toast } from "react-toastify";
import * as Yup from "yup";

import {
    updateUser,
    updateUserRole,
} from "../../api/users.api";

const EditUserPopup = ({ user, setEditpopup, onUpdate }: any) => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            role: "",
        },

        validationSchema: Yup.object({
            username: Yup.string().required("Enter Username"),
            email: Yup.string()
                .email("Must be a valid email")
                .required("Enter Email"),
            role: Yup.string().required("Select Role"),
        }),

        onSubmit: async (values) => {
            console.log("FORM SUBMITTED", values);
            try {
                setLoading(true);

                const firstName = values.username.split(" ")[0];
                const lastName = values.username.split(" ").slice(1).join(" ");

                //UPDATE BASIC INFO
                await updateUser(user.id, {
                    firstName,
                    lastName,
                    email: values.email,
                });

                //UPDATE ROLE (ONLY IF CHANGED)
                if (values.role && values.role !== user.role) {
                    await updateUserRole(user.id, values.role);
                }

                toast.success("User updated successfully");

                onUpdate(); // refresh table
                setEditpopup(false);
            } catch (err) {
                console.error(err);
                toast.error("Update failed");
            } finally {
                setLoading(false);
            }
        },
    });

    //PREFILL DATA
    useEffect(() => {
        if (user) {
            formik.setValues({
                username: user.fullname || "",
                email: user.email || "",
                role: user.role || "",
            });
        }
    }, [user]);

    return (
        <>
            <div className="relative z-999">
                <div className="fixed inset-0 bg-gray-500/75"></div>

                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-xl w-[500px] p-6">

                        {/* CLOSE BUTTON */}
                        <button
                            type="button"
                            className="float-right"
                            onClick={() => setEditpopup(false)}
                        >
                            <RiCloseCircleLine className="h-6 w-6" />
                        </button>

                        <h2 className="text-xl font-bold mb-4">Edit User</h2>

                        <form onSubmit={formik.handleSubmit}>

                            {/* USERNAME */}
                            <input
                                type="text"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                className="w-full border p-2 mb-2"
                                placeholder="Username"
                            />
                            {formik.errors.username && (
                                <p className="text-red-500 text-sm">
                                    {formik.errors.username}
                                </p>
                            )}

                            {/* EMAIL */}
                            <input
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                className="w-full border p-2 mb-2"
                                placeholder="Email"
                            />
                            {formik.errors.email && (
                                <p className="text-red-500 text-sm">
                                    {formik.errors.email}
                                </p>
                            )}

                            {/* ROLE */}
                            <select
                                name="role"
                                value={formik.values.role}
                                onChange={formik.handleChange}
                                className="w-full border p-2 mb-4"
                            >
                                <option value="">Select Role</option>
                                <option value="superadmin">Super Admin</option>
                                <option value="hr">HR</option>
                                <option value="employee">Employee</option>
                            </select>

                            {/* BUTTONS */}
                            <div className="flex justify-end gap-2">
                                <button
                                    type="button"
                                    onClick={() => setEditpopup(false)}
                                    className="border px-4 py-2"
                                >
                                    Cancel
                                </button>

                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2"
                                    disabled={loading}
                                >
                                    {loading ? "Updating..." : "Save"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <ToastContainer />
            </div>
        </>
    );
};

export default EditUserPopup;