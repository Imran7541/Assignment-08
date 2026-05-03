import AnimalCard from "./AnimalCard";


const TopAnimals =async () => {
   const res=await fetch('https://assignment-08-ebon.vercel.app/data.json')
   const photos= await res.json();
   const topAnimals= photos.slice(0,4)
   console.log(topAnimals);
    return (
        <div>
            <h1 className="text-2xl font-bold mt-5"></h1>
            <div>
                {topAnimals.map(photo=><AnimalCard key={photo.id} photo={photo}/>)}
            </div>
        </div>
    );
};

export default TopAnimals;