import { useQuery } from "react-query";
import { useLocation } from "react-router";
import { getProperty } from "../utils/api";
import { PuffLoader } from "react-spinners";
import {
  MdOutlineBathtub,
  MdOutlineBed,
  MdOutlineGarage,
} from "react-icons/md";
import { CgRuler } from "react-icons/cg";
import HeartBtn from "../components/HeartBtn";
import { FaLocationDot } from "react-icons/fa6";
import Map from "../components/Map";

const Property = () => {
  const { pathname } = useLocation();
  // console.log(pathname)
  const id = pathname.split("/").slice(-1)[0];
  // console.log(id);
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );
  // console.log(data);
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

  if (isError) {
    return <div className="h-64 flexCenter">Error while fetching data</div>;
  }
  return (
    <section className="max-padd-container my-[99px] ">
      <div>
        <div className="pb-2 relative">
          <img
            src={data?.image}
            alt={data?.title}
            className="rounded-xl max-h-[27rem] self-center w-full object-cover"
          />
          {/* like btn  */}
          <div className="absolute top-8 right-8">
            <HeartBtn />
          </div>
        </div>
        {/* container  */}
        <div className="xl:flexBetween gap-8">
          {/* left side  */}
          <div className="flex-1">
            <h5 className="bold-16 my-1 text-secondary ">{data?.city} </h5>
            <div className="flexBetween">
              <h4 className="medium-18 line-clamp-1">{data?.title} </h4>
            </div>
          </div>
          {/* info  */}
          <div className="flex gap-x-4 py-2">
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500] ">
              <MdOutlineBed />
              {data?.facilities.bedrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500] ">
              <MdOutlineBathtub />
              {data?.facilities.bathrooms}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500] ">
              <MdOutlineGarage />
              {data?.facilities.parkings}
            </div>
            <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500] ">
              <CgRuler />
              400
            </div>
          </div>
          <p className="pt-2 mb-4 line-clamp-2">{data?.description} </p>
          <div className="flexStart gap-x-2 my-5">
            <FaLocationDot />
            <div>
              {data?.address}
              {data?.city}
              {data?.country}
            </div>
          </div>
          <div className="flexBetween">
            <button className="btn-secondary rounded-xl !py-[7px] !px-5 shadow-sm">
              Book the visit
            </button>
          </div>
        </div>
        {/* right side  */}
        <div className="flex-1">
          <Map
            address={data?.address}
            city={data?.city}
            country={data?.country}
          />
        </div>
      </div>
    </section>
  );
};

export default Property;
