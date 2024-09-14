import { SwiperSlide } from "swiper/react";
import SearchBar from "../components/SearchBar";
import Item from "../components/Item";
import useProperties from "../hooks/useProperties";
import PuffLoader from "react-spinners/PuffLoader";

const Listing = () => {
  const { data, isError, isLoading } = useProperties();
  // console.log(data);
  if (isError) {
    return (
      <div>
        <span>Error while fetching data</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div className="h-64 flexCenter">
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#555#"
          aria-label="puff-loading"
        />
      </div>
    );
  }
  return (
    <main className="max-padd-container my-[99px]">
      <div className="max-padd-container py-10 xl:py-22 bg-primary rounded-3xl  ">
        <div>
          <SearchBar />
          {/* container   */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {data.map((property) => (
              <SwiperSlide key={property.title}>
                <Item property={property} />
              </SwiperSlide>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Listing;
