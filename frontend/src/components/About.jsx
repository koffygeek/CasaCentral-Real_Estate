import { RiDoubleQuotesL } from "react-icons/ri";
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <section>
      {/* container */}
      <div>
        {/* left side  */}
        <div>
          <img
            src={aboutImg}
            alt=""
            className="rounded-3xl rounded-tr-[155px] w-[488px] "
          />
          <div>
            <span>
              <RiDoubleQuotesL className="text-2xl" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam
                doloremque molestias saepe expedita ipsa nisi, tempora esse
                deleniti, laudantium libero odio ut? Voluptates, ipsum a
                architecto laborum voluptas nemo vel!
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
