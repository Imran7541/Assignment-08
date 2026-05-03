

const AllAnimalsPage =async () => {
    const res=await fetch('https://assignment-08-ebon.vercel.app/data.json')
   const photos= await res.json();
   console.log(photos);
    return (
        <div>
            <h1 className="text-2xl font-bold">All Photos</h1>
        </div>
    );
};

export default AllAnimalsPage;