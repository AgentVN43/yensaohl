import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useInit } from "../../hooks/useInit";
import Item from "../../item";
import SectionTitle from "../../sectionTitle";

export default function YenChungSan() {
  const [products, setProducts] = useState([]);
  const { category } = useInit();
  const title = _.get(category, "[2].name", null);

  const user = "kenvin146";
  const password = "vIbJjq17S6hpB7Q83HShjd5A";
  const productAPI = `https://yensaohoale.annk.info/wp-json/wc/v3/products?category=19`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(productAPI, {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(`${user}:${password}`)}`,
            "Content-Type": "application/json",
            Accept: "*/*",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setProducts(result.reverse());
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="section pt-0 pt-sm-5" id="services">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-12">
            <i className="pe-7s-tools title-icon text-muted" />
            <h3 className="title">
              <SectionTitle text={title} />
            </h3>
            {/* <p className="text-muted mt-3 title-subtitle mx-auto">
            It is a long established fact that a reader will be of a page when
            established fact looking at its layout.
          </p> */}
          </div>
        </div>

        <div className="row mt-5">
          {products.map((item) => {
            return (
              <Item
                key={item.id}
                name={item.name}
                prices={item.regular_price}
                image={
                  item.meta_data.find((meta) => meta.key === "image")?.value
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
