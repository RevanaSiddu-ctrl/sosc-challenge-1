import { eventsData } from "../data/blogdata";

export default function CardA({ title, date, image, author, isLarge }) {
  return (
    <div className={`group transition-colors duration-300 bg-white rounded-lg shadow-lg overflow-hidden ${isLarge ? 'col-span-2 row-span-2' : ''}`}>
      <img
        src={image}
        alt="event"
        className={`w-full object-cover ${isLarge ? 'h-72' : 'h-48'}`}
      />
      <div className="p-4">
        <p className="text-sm text-gray-500 font-medium">{date}</p>
        <h2 className={`group-hover:text-[oklch(77.034%_0.20078_152.412)] font-bold text-gray-900 mt-2 ${isLarge ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </h2>
        <p className="text-sm text-gray-600 mt-3">{author}</p>
      </div>
    </div>
  );
}

export function EventsGrid() {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
        {eventsData.map((event, index) => (
          <div key={event.id} className={index === 0 ? 'col-span-2 row-span-2' : ''}>
            <CardA
              title={event.title}
              date={event.date}
              image={event.image}
              author={event.author}
              isLarge={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

