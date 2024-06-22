import React from "react";

export default function ProductCard({
  image,
  title = "delicious food item",
  offer,
  rating = 3.1,
  minTime = 10,
  maxTime = 30,
  name = "delight food",
  place = "your location",
}) {
  if (image == null || image == undefined) {
    image = "https://placehold.co/600x400";
  } else {
    image = "chainResturant/" + image;
  }

  return (
    <div className="min-w-[250px]  h-[330px] rounded-lg pr-5 flex-shrink-0 cursor-pointer place-items-center transition-all hover:scale-90">
      <span className="max-h-[210px] block h-[200px]">
        <img src={image} className="w-full h-full object-cover rounded-lg" />
      </span>
      <div className="pl-2 w-full opacity-75">
        <h1 className="font-bold text-lg">{title}</h1>
        <h2 className="font-bold text-lg">
          <span className="bg-green-500 mr-2 p-2 rounded-full text-white text-sm">
            {rating}
          </span>
          <span>
            {minTime} - {maxTime} mins
          </span>
        </h2>
        <h4 className="opacity-80">{name}</h4>
        <h4 className="opacity-80">{place}</h4>
      </div>
    </div>
  );
}
