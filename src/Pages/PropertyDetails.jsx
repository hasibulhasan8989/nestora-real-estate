import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';


const PropertyDetails = () => {
    const estates=useLoaderData()
   
    const {id}=useParams()
    const paramId=parseInt(id)

    const estate=estates.filter(e=>e.id===paramId)
    

    const {estate_title,image,area,price,status,description,location,facilities,segment_name,owner_name,year_ago}=estate[0]


    return (
        <div className="hero  ">
          <Helmet>
                  <title>Nestora | PropertyDetails</title>
                </Helmet>
  <div className="hero-content flex-col lg:flex-row items-center gap-4">
    <img
      src={image}
      className=" w-2/3  rounded-lg shadow-2xl"
    />
     <div className=" bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">{estate_title}</h2>
        <p className="text-gray-600 mb-4">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
          <div>
            <h3 className="font-semibold text-gray-800 mb-1">{status}</h3>
            <ul className="space-y-1">
            <p>{segment_name}</p>
            <p>{year_ago}</p>
            <p>{area} </p>
            <p>{price} </p>
            <p>Owner : {owner_name}</p>
            <p></p>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-1">Facilities</h3>
            <ul className="space-y-1">
              {
                facilities.map((fae,idx)=><li key={idx} ><a href="#"  className="hover:text-blue-600">{fae}</a></li>)
              }
             
            </ul>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-gray-600 text-sm">
          <p className="mb-1">{location}</p>
          <p className="mb-1">support@dreamestate.com</p>
          <p>(123) 456-7890</p>
        </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default PropertyDetails;