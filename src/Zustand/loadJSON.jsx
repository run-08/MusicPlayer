import { useEffect } from "react";
import CommonDB from "./commonDB";

const JsonLoad = () => {
  const { data, setData } = CommonDB((state) => state);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) throw new Error(" Network Response was not ok");
        const result = await response.json();

        const backendResult = await fetch("http://localhost:1000/getJSON", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result),
        });

        const data = await backendResult.text();
        setData(data);

        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };

    fetchData();

    return () => {
      console.log("Mounted Successfully...");
    };
  }, []);

  return (
    <>
      <div className="text-blue-300 "> {"XML Convertor "} </div>
    </>
  );
};

export default JsonLoad;
