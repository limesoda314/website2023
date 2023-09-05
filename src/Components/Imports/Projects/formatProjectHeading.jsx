import { Typography } from "@material-tailwind/react";

export default function FormatProjectHeading({ title, author, date}) {
  // Set the document title to the post title
  document.title = title;

  return (
    <div>
      <Typography variant="h2" color="blue-gray" className="py-4">
        {title}
      </Typography>
      <Typography variant="h5" color="blue-gray">
        {author} • {date}
      </Typography>
    </div>
  );
}
