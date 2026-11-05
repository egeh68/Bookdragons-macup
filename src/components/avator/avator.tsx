type AvatarProps = {
  image: string;
  name: string;
};

export default function Avatar({ image, name }: AvatarProps) {
  return <img src={image} alt={name} className="employee-card-photo" />;
}
