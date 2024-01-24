import { Typography } from "@material-tailwind/react";

export default function FormatPostHeading({ title, author, date, tags, textColor }) {
  // Function to format and render tags
  function formatTags(tagList) {
    if (tagList.length === 0) {
      return null; // Return null when no tags are available
    }

    return (
      <div>
        {tagList.map((tag, index) => (
          <button
            key={index}
            className="bg-green-300 text-green-950 rounded-md m-2 px-2 py-1"
          >
            #{tag}
          </button>
        ))}
      </div>
    );
  }

  // Set the document title to the post title
  document.title = title;

  return (
    <div>
      <Typography variant="h1" className={ "py-4"+ textColor }>
        {title}
      </Typography>
      <Typography variant="h5" className={ textColor }>
        {author} • {date}
        {formatTags(tags)}
      </Typography>
    </div>
  );
}
