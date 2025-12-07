// ../compnents/cardA.tsx
export default function CardA({ title, date, image, author }) {
  return (
    <article className="bg-white rounded-md shadow-md overflow-hidden">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="px-5 py-4">
        <p className="text-sm text-gray-600">{date}</p>
        <h2 className="mt-2 text-lg font-semibold leading-snug text-black">
          {title}
        </h2>
        {author && (
          <p className="mt-3 text-sm text-gray-700">
            By {author}
          </p>
        )}
      </div>
    </article>
  );
}
