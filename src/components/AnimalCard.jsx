import { Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaWeight } from "react-icons/fa";

const AnimalCard = ({ photo }) => {
  return (
     <Link href={`/all-animals/${photo.id}`}>
    <Card className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      
      <div className="relative w-full h-56 bg-gray-100">
        <Image
          src={photo.image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw" 
          alt={photo.name}
          className="object-cover hover:scale-105 transition duration-300"
        />
        <Chip size="sm" className="absolute top-2">{photo.category}</Chip>
      </div>

      <div className="p-4 space-y-2">
        <h2 className="text-lg font-semibold">{photo.name}</h2>
        <p className="text-sm text-gray-500">Breed: {photo.breed}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <div className="flex">
            <span>
              <FaWeight />
              {photo.weight} Kg
            </span>
          </div>
          <span className="font-semibold text-green-600">${photo.price}</span>
        </div>
      </div>
    </Card>
    </Link>
  );
};

export default AnimalCard;
