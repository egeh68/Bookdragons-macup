type BooksCardProps = {
  //   id: number;
  title: string;
  author: string;
  image: string;
  price: number;
  tags: string[];
};
export default function BookCard({
  //   id,
  title,
  author,
  image,
  price,
  tags,
}: BooksCardProps) {
  return (
    <article className="box box-light-gray book-card">
      <img
        className="book-card-cover"
        src={image}
        alt={`forsdie av ${title}`}
        width={160}
        height={200}
      />

      <div className="stack">
        <h3 className="eyebrow-heading book-card-title">{title}</h3>
        <p className="book-card-author">Skrevet av {author}</p>

        <div className="book-card-tags cluster">
          {tags.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <button className="button black-button"> Kjøp {price},- kr</button>
    </article>
  );
}
