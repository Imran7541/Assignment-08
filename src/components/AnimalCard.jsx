import { Card } from "@heroui/react";
import Image from "next/image";


const AnimalCard = ({photo}) => {
    console.log(photo);
    return (
        <Card className="">
            <div>
                <Image
                src={photo.image}
                height={200}
                width={200}
                alt={photo.image}
                />
            </div>
        </Card>
    );
};

export default AnimalCard;