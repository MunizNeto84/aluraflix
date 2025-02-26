import { useState, useEffect } from "react";

const usePagination = () => {
  const [videosPerPage, setVideosPerPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const updatePagination = () => {
      if (window.innerWidth > 1800) {
        setVideosPerPage(12);
      } else if (window.innerWidth > 1500) {
        setVideosPerPage(9);
      } else if (window.innerWidth > 600) {
        setVideosPerPage(6);
      } else {
        setVideosPerPage(2);
      }
    };

    updatePagination();
    window.addEventListener("resize", updatePagination);

    return () => window.removeEventListener("resize", updatePagination);
  }, []);

  return { videosPerPage, currentPage, setCurrentPage };
};

export default usePagination;
