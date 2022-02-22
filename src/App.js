import React, { useEffect, useState } from "react";

const App = () => {
  const [resourceType, setResourceType] = useState("posts");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [items, setItems] = useState([]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  //use as componentDidMount
  useEffect(() => {
    console.log("component did mount");
    window.addEventListener("resize", handleResize);
  }, []);

  //use as componentDidUpdate for state resourceType
  useEffect(() => {
    console.log("component did update");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));

    //use as componentWillUnmount or clean up pre code
    return () => {
      console.log("clean up old item");
      setItems([]);
    };
  }, [resourceType]);

  // //use as componentDidUpdate for state items
  // useEffect(() => {
  //   console.log('items has change');
  // }, [items]);

  return (
    <>
      <div>{windowWidth}</div>
      <div>
        <button
          onClick={() => {
            setResourceType("posts");
          }}
        >
          Post
        </button>
        <button
          onClick={() => {
            setResourceType("users");
          }}
        >
          Users
        </button>
        <button
          onClick={() => {
            setResourceType("comments");
          }}
        >
          Comments
        </button>
      </div>
      <h1>{resourceType}</h1>
      <div>
        {items.map((item) => {
          return <pre key={item.id}>{JSON.stringify(item)}</pre>;
        })}
      </div>
    </>
  );
};

export default App;
