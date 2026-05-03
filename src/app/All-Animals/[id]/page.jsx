import React from 'react';

const AnimalDetailPage =async ({params}) => {
    const {id}=await params;
    console.log(id);
    return (
        <div>
            photo details
        </div>
    );
};

export default AnimalDetailPage;