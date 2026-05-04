import Image from 'next/image';
import React from 'react';

const AnimalDetailPage =async ({params}) => {
    const {id}=await params;
    const res =await fetch('https://assignment-08-ebon.vercel.app/data.json')
    const photos = await res.json ()
    const photo=photos.find(p=>p.id ==id)
    console.log(photo);
    return (
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
            <h2>{photo?.name} </h2>
        </div>
    );
};

export default AnimalDetailPage;