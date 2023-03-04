import React, { useEffect, useState } from "react";
import Container from "./Container";
import Heading from "./Heading";
import Card from "./Card";
// import month from "../data/month.json";

export const MonthlyUpdates = () => {
  const [month, setMonth] = useState();

  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMonth(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(month.products[1]);

  return (
    <section className="py-10 bg-[#F9F6F2]">
      <Container>
        <Heading title="Explore this month's updates" />
        <div className="grid grid-cols-3 gap-5 mt-10">
          {month.products.map((item) => {
            return (
              <Card
                img={item.thumbnail}
                title={item.title}
                dec={item.description}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
};
