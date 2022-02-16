import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Spinner from "./Spinner";
import CategoryItem from "./CategoryItem.jsx";
import mediaDevices from "../style/mediaDevices.js";
import axios from "../api-call-config/callConfig.js";
////////////////////////////////////////////////////////////

const Container = styled.div`
  display: flex;
  margin: 12rem 0;
  padding: 2rem;
  flex-wrap: wrap;

  gap: 3rem;

  @media ${mediaDevices.mobile} {
    flex-direction: column;
  }
`;

////////////////////////////////////////
const Categories = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get("/categories");
        setCategories(res.data.data.categories);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchCategories();
  }, [setCategories]);

  return (
    <Container>
      {categories ? (
        categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))
      ) : (
        <Spinner />
      )}
    </Container>
  );
};

export default Categories;
