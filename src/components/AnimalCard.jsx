import { Card } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const AnimalCard = ({ photo }) => {
  return (
    <Card className="border rounded-3xl p-3 shadow-sm bg-white flex flex-col h-full">
      <div className="relative w-full aspect-[4/3] mb-2">
        <Image
          fill
          src={photo.image}
          alt={photo.name}
          className="rounded-2xl object-cover"
        />
      </div>

      <div className="flex justify-between items-start gap-2 mb-2">
        <h3 className="text-[1rem] font-semibold text-gray-800 leading-snug">
          {photo.name}
        </h3>
        <span className="text-[10px] font-semibold px-3 py-1 rounded-full bg-[#00A859] text-white whitespace-nowrap">
          {photo.breed}
        </span>
      </div>

      <div className="flex justify-between text-gray-500 text-sm mb-2">
        <p>{photo.location}</p>
        <p className="font-medium text-gray-700">{photo.weight} Kg</p>
      </div>

      
      <div className="flex justify-between items-center mt-auto">
        <h2 className="text-lg font-bold text-[#00A859]">TK-{photo.price}</h2>

        <Link
          href={`/all-animals/${photo.id}`}
          className="bg-[#00A859] hover:bg-green-700 transition-colors py-1.5 px-4 rounded-lg text-white text-sm font-medium"
        >
          Details
        </Link>
      </div>
    </Card>
  );
};

export default AnimalCard;
