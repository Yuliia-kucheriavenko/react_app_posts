import React from "react";
import { MyInput } from "./UI/Input/Input";
import { MySelect } from "./UI/Select/Select";

export const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <MyInput
        type="text"
        placeholder="Search"
        value={filter.query}
        onChange={(e) => setFilter({ ...filter, query: e.target.value })}
      />
      <hr style={{ margin: "15px 0" }} />
      <div>
        <MySelect
          value={filter.sort}
          onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
          defaultValue="Sort by"
          options={[
            { value: "title", name: "Sort by Name" },
            { value: "body", name: "Sort by Body" },
          ]}
        />
      </div>
    </div>
  );
};
