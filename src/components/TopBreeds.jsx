import AnimalCard from "./AnimalCard";


const TopBreeds =async () => {
   const res=await fetch('https://assignment-08-ebon.vercel.app/data.json')
   const photos= await res.json();
   const TopBreeds= photos.slice(4,8)
   
    return (
        <div>

            <h1 className="text-3xl font-semibold text-orange-500 text-center my-5">TopBreeds</h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {TopBreeds.map(photo=><AnimalCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};
export default TopBreeds;