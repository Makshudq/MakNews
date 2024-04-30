import React, { useEffect, useState } from "react";
import Newscard from "./Newscard";

function Newsboard({ catogaries }) {
  const [articl, setarticle] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${catogaries}&apiKey=2a9c39ca83bd4ac4afd6d9de25676b29`;

    console.log(`url : ${catogaries}`);

    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setarticle(data.articles));

    setTimeout(() => console.log(articl), 3000);
  }, [catogaries]);

  return (
    <>
      <div className="container">
        {articl.map((news, index) => (
          <Newscard
            key={index}
            title={news.title}
            description={news.description}
            imgurl={news.urlToImage}
            readmore={news.url}
          />
        ))}
      </div>
    </>
  );
}

export default Newsboard;
