import { useEffect, useState } from "react";
import { BlogList } from "./BlogList";
import Props from "./data";

const Home = () => {
  const [blogs, setBlogs] = useState(Props);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  // const handleDelete = (id: number) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  const abortCont = new AbortController();
  useEffect(() => {
    fetch("http://localhost:3001/blogs", { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("badmamajama");
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setIsPending(false);
          setError(err.message);
        }
      });
    return () => {};
  }, [abortCont.signal]);
  return (
    <div className="home">
      {error && <h2>couldnae fetch :(</h2>}
      {isPending && <div>Loading...</div>}
      {!error && !isPending && <BlogList blogs={blogs} title="aldem" />}
    </div>
  );
};

export default Home;
