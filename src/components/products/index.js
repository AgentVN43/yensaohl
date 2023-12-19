import { map } from "lodash";
import React, { useEffect, useState } from "react";
import Item2 from "../item/index2";
import SectionTitle from "../sectionTitle";

export default function Products({ category }) {
  const [categoryData, setCategoryData] = useState({});

  const fetchData = async (category) => {
    try {
      const ck = "ck_4c2381be17565bb9d8c7c29d1c69266daa3ca678";
      const cs = "cs_3be2aaa09e516365fc5eaec7c456c9e9671cf9dc";

      const response = await fetch(
        `https://yensaohoale.annk.info/wp-json/wc/v2/products?category=${category}&consumer_key=${ck}&consumer_secret=${cs}`
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data for category ${category}:`, error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await fetchData(category);
        setCategoryData(data);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [category]);
  console.log(categoryData);

  return (
    <>
      <section className="section pb-0" id="mua_hang">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                {categoryData.length > 0 && (
                  <h4 className="fs-24">
                    <SectionTitle
                      text={categoryData[0].categories[0]?.name || "Loading..."}
                    />
                  </h4>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row " id="grid">
            {map(categoryData, (item) => {
              const img = item.meta_data.filter((meta) => meta.key === "image");
              const imageValue = img[0]?.value || null;
              const title = item.categories.map((item) => item.name);

              return (
                <>
                  <Item2
                    url={item.url}
                    name={item.name}
                    imageValue={imageValue}
                    regular_price={item.regular_price}
                    title={title}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
