import React from "react";
import { NavLink } from "react-router-dom";

interface Category {
  title: string;
  id: string;
}

interface Props {
  onSelectCategory: (categoryId: string) => void;
}

const Categories: React.FC<Props> = ({ onSelectCategory }) => {
  const categories: Category[] = [
    { title: "Star Wars", id: "star-wars" },
    { title: "Motivational", id: "motivational" },
    { title: "Famous people", id: "famous-people" },
    { title: "Saying", id: "saying" },
    { title: "Humour", id: "humour" },
  ];

  return (
    <div className="w-25">
      <ul className="list-group fs-4">
        {categories.map((category) => (
          <NavLink
            to={`/quotes/${category.id}`}
            key={category.id}
            className="list-group-item"
            onClick={() => onSelectCategory(category.id)}
            style={{ cursor: "pointer" }}
          >
            {category.title}
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
