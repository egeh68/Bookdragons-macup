import Avatar from "../avator/avator";

type PersonCardProps = {
  name: string;
  image: string;
  decription: string;
};

export default function PersonCard({
  name,
  image,
  decription,
}: PersonCardProps) {
  return (
    <div className="stack employee-card">
      {/* <img className="employee-card-photo" src={image} alt={name} /> */}
      <Avatar image={image} name={name} />
      <h2 className="section-subheading"> {name}</h2>
      <p>{decription}</p>
    </div>
  );
}
