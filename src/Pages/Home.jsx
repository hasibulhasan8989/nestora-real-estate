import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import EstateCard from "../Components/EstateCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const estateSegment = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>Nestora </title>
      </Helmet>
      <Banner></Banner>
      <div className="container lg:mx-auto  px-4 lg:px-0 ">
        <div className="lg:mt-40 mt-10 text-center">
          <h1 className="font-serif font-bold lg:text-5xl text-3xl">
            Explore Our Featured Estates
          </h1>
        </div>

        <div className="grid md:grid-cols-2  gap-5 lg:grid-cols-3 mt-10 lg:mt-40">
          {estateSegment.map((estateDetails) => (
            <EstateCard
              key={estateDetails.id}
              estateDetails={estateDetails}
            ></EstateCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
