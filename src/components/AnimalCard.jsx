import { Card } from "@heroui/react";
import Image from "next/image";


const AnimalCard = ({photo}) => {
    console.log(photo.image);
    return (
        <Card className="border">
            <div className="relative w-full aspect-square">
                <Image
                src={photo.image}
                fill
                 
                // height={200}
                // width={200}
                alt={photo.image}
                />
            
            </div>
            
            <div>{photo.name}</div>
            <div> Breed:{photo.breed}</div>
            <div>
                <p>Weight: {photo.weight} Kg</p>
                <p>Price:{photo.price}$</p>

            </div>
            
        </Card>
    );
};

export default AnimalCard;