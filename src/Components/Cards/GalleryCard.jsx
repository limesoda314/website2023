// image code from: https://www.material-tailwind.com/docs/react/img
// used in the gallery 
import { Typography } from "@material-tailwind/react";

export default function ImgWithBlurredCaption(props) {
  return (
    <figure className={"relative h-96 w-full"}>
      <img
        className="h-full w-full md:w-1/2 p-2 bottom-8 left-2/4 md:translate-x-1/2 justify-between rounded-xl object-cover object-center"
        src={props.href}
        alt={props.alt}
      />
      <figcaption className="absolute py-4 px-6 bottom-8 left-2/4  flex w-[calc(50%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            {props.title}
          </Typography>
          <Typography className="mt-2 font-normal" color="gray" >
            {props.date}
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          {props.description}
        </Typography>
      </figcaption>
    </figure>
  );
}