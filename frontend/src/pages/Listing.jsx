import { SwiperSlide } from "swiper/react";
import SearchBar from "../components/SearchBar";
import { PROPERTIES } from "../constant/data";
import Item from "../components/Item";

const Listing = () => {
  const [data, isError, isLoading] = useProperties();
  return (
    <main className="max-padd-container my-[99px]">
      <div className="max-padd-container py-10 xl:py-22 bg-primary rounded-3xl  ">
        <div>
          <SearchBar />
          {/* container   */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10">
            {PROPERTIES.map((property) => (
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
