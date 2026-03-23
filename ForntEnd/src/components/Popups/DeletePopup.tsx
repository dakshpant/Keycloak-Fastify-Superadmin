import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const DeletePopup = ({ setDeletepopup, onDelete }: any) => {
    const [loading, setLoading] = useState(false);

    const handleDeleteClick = async () => {
        try {
            setLoading(true);

            await onDelete(); // 🔥 CALL BACKEND DELETE

            toast.success("User deleted successfully");
            setDeletepopup(false); // close popup
        } catch (err) {
            console.error(err);
            toast.error("Failed to delete user");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="relative z-999" role="dialog" aria-modal="true">
                {/* BACKDROP */}
                <div className="fixed inset-0 bg-gray-500/75"></div>

                {/* MODAL */}
                <div className="fixed inset-0 z-10 flex items-center justify-center">
                    <div className="bg-white rounded-lg shadow-xl w-[400px] p-6">

                        <h3 className="text-xl font-bold text-primary mb-4">
                            Are you sure?
                        </h3>

                        {/* LOADING */}
                        {loading ? (
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    className="animate-spin h-10 w-10 text-blue-500"
                                    viewBox="0 0 24 24"
                                ></svg>
                                <p className="mt-2">Deleting...</p>
                            </div>
                        ) : (
                            <>
                                <p className="mb-6">
                                    Are you sure you want to delete this user?
                                </p>

                                {/* BUTTONS */}
                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={() => setDeletepopup(false)}
                                        className="border px-4 py-2 rounded-md"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        onClick={handleDeleteClick}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </>
                        )}
                    </div>
                </div>

                <ToastContainer />
            </div>
        </>
    );
};

export default DeletePopup;