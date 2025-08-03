import React, { useEffect, useState } from "react";
import { getNews } from "../services/api"; 

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNews();
        setNews(data.articles || []);
      } catch (err) {
        setError("Failed to load news");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p className="text-center">Loading news...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {news.length > 0 ? (
        news.map((article, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500 col-span-3">No news available.</p>
      )}
    </div>
  );
}
