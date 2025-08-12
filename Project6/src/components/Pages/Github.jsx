import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/chandi977")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     })
  //     .catch((error) => console.error("Error fetching GitHub data:", error));
  // }, []);

  if (!data) {
    return <p className="text-center text-xl mt-10">Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Avatar & Name */}
      <img
        src={data.avatar_url}
        alt="GitHub Avatar"
        className="rounded-full w-40 h-40 border-4 border-gray-400 shadow-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{data.name}</h1>
      <p className="text-gray-600">@{data.login}</p>

      {/* Bio */}
      {data.bio && (
        <p className="mt-4 text-center max-w-xl italic text-gray-700">
          {data.bio}
        </p>
      )}

      {/* Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 bg-white p-4 rounded-lg shadow-md w-full max-w-2xl">
        <InfoCard label="Followers" value={data.followers} />
        <InfoCard label="Following" value={data.following} />
        <InfoCard label="Public Repos" value={data.public_repos} />
        <InfoCard label="Location" value={data.location || "N/A"} />
        <InfoCard label="Twitter" value={data.twitter_username || "N/A"} />
        <InfoCard
          label="GitHub Profile"
          value={
            <a
              href={data.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 underline"
            >
              View Profile
            </a>
          }
        />
      </div>

      {/* Dates */}
      <p className="mt-6 text-gray-500 text-sm">
        Joined: {new Date(data.created_at).toLocaleDateString()} | Last updated:{" "}
        {new Date(data.updated_at).toLocaleDateString()}
      </p>
    </div>
  );
}

// Small reusable info card
function InfoCard({ label, value }) {
  return (
    <div className="bg-gray-50 border rounded-lg p-3 text-center shadow-sm">
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-gray-500 text-sm">{label}</p>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/chandi977");
  return response.json();
};
