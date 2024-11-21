// Assuming you have a JSON file or an object containing sponsors data
import sponsorsData from "../assets/sponsors.json";

const SponsorCard = ({
  imageUrl,
  name,
  websiteUrl,
  className = "",
  size = "small",
}) => {
  const sizeClasses = size === "large" ? "p-150" : "p-50"; // Increased padding for co-sponsors

  return (
    <div className={`relative ${className}`}>
      <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
        <div
          className={`relative aspect-square ${sizeClasses} w-full cursor-pointer`}
        >
          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <img
              src={imageUrl}
              alt={name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      </a>
    </div>
  );
};

const Sponsors = () => {
  const { mainSponsor, coSponsors } = sponsorsData;

  return (
    <div className="relative bg-black pt-10 pb-36"id="sponsors">
      {/* Green Border */}
      <div className="absolute inset-0 border-2 rounded-br-[100px] rounded-tl-[100px] border-[#4A9D3C] m-4"></div>

      {/* Sponsors Label - Centered with vertical line */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center z-20">
        <h2
          className="text-[#B880FF] font-semibold transform -rotate-90 whitespace-nowrap font-montserrat text-4xl p-2 sm:text-6xl md:text-7xl"
          style={{
            textShadow: "0 0 1px #4A9D3C, 0 0 2px #4A9D3C",
            marginLeft: "-3rem", // Adjust this value to position the rotated text properly
          }}
        >
          Sponsors
        </h2>
      </div>

      {/* Main Content - With reduced width and adjusted padding */}
      <div className="pl-24 sm:pl-32 md:pl-36 lg:pl-40 pr-10 max-w-3xl mx-auto">
        {/* Powered By Section */}
        <section className="text-center mb-2 pt-12">
          {" "}
          {/* Added padding-top to the section */}
          <h3 className="text-white text-3xl mb-8 font-semibold tracking-wide">
            Powered By
          </h3>
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              {" "}
              {/* Reduced width for main sponsor */}
              <SponsorCard
                imageUrl={mainSponsor.imageUrl}
                name={mainSponsor.name}
                websiteUrl={mainSponsor.websiteUrl}
                size="small"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* Co-Sponsored By Section */}
        <section className="text-center mt-4">
          <h3 className="text-white text-2xl mb-6 font-semibold tracking-wide">
            Co-Sponsored By
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-3xl mx-auto">
            {coSponsors.map((sponsor, index) => (
              <SponsorCard
                key={index}
                imageUrl={sponsor.imageUrl}
                name={sponsor.name}
                websiteUrl={sponsor.websiteUrl}
                size="large"
                className="transform hover:scale-105 transition-transform duration-300"
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
