import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import MovieList from "../components/MovieList/MovieList";
import Loader from "../components/Loader/Loader";
import "./MainPage.scss";
import { API_URL } from "../services/api";

const MainPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is a HTTP Error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <Header />
      {loading && <Loader />}
      {error && (
        <div className='error'>
          {`There is a problem fetching your data - ${error}`}
        </div>
      )}
      {data && <MovieList data={data} />}
    </div>
  );
};

export default MainPage;
