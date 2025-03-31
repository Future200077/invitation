import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="flex flex-row justify-between w-full max-w-4xl p-2 pl-2 border border-[#BFCFDA] rounded-lg shadow-md bg-white items-center">
      {/* Extra-Large Avatar on the Left */}
      <div className="w-50 h-50 overflow-hidden rounded-full border-2 border-[#BFCFDA]">
        <img
          src={user.avatarUrl}
          alt={user.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Information on the Right */}
      <div className="ml-10 flex-1">
        {/* Name and Username */}
        <div className="flex flex-row pr-5 py-2 justify-between items-center">
          <div>
            <div className="text-2xl font-semibold">{user.name}</div>
            <div className="text-xl text-gray-500">{user.login}</div>
          </div>
          <div>{user.isUSAName ? "✅" : "❌"}</div>
        </div>

        {/* Additional Info */}
        <div className="space-y-3 text-gray-700  text-sm">
          <div className="flex items-center">
            <strong className="w-28">Email:</strong>
            <span>
              {user.email
                ? user.email
                : user.emails?.length > 0
                ? user.emails.join(", ")
                : "N/A"}
            </span>
          </div>

          <div className="flex items-center">
            <strong className="w-28">Website:</strong>
            <span>{user.websiteUrl ? user.websiteUrl : "N/A"}</span>
          </div>

          <div className="flex items-center">
            <strong className="w-28">Joined:</strong>
            <span>{new Date(user.createdAt).toLocaleDateString()}</span>
          </div>

          <div className="flex items-center">
            <strong className="w-28">Repositories:</strong>
            <span>{user.repositories.totalCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
