
import { useState, useEffect } from "react";
import { FiEdit3 } from "react-icons/fi";
import {
    MdDeleteOutline,
} from "react-icons/md";

import EditUserPopup from "../Popups/EditUserPopup";
import DeletePopup from "../Popups/DeletePopup";

import {
    getUsers,
    deleteUser,
    updateUser,
} from "../../api/users.api";

const UserListTable = () => {
    const [deletePopup, setDeletepopup] = useState(false);
    const [editPopup, setEditpopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState<any>(null);

    const [searchQuery, setSearchQuery] = useState("");
    const [sortConfig, setSortConfig] = useState({
        key: null,
        direction: "asc",
    });

    const [userList, setUserList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // ✅ FETCH USERS
    const fetchUsers = async () => {
        try {
            setLoading(true);

            const data = await getUsers();

            const formattedUsers = data.map((user: any) => ({
                id: user.id,
                fullname:
                    `${user.firstName || ""} ${user.lastName || ""}`.trim() || "N/A",
                email: user.email || "N/A",
                role: user.roles?.[0] || "User",
                requestDate: user.createdTimestamp
                    ? new Date(user.createdTimestamp).toLocaleDateString("en-IN")
                    : "N/A",
                enabled: user.enabled,
            }));

            setUserList(formattedUsers);
        } catch (error) {
            console.error("Error fetching users:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    // ✅ SEARCH
    const handleSearch = (event: any) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    // ✅ SORT
    const handleSort = (key: string) => {
        setSortConfig((prev: any) => ({
            key,
            direction:
                prev.key === key && prev.direction === "asc" ? "desc" : "asc",
        }));
    };

    // ✅ FILTER
    const filteredUsers = userList.filter((user) =>
        user.fullname.toLowerCase().includes(searchQuery) ||
        user.email.toLowerCase().includes(searchQuery) ||
        user.role.toLowerCase().includes(searchQuery)
    );

    // ✅ SORTED
    const sortedUsers = [...filteredUsers].sort((a: any, b: any) => {
        if (!sortConfig.key) return 0;

        const valueA = a[sortConfig.key]?.toLowerCase?.() || "";
        const valueB = b[sortConfig.key]?.toLowerCase?.() || "";

        if (sortConfig.direction === "asc") {
            return valueA > valueB ? 1 : -1;
        } else {
            return valueA < valueB ? 1 : -1;
        }
    });

    // ✅ TOGGLE STATUS (Optimistic)
    const handleToggle = async (user: any) => {
        try {
            // instant UI update
            setUserList((prev) =>
                prev.map((u) =>
                    u.id === user.id ? { ...u, enabled: !u.enabled } : u
                )
            );

            await updateUser(user.id, {
                enabled: !user.enabled,
            });
        } catch (err) {
            console.error(err);
            fetchUsers(); // rollback if error
        }
    };

    // ✅ DELETE USER
    const handleDelete = async () => {
        try {
            await deleteUser(selectedUser.id);
            setDeletepopup(false);
            fetchUsers();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            {/* 🔍 FILTER + LIMIT */}
            <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                    <p>Show</p>
                    <select className="border rounded-lg px-3 py-2">
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                    </select>
                </div>

                <input
                    type="text"
                    className="p-2 border rounded-lg w-80"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                />
            </div>

            {/* ⏳ LOADING */}
            {loading && <p>Loading users...</p>}

            {/* 📊 TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-100 text-xs uppercase">
                        <tr>
                            <th
                                onClick={() => handleSort("fullname")}
                                className="px-6 py-3 cursor-pointer"
                            >
                                Full Name
                            </th>
                            <th
                                onClick={() => handleSort("email")}
                                className="px-6 py-3 cursor-pointer"
                            >
                                Email
                            </th>
                            <th
                                onClick={() => handleSort("role")}
                                className="px-6 py-3 cursor-pointer"
                            >
                                Role
                            </th>
                            <th
                                onClick={() => handleSort("requestDate")}
                                className="px-6 py-3 cursor-pointer"
                            >
                                Registered On
                            </th>
                            <th>Status</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {sortedUsers.map((ele) => (
                            <tr key={ele.id} className="border-b hover:bg-gray-50">
                                <td className="px-6 py-4">{ele.fullname}</td>
                                <td className="px-6 py-4">{ele.email}</td>
                                <td className="px-6 py-4">{ele.role}</td>
                                <td className="px-6 py-4">{ele.requestDate}</td>

                                {/* ✅ STATUS */}
                                <td className="px-6 py-4">
                                    <input
                                        type="checkbox"
                                        checked={ele.enabled}
                                        onChange={() => handleToggle(ele)}
                                    />
                                </td>

                                {/* ✅ ACTION */}
                                <td className="px-6 py-4">
                                    <div className="flex gap-2 justify-center">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedUser(ele);
                                                setEditpopup(true);
                                            }}
                                            className="bg-[#D9F3EE] p-1.5 rounded-full"
                                        >
                                            <FiEdit3 />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setSelectedUser(ele);
                                                setDeletepopup(true);
                                            }}
                                            className="bg-[#FFE3E3] p-1.5 rounded-full"
                                        >
                                            <MdDeleteOutline />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ✏️ EDIT POPUP */}
            {editPopup && (
                <EditUserPopup
                    user={selectedUser}
                    setEditpopup={setEditpopup}
                    onUpdate={fetchUsers}
                />
            )}

            {/* 🗑 DELETE POPUP */}
            {deletePopup && (
                <DeletePopup
                    setDeletepopup={setDeletepopup}
                    onDelete={handleDelete}
                />
            )}
        </>
    );
};

export default UserListTable;
