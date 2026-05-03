import { Card } from "@heroui/react";
import Image from "next/image";
import { FaWeight } from "react-icons/fa";

const AnimalCard = ({ photo }) => {
  return (
    <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      {/* Image */}
      <div className="relative w-full h-56 bg-gray-100">
        <Image
          src={photo.image}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          alt={photo.name}
          className="object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {/* Name */}
        <h2 className="text-lg font-semibold">{photo.name}</h2>

        {/* Breed */}
        <p className="text-sm text-gray-500">Breed: {photo.breed}</p>

        {/* Info */}
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex">
            <span>
            <FaWeight />{photo.weight} Kg</span></div>
          <span className="font-semibold text-green-600">${photo.price}</span>
        </div>
      </div>
    </Card>
  );
};

export default AnimalCard;
