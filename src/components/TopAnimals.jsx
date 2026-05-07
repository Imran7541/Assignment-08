

import AnimalCard from "./AnimalCard";
const TopAnimals =async () => {
   const res=await fetch('https://assignment-08-f9oc.vercel.app/data.json')
   const photos= await res.json();
   const topAnimals= photos.slice(0,4)
   console.log(topAnimals);
    return (
        <div>
            <h1 className="text-5xl font-bold my-5 text-center">Featured <span className="text-orange-500">Animals</span></h1>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">
                {topAnimals.map(photo=><AnimalCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default TopAnimals;