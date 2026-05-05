import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

const AnimalDetailPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://assignment-08-ebon.vercel.app/data.json");
  const photos = await res.json();
  const photo = photos.find((p) => p.id == id);
  console.log(photo);
  return (
    
    <Card className="w-[320px]" variant="secondary mt-10">
        <div className="text-center font-bold text-2xl text-green-500"><h1>Animals Details</h1></div>
      <Card.Header>
        {/* <Card.Title>Secondary</Card.Title> */}
        <Card.Description>
         
        </Card.Description>
      </Card.Header>
      <div>
        <div className="relative w-full h-56">
          <Image
            src={photo.image}
            alt={photo.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
        <h2>Name: {photo?.name} </h2>
        <h2>Category: {photo?.category} </h2>
        <h2>Price: {photo?.price}$</h2>
        <h2>Age: {photo?.age} Years </h2>
        <h2>Weight: {photo?.weight}Kg </h2>
        <h2>Location: {photo?.location}</h2>
        <p>Description: {photo?.description} </p>
      </div>
      <Card.Content>
        
      </Card.Content>
    </Card>
  );
};

export default AnimalDetailPage;
