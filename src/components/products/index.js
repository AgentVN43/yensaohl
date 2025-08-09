import { map } from "lodash";
import React, { useEffect, useState } from "react";
import Item2 from "../item/index2";
import SectionTitle from "../sectionTitle";
import Loading from "../loading";

export default function Products({ category }) {
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState(true);

  const fetchData = async (category) => {
    try {
      const response = await fetch(
        `https://yensaohoale.annk.info/api/products/categories/${category}`
      );

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error fetching data for category ${category}:`, error);
      throw error;
    }
  };

  useEffect(() => {
    setLoading(true);
    const fetchCategoryData = async () => {
      try {
        const data = await fetchData(category);
        setCategoryData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching category data:", error);
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [category]);

  useEffect(
    () =>
      categoryData.forEach((item, index) => {
        if (index === 0) {
          setTitle(item.Categories[0].display_name);
        }
      }),
    [categoryData]
  );

  return (
    <>
      <section className="section pb-0" id={title}>
        {loading && <Loading />}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center">
                {categoryData.map(
                  (item, index) =>
                    index === 0 && (
                      <h4 className="fs-24" key={index}>
                        <SectionTitle text={item.Categories[0].display_name} />
                      </h4>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row " id="grid">
            {map(categoryData, (item) => {
              const title = item.Categories.map((item) => item.display_name);

              return (
                <>
                  <Item2
                    url={item.url}
                    name={item.Name}
                    imageValue={item.Images}
                    regular_price={item.RegularPrice}
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
