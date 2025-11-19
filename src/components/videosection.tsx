"use client";

import { useEffect, useState } from "react";

export default function VideoSection() {
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/api/video");

        // If API fails
        if (!res.ok) {
          setError("API failed");
          return;
        }

        const data = await res.json();
        setDetails(data);
      } catch (err) {
        setError("Failed to fetch API");
        console.error(err);
      }
    };

    loadData();
  }, []);

  if (error) return <p className="text-red-600 text-center py-10">{error}</p>;
  if (!details) return <p className="text-center py-10">Loading…</p>;

  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
      <p className="text-gray-700 mb-4">{details.description}</p>

      <video src={details.videoUrl} controls className="w-full rounded-xl mb-4" />

      <ul className="space-y-2">
        {details.points.map((p: any, i: number) => (
          <li key={i} className="p-3 bg-gray-100 rounded-lg shadow-sm">
            {p}
          </li>
        ))}
      </ul>
    </section>
  );
}
