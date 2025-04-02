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

  // Pagination for GitHub users
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);  // Changed to 1 initially 🔥
  const usersPerPage = 10; // Changed to 10 users per page
  const [inputPage, setInputPage] = useState("");

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

  // Generate date ranges from 2018-01 to 2024-12 (one per month)
  const generateDateRanges = () => {
    const dateRanges = [];
    for (let year = 2018; year <= 2024; year++) {
      for (let month = 1; month <= 12; month++) {
        const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
        const endDate = `${year}-${String(month).padStart(2, "0")}-31`;
        dateRanges.push({ start: startDate, end: endDate });
      }
    }
    return dateRanges;
  };

  // Fetch all GitHub users in parallel with different created date ranges
  const fetchAllUsers = async () => {
    if (!location.trim()) return;
    setLoading(true);
    setUsers([]);

    const dateRanges = generateDateRanges();
    const apiRequests = dateRanges.map(async ({ start, end }) => {
      const url = `https://api.github.com/search/users?q=location:${location}+created:${start}..${end}&per_page=100&page=${page}`;

      try {
        const res = await fetch(url);

        // Handle rate-limiting by checking the response
        if (!res.ok) {
          if (res.status === 403) {
            const retryAfter = res.headers.get("X-RateLimit-Reset");
            console.warn("Rate limited! Try again after:", retryAfter);
            return [];
          }
          console.error("Error fetching users for date range:", start, "to", end, res.status);
          return [];
        }

        const data = await res.json();
        return data.items || [];
      } catch (error) {
        console.error("Error fetching users for date range:", start, "to", end, error);
        return [];
      }
    });

    try {
      const results = await Promise.all(apiRequests);
      const mergedUsers = results.flat(); // Flatten the array of arrays

      // Calculate unique users based on ID 🔥
      const uniqueUsers = Array.from(new Map(mergedUsers.map(user => [user.id, user])).values()); // Remove duplicates
      setUsers(uniqueUsers);
      
      // Calculate total pages 🔥
      const totalResults = uniqueUsers.length;
      setTotalPages(Math.ceil(totalResults / usersPerPage)); // Adjusted the calculation of total pages
      setPage(1); // Reset to first page
    } catch (error) {
      console.error("Error fetching GitHub users:", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (location) fetchAllUsers();
  }, [page]);

  const handlePageInput = (e) => {
    setInputPage(e.target.value);
  };

  const handlePageJump = (e) => {
    if (e.key === "Enter") {
      const newPage = Number(inputPage);
      if (newPage >= 1 && newPage <= totalPages) {
        setPage(newPage);
      }
    }
  };
  
  // Fetch saved users
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
          setSavedUsers((prevUsers) => [...prevUsers, user]);
        }
      } catch (error) {
        console.error("Error saving user:", error);
      }
    }
  };

  // Handle pressing "Enter" in location input
  const handleLocationKeyPress = (e) => {
    if (e.key === "Enter" && location.trim()) {
      e.preventDefault();
      fetchAllUsers();
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
              onKeyDown={handleLocationKeyPress}
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
            {users.slice((page - 1) * usersPerPage, page * usersPerPage).map((user) => (
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

          {/* Pagination Controls with Page Jump */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage(Math.max(page - 1, 1))}
              className="bg-gray-300 p-2 rounded-lg"
              disabled={page === 1}
            >
              Prev
            </button>
            <div className="flex items-center">
              <span>Page:</span>
              <input
                type="number"
                value={inputPage || page}
                onChange={handlePageInput}
                onKeyDown={handlePageJump}
                className="w-16 p-2 ml-2 border rounded-lg text-center"
                min={1}
                max={totalPages}
              />
              <span>/{totalPages}</span>
            </div>
            <button
              onClick={() => setPage(Math.min(page + 1, totalPages))}
              className="bg-gray-300 p-2 rounded-lg"
              disabled={page === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Saved Users */}
      {showSavedUsers && savedUsers.length > 0 && (
        <div className="w-full mt-6">
          <h2 className="text-xl font-semibold mb-3">Saved Users</h2>
          <div className="grid grid-cols-2 gap-4">
            {savedUsers.slice((savedPage - 1) * savedUsersPerPage, savedPage * savedUsersPerPage).map((user) => (
              <div key={user.login} className="p-3 border rounded-lg flex justify-between">
                <div className="flex items-center">
                  <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full mr-3" />
                  <a href={user.html_url} className="text-blue-500">{user.login}</a>
                </div>
              </div>
            ))}
          </div>

          {/* Saved Users Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setSavedPage(Math.max(savedPage - 1, 1))}
              className="bg-gray-300 p-2 rounded-lg"
              disabled={savedPage === 1}
            >
              Prev
            </button>
            <div className="flex items-center">
              <span>Page:</span>
              <input
                type="number"
                value={savedPage}
                onChange={(e) => setSavedPage(Number(e.target.value))}
                className="w-16 p-2 ml-2 border rounded-lg text-center"
                min={1}
                max={savedTotalPages}
              />
              <span>/{savedTotalPages}</span>
            </div>
            <button
              onClick={() => setSavedPage(Math.min(savedPage + 1, savedTotalPages))}
              className="bg-gray-300 p-2 rounded-lg"
              disabled={savedPage === savedTotalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
