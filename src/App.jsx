import { useEffect, useState } from "react";
import example from "./Data.json";

function App() {
  const [data, setData] = useState(example.articles);

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let monthLong = newDate.toLocaleString("default", { month: "long" });
  let year = newDate.getFullYear();

  // var url =
  //   "https://newsapi.org/v2/everything?" +
  //   "q=Apple&" +
  //   `from=${year}-${month}-${date}&` +
  //   "sortBy=popularity&" +
  //   "apiKey=YOUR KEY";

  // var req = new Request(url);

  // useEffect(() => {
  //   fetch(req).then(function (res) {
  //     res.json().then((data) => {
  //       if (data.status == "ok") {
  //         console.log(data);

  //         setData(data.articles);
  //       }
  //     });
  //   });
  // }, []);

  return (
    <div>
      <div className="border-bottom ps-5 p-4 bg-light">
        <h1 className="fw-bold m-0">News</h1>
        <h2 className="fw-bold text-secondary">{monthLong + " " + date}</h2>
      </div>
      <div className="container p-3">
        <div className="pt-4">
          <h2 className="fw-bold text-danger">Top Stories</h2>
          <div className="row g-3">

            {data.map((item, index) => {
              return (
                <div
                  className="col-sm-12 col-md-6 col-lg-4 col-xl-3"
                  key={index}
                >
                  <div
                    className="card overflow-hidden border-0 my-shadow"
                    style={{ borderRadius: "1rem" }}
                  >
                    <img
                      src={item.urlToImage}
                      className="card-img-top my-img"
                    />
                    <div className="card-body" style={{ height: "12rem" }}>
                      <p className="mb-2 text-secondary">{item.source.name}</p>
                      <h5 className="card-title">
                        {item.title.length >= 85
                          ? item.title.slice(0, 85) + "..."
                          : item.title}
                      </h5>
                      <p style={{bottom: "2rem", position: "absolute"}}>
                        <a href={item.url} className="link-primary" target="_blank">Go to content</a>
                      </p>
                    </div>
                    <div className="card-footer bg-white">
                      <span
                        className="text-secondary"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {item.publishedAt.slice(0, 10) +
                          " . " +
                          (item.author != null ? item.author.slice(0, 30) : "")}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
