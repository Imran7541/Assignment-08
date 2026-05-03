import AnimalCard from "@/components/AnimalCard";


const AllAnimalsPage =async () => {
    const res =await fetch('https://assignment-08-ebon.vercel.app/data.json')
   const photos= await res.json();
   
    return (
        <div>
            <h1 className="text-2xl font-bold">All Photos</h1>
            <div className="grid grid-cols-4 gap-5">
                {photos.map(photo=><AnimalCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default AllAnimalsPage;