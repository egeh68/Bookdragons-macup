import BookCard from "../bookCard/bookCard";

type StaffPickProps = {
  title: string;
  author: string;
  image: string;
  price: number;
  tags: string[];

  heading: string;
  description: string;
  quote: string;
  description2: string;
  layout: "left" | "right";
};
export default function StaffPick({
  title,
  author,
  image,
  price,
  tags,
  heading,
  description,
  quote,
  description2,
  layout,
}: StaffPickProps) {
  return (
    <article className="section section-yellow">
      <div
        className={`container grid large-gap recommendation-section ${
          layout === "right"
            ? "two-plus-one-columns product-on-right"
            : "one-plus-two-columns product-on-left"
        }`}
      >
        <div
          className="recommendation-section-text stack"
          style={{ order: layout === "right" ? 1 : 2 }}
        >
          <h3 className="section-subheading">{heading}</h3>
          <p>{description}</p>
          <blockquote className="big-quote">{quote}</blockquote>
          <p>{description2}</p>
        </div>
        <div style={{ order: layout === "right" ? 2 : 1 }}>
          <BookCard
            title={title}
            author={author}
            image={image}
            price={price}
            tags={tags}
          />
        </div>
      </div>
    </article>
  );
}
