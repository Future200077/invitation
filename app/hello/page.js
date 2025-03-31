"use client";
import { useState, useEffect } from "react";
import Spinner from "@/components/spinner/Spinner";

export default function HelloPage() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [savedUsers, setSavedUsers] = useState([]);
  const [showExtraFields, setShowExtraFields] = useState(false);
  const [showSavedUsers, setShowSavedUsers] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(0); // Force component re-render

  // Pagination for GitHub users
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const usersPerPage = 10;

  // Pagination for Saved Users
  const [savedPage, setSavedPage] = useState(1);
  const [savedTotalPages, setSavedTotalPages] = useState(1);
  const savedUsersPerPage = 6;

  const resetState = () => {
    setUsername("");
    setLocation("");
    setUsers([]);
    setPage(1);
    setShowExtraFields(false);
    setShowSavedUsers(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    resetState();
    setShowExtraFields(true);
  };

  // Fetch users based on location
  const fetchUsers = async () => {
    if (!location) return;
    setLoading(true);
    setUsers([]);

    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=location:${location}&per_page=${usersPerPage}&page=${page}`
      );
      const data = await res.json();
      if (data.items) {
        setUsers(data.items);
        setTotalPages(Math.ceil(data.total_count / usersPerPage));
      }
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (location) fetchUsers();
  }, [location, page]);

  // Fetch saved users
  // const fetchSavedUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("/api/github/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ userNames: savedUsers.map((u) => u.login) }),
  //     });

  //     if (res.ok) {
  //       const data = await res.json();
  //       if (data.user) {
  //         setSavedUsers(data.user);
  //         setSavedTotalPages(Math.ceil(data.user.length / savedUsersPerPage));
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error fetching saved users info:", error);
  //   }
  //   setLoading(false);
  // };


  // const fetchSavedUsers = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("/api/github/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ userName: savedUsers.map((u) => u.login) }),
  //     });

  //     if (res.ok) {
  //       const data = await res.json();
  //       if (data.user) {
  //         setSavedUsers(data.user.map(user => ({
  //           ...user,
  //           email: user.email || "Email hidden"
  //         })));
  //         setSavedTotalPages(Math.ceil(data.user.length / savedUsersPerPage));
  //       }
  //     }
  //   } catch (error) {
  //     console.error("Error fetching saved users info:", error);
  //   }
  //   setLoading(false);
  // };


  const fetchSavedUsers = async () => {
    setLoading(true);
    try {
      const updatedSavedUsers = [];

      for (const user of savedUsers) {
        const res = await fetch("/api/github/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ userName: user.login }),
        });

        if (res.ok) {
          const data = await res.json();
          if (data.user) {
            updatedSavedUsers.push({ ...user, email: data.user.emails?.[0] || "No email" });
          }
        }
      }

      setSavedUsers(updatedSavedUsers);
      setSavedTotalPages(Math.ceil(updatedSavedUsers.length / savedUsersPerPage));
    } catch (error) {
      console.error("Error fetching saved users info:", error);
    }
    setLoading(false);
  };


  // Toggle Saved Users
  const toggleSavedUsers = () => {
    setShowSavedUsers(!showSavedUsers);
    if (!showSavedUsers) fetchSavedUsers();
  };

  // Save or remove user
  const handleSaveUser = async (user) => {
    const isSaved = savedUsers.some((u) => u.login === user.login);

    if (isSaved) {
      try {
        const res = await fetch("/api/save/", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ login: user.login }),
        });

        if (res.ok) {
          setSavedUsers((prevUsers) => prevUsers.filter((u) => u.login !== user.login));
          setForceUpdate((prev) => prev + 1); // Force re-render
        }
      } catch (error) {
        console.error("Error removing saved user:", error);
      }
    } else {
      try {
        const res = await fetch("/api/save/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            login: user.login,
            avatar_url: user.avatar_url,
            html_url: user.html_url,
          }),
        });

        if (res.ok) {
          const text = await res.text();
          const data = text ? JSON.parse(text) : {};

          if (res.status === 201) {
            setSavedUsers((prevUsers) => [...prevUsers, user]);
            setForceUpdate((prev) => prev + 1); // Force re-render
          }
        }
      } catch (error) {
        console.error("Error saving user:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center m-4 p-6 bg-white shadow-lg rounded-xl w-[50rem]">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">GitHub Users</h1>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="w-full">
        <input
          type="text"
          placeholder="Search by username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg"
        />

        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-500 text-white p-3 rounded-lg">
            🔍 Search
          </button>
          <button type="button" onClick={toggleSavedUsers} className="bg-green-500 text-white p-3 rounded-lg">
            👤 Users
          </button>
        </div>

        {showExtraFields && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onBlur={fetchUsers}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        )}
      </form>

      {loading && <Spinner />}

      {/* GitHub Users with Pagination */}
      {!showSavedUsers && users.length > 0 && (
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold mb-3">Users in {location}</h2>
          <div className="grid grid-cols-2 gap-4">
            {users.map((user) => (
              <div key={user.id} className="p-3 border rounded-lg flex justify-between">
                <div className="flex items-center">
                  <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full mr-3" />
                  <a href={user.html_url} className="text-blue-500">{user.login}</a>
                </div>
                <button
                  className={`px-4 py-2 rounded-lg transition ${
                    savedUsers.some((u) => u.login === user.login)
                      ? "bg-gray-500 text-white hover:bg-gray-600"
                      : "bg-yellow-500 text-white hover:bg-yellow-600"
                  }`}
                  onClick={() => handleSaveUser(user)}
                >
                  {savedUsers.some((u) => u.login === user.login) ? "Saved" : "Save"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Saved Users with Pagination */}
      {showSavedUsers && savedUsers.length > 0 && (
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold mb-3">⭐ Saved Users</h2>
          <div className="grid grid-cols-2 gap-4">
            {savedUsers.slice((savedPage - 1) * savedUsersPerPage, savedPage * savedUsersPerPage).map((user) => (
              <div key={user.id} className="p-4 border rounded-lg flex flex-col items-center">
                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2" />
                <p>{user.login} ({user.email || "No email"})</p>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-4 flex justify-between">
            <button disabled={savedPage === 1} onClick={() => setSavedPage(savedPage - 1)}>Prev</button>
            <span>Page {savedPage} of {savedTotalPages}</span>
            <button disabled={savedPage === savedTotalPages} onClick={() => setSavedPage(savedPage + 1)}>Next</button>
          </div>
        </div>
      )}

    </div>
  );
}

      