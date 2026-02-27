
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, deleteUser, updateUser } from "../../redux/slices/adminSlice";

const UserManagement = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  const { user} = useSelector((state) => state.auth);
  const {users, loading, error} = useSelector((state) => state.admin);

  useEffect(() =>{
    if (user && user.role!== "admin"){
      navigate("/")
    }
  },[user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "customer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));

    setFormData({ name: "", email: "", password: "", role: "customer" });
  };

  const handleRoleChange = (userId, newRole) => {
dispatch(updateUser({id: userId, role: newRole}));
  };

  const handleDeleteUser = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
    dispatch(deleteUser(userId))
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6 text-gray-100">
      <div className="max-w-5xl mx-auto">  {/* FIXED WIDTH FOR BIG SCREENS */}

        {/* Page Title */}
        <h2 className="text-4xl font-extrabold mb-8 tracking-wide animate-fadeIn
                       bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">
          User Management
        </h2>

        {loading && <p>Loading...</p> }
        {error && <p>Error: {error}...</p> }

        {/* Add User Section */}
        <div className="backdrop-blur-xl bg-gray-800/70 shadow-xl rounded-2xl p-6 mb-10 
                        border border-gray-700 animate-slideUp">
          <h3 className="text-xl font-semibold mb-4 text-gray-200">
            Add New User
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                             focus:ring-2 focus:ring-blue-500 outline-none transition"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                             focus:ring-2 focus:ring-blue-500 outline-none transition"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                             focus:ring-2 focus:ring-blue-500 outline-none transition"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Role</label>
                <select
                  name="role"
                  className="w-full p-3 rounded-xl bg-gray-900 border border-gray-700 
                             focus:ring-2 focus:ring-blue-500 outline-none transition"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 bg-blue-600 hover:bg-blue-700 w-full py-3 rounded-xl shadow 
                         transition transform hover:-translate-y-1"
            >
              Add User
            </button>
          </form>
        </div>

        {/* User Table */}
        <div className="overflow-x-auto backdrop-blur-xl bg-gray-800/80 shadow-xl 
                        border border-gray-700 rounded-2xl animate-slideUp">
          <table className="min-w-full">
            <thead className="bg-gray-700  text-gray-200 text-sm uppercase">
              <tr>
                <th className="p-4 text-start">Name</th>
                <th className="p-4 text-start">Email</th>
                <th className="p-4 text-start">Role</th>
                <th className="p-4 text-start">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user, index) => (
                <tr
                  key={user._id}
                  className="border-b border-gray-700 hover:bg-gray-700/50 transition 
                             animate-fadeRow"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <td className="p-4 font-semibold">{user.name}</td>
                  <td className="p-4">{user.email}</td>

                  <td className="p-4">
                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRoleChange(user._id, e.target.value)
                      }
                      className="p-2 bg-gray-900 border border-gray-700 rounded-lg"
                    >
                      <option value="customer">Customer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 
                                 rounded-lg shadow transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>

      {/* animations */}
      <style>
        {`
          .animate-fadeIn {
            animation: fadeIn 0.7s ease-in-out;
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-slideUp {
            animation: slideUp 0.6s ease-in-out;
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          .animate-fadeRow {
            animation: fadeRow 0.5s ease forwards;
            opacity: 0;
          }
          @keyframes fadeRow {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default UserManagement;
