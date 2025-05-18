import {
  FaMapMarkerAlt,
  FaBed,
  FaBath,
  FaUser,
  FaRulerCombined,
  FaUserTie,
  FaClock,
  FaHome,
 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EstateCard = ({estateDetails}) => {
    
  
  const {id,estate_title,image,area,price,status,description,location,facilities,segment_name,owner_name,year_ago}=estateDetails

 
  return (
    <div className=" bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 flex flex-col">
      {/* Image and labels */}
      <div className="relative">
        <img
          className="w-full h-60 object-cover"
          src={image}
          alt="villa"
        />
        <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded">
          Hot Offer
        </div>
        <div className="absolute top-2 right-2 bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded">
          {status}
        </div>
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-80 text-white px-4 py-1 rounded">
          <p className="text-lg font-bold">{price} <span className="text-sm font-normal">/ Week</span></p>
        </div>
      </div>

      {/* Tag Row */}
      <div className="flex justify-between items-center px-4 py-2 text-sm text-gray-600">
        <span className="flex items-center gap-1">
          <FaHome className="text-green-600" />
          Villa
        </span>
        <span className="flex items-center gap-1">
          <FaUserTie />
          {owner_name}
        </span>
        <span className="flex items-center gap-1">
          <FaClock />
          {year_ago}
        </span>
      </div>

      {/* Title & Address */}
      <div className="px-4 py-2">

        <h2 className="text-xl font-semibold text-gray-800">{segment_name}</h2>
        <h2 className=" font-medium text-gray-400">{estate_title}</h2>

        <p className="text-sm text-green-600 flex items-center gap-1">
          <FaMapMarkerAlt />
          {location}
        </p>
      </div>

      {/* Description */}
      <div className="px-4 py-2 text-gray-600 text-sm">
       {description}
      </div>

      <div className='text-[#A0C878] font-normal p-4 font-serif grow'>
           {
            facilities.map((item,idx)=><li key={idx} className='text-sm ml-2'>{item}</li>)
           }
      </div>

     <div className='py-8 px-4'>
      <Link  to={`/propertyDetails/${id}`}> <button  className='btn btn-accent '>View property</button></Link>
     </div>

      {/* Facilities Row */}
      <div className="px-4 py-3 bg-gray-100 flex justify-between text-xs text-gray-600">

        <div className="flex items-center gap-1"><FaBed />5</div>
        <div className="flex items-center gap-1"><FaBath />3</div>
        <div className="flex items-center gap-1"><FaUser />2</div>
        <div className="flex items-center gap-1"><FaRulerCombined />{area}</div>
      </div>
    </div>
  );
};

export default EstateCard;
