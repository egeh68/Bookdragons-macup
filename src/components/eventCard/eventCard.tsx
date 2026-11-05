type EventCardProps = {
  title: string;
  description: string;
  month: number | string;
  day: number | string;
  time: number | string;
  price: number;
};

export default function EventCard({
  title,
  description,
  month,
  day,
  time,
  price,
}: EventCardProps) {
  return (
    <li>
      <div className="calendar-icon">
        <span className="calendar-icon-month">{month}</span>
        <span className="calendar-icon-day">{day}</span>
      </div>
      <div className="stack stack-small">
        <h3 className="eyebrow-heading">{title}</h3>
        <p>{description}</p>
        <p className="future-events-list-info">
          {time}. Inngang: {price},-
        </p>
      </div>
    </li>
  );
}
