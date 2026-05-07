import AnimalCard from "@/components/AnimalCard";

export const dynamic = 'force-dynamic';
const AllAnimalsPage =async () => {
    const res =await fetch('https://assignment-08-f9oc.vercel.app/data.json',{
        cache: 'no-store'
    })
   const photos= await res.json();
   
    return (
        <div>
            <h1 className="text-2xl font-bold">All Animals</h1>
            <div className="grid grid-cols-4 gap-5">
                {photos.map(photo=><AnimalCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default AllAnimalsPage;