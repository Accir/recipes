import React, { useState } from "react";
import { Card, Rate, Divider } from "antd";
import ExampleImage from "../../assets/meal1.jpg";
import Meta from "antd/lib/card/Meta";

function RecipeCard(props) {
  const [rating, setRating] = useState(0);
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];

  return (
    <Card hoverable cover={<img src={ExampleImage} alt="example" />}>
      <Meta title="Pavyzdinis patiekalas" description="Pagal Anon" />
      {props.rating ? (
        <>
          <Rate
            disabled
            className="pt-2"
            tooltips={desc}
            onChange={(value) => setRating(value)}
            value={rating}
          />
          <Divider orientation={"center"} />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            vitae consectetur ipsum. Suspendisse magna nibh, tristique et auctor
            ut, porta id metus.
          </p>
        </>
      ) : null}
    </Card>
  );
}

export default RecipeCard;
