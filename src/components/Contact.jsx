import { FaLinkedin, FaInstagram } from "react-icons/fa";

function Contact() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div id="contact-us" className="bg-faq mt-2 w-full flex justify-center">
      <div className="sm:w-6/12 w-7/12 flex sm:gap-16  justify-between md:justify-center ">
        <div className="flex flex-col items-center p-2">
          <img src="/logo.png" className="sm:w-40 w-28 h-28 sm:h-40" alt="" />
          <svg
            width="200"
            height="93"
            className="w-28 sm:w-40"
            viewBox="0 0 846 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.5734 65.4V60L6.17344 54.6H0.773438V43.8L6.17344 38.4V33H16.9734L22.3734 27.6V38.4H11.5734L6.17344 43.8V49.2H11.5734V54.6L16.9734 60H22.3734V65.4H27.7734L33.1734 70.8H38.5734V76.2H43.9734L49.3734 81.6H54.7734V65.4H49.3734V60L43.9734 54.6H33.1734V43.8H38.5734L43.9734 38.4V33H54.7734V16.8H43.9734L38.5734 22.2V27.6H22.3734V22.2H33.1734L38.5734 16.8V11.4H60.1734V38.4H49.3734L43.9734 43.8V49.2H49.3734V54.6L54.7734 60H60.1734V92.4H54.7734L49.3734 87H43.9734V81.6H38.5734L33.1734 76.2H27.7734V70.8H22.3734L16.9734 65.4H11.5734ZM786.056 70.8V60H791.456L796.856 54.6V49.2H802.256V43.8H796.856L791.456 38.4H786.056V11.4H807.656V16.8L813.056 22.2H823.856V27.6L829.256 33H840.056V38.4L845.456 43.8V49.2H840.056V43.8L834.656 38.4H823.856V33L818.456 27.6H807.656V22.2L802.256 16.8H791.456V33H796.856V38.4H802.256L807.656 43.8H813.056V54.6H802.256L796.856 60V65.4H791.456V70.8H786.056ZM786.056 92.4V70.8L791.456 76.2V81.6H796.856L802.256 76.2H807.656V70.8H813.056L818.456 65.4H823.856V60H829.256L834.656 54.6V49.2H840.056L845.456 54.6H840.056L834.656 60V65.4H829.256L823.856 70.8H818.456V76.2H813.056L807.656 81.6H802.256V87H796.856L791.456 92.4H786.056Z"
              fill="#B880FF"
            />
            <path
              d="M146.344 22.2V11.4L151.744 16.8V22.2H146.344ZM146.344 33V22.2L151.744 27.6V33H146.344ZM70.7438 54.6V0.599997H97.7438L103.144 6V27.6H119.344V0.599997H146.344L151.744 6V11.4H146.344V6H124.744V27.6L119.344 33H97.7438V6H76.1438V49.2L70.7438 54.6ZM146.344 43.8V33L151.744 38.4V43.8H146.344ZM146.344 54.6V43.8L151.744 49.2V54.6H146.344ZM146.344 65.4V54.6L151.744 60V65.4H146.344ZM146.344 76.2V65.4L151.744 70.8V76.2H146.344ZM70.7438 87V54.6H76.1438V81.6H97.7438V54.6H119.344L124.744 60V81.6H140.944L135.544 87H119.344V60H103.144V81.6L97.7438 87H70.7438ZM146.344 81.6V76.2L151.744 81.6H146.344ZM140.944 87V81.6H146.344V87H140.944ZM201.239 49.2H206.639V43.8H201.239V49.2ZM158.039 87V65.4H163.439V54.6L168.839 49.2V33H174.239V22.2L179.639 16.8V11.4L185.039 6V0.599997H217.439L222.839 6H228.239V22.2L233.639 27.6V38.4H239.039V54.6L244.439 60V70.8H249.839V76.2H239.039V60L233.639 54.6V43.8H228.239V27.6L222.839 22.2V11.4H217.439V6H190.439L185.039 11.4V16.8L179.639 22.2V38.4H174.239V49.2L168.839 54.6V70.8H163.439V81.6H185.039V76.2L190.439 70.8H217.439V76.2L222.839 81.6H244.439V76.2L249.839 81.6L244.439 87H217.439V81.6L212.039 76.2H190.439V81.6L185.039 87H158.039ZM195.839 54.6V33L201.239 38.4V33L206.639 38.4H212.039V49.2L206.639 54.6H195.839ZM311.433 11.4V6H322.233V11.4L327.633 16.8V22.2H322.233V16.8L316.833 11.4H311.433ZM327.633 27.6V22.2L333.033 27.6H327.633ZM279.033 65.4V33L284.433 27.6V22.2H295.233L300.633 27.6H306.033V33H327.633L333.033 38.4H306.033L300.633 33H295.233V27.6H289.833L284.433 33V60H295.233V54.6H327.633L333.033 60H300.633L295.233 65.4H279.033ZM327.633 70.8V65.4L333.033 70.8H327.633ZM252.033 76.2V65.4H246.633V22.2H252.033V11.4H257.433L262.833 6H273.633L268.233 11.4H262.833V16.8H257.433V27.6H252.033V60H257.433V70.8H262.833V76.2L268.233 81.6H279.033V87H300.633L306.033 81.6H316.833V76.2H322.233L327.633 70.8V81.6H322.233L316.833 87H306.033V92.4H279.033L273.633 87H262.833V81.6L257.433 76.2H252.033ZM399.441 54.6V43.8L404.841 49.2L399.441 54.6ZM399.441 54.6H404.841L410.241 60V65.4L415.641 70.8H421.041V76.2H410.241V70.8L404.841 65.4V60L399.441 54.6ZM340.041 87V0.599997H367.041L372.441 6V22.2L377.841 16.8V11.4L383.241 6V0.599997H415.641L421.041 6L415.641 11.4V16.8L410.241 22.2V27.6L404.841 33V38.4H399.441V43.8H394.041V33H399.441L404.841 27.6V22.2L410.241 16.8V11.4L415.641 6H388.641L383.241 11.4V16.8L377.841 22.2V27.6H372.441L367.041 22.2V6H345.441V81.6H367.041V65.4L372.441 60H377.841V70.8H383.241V76.2L388.641 81.6H415.641V76.2L421.041 81.6L415.641 87H383.241V81.6L377.841 76.2H372.441V81.6L367.041 87H340.041ZM490.622 0.599997L496.022 6V11.4H490.622V6H431.222V81.6H436.622L431.222 87H425.822V0.599997H490.622ZM496.022 22.2H490.622V11.4L496.022 16.8V22.2ZM490.622 22.2L496.022 27.6H458.222V33H490.622L496.022 38.4V43.8H490.622V38.4H458.222L452.822 33V22.2H490.622ZM496.022 54.6H490.622V43.8L496.022 49.2V54.6ZM490.622 54.6L496.022 60V65.4H452.822V54.6H490.622ZM447.422 87H436.622V81.6H452.822L447.422 87ZM452.822 87V81.6H496.022L490.622 87H452.822ZM505.861 87V0.599997H532.861L538.261 6V60H554.461L549.061 65.4H532.861V6H511.261V81.6L505.861 87ZM554.461 65.4V60H565.261L559.861 65.4H554.461ZM565.261 65.4V60H576.061V65.4H565.261ZM570.661 76.2V65.4L576.061 70.8V76.2H570.661ZM511.261 87V81.6H570.661V76.2L576.061 81.6L570.661 87H511.261ZM607.978 22.2V11.4L613.378 16.8V22.2H607.978ZM607.978 33V22.2L613.378 27.6V33H607.978ZM580.978 33V0.599997H607.978L613.378 6V11.4H607.978V6H586.378V27.6L580.978 33ZM607.978 43.8V33L613.378 38.4V43.8H607.978ZM607.978 54.6V43.8L613.378 49.2V54.6H607.978ZM607.978 65.4V54.6L613.378 60V65.4H607.978ZM607.978 76.2V65.4L613.378 70.8V76.2H607.978ZM580.978 87V33L586.378 38.4V81.6H607.978V76.2L613.378 81.6L607.978 87H580.978ZM695.358 22.2V11.4L700.758 16.8V22.2H695.358ZM641.358 87V33H619.758V0.599997H695.358L700.758 6V11.4H695.358V6H625.158V27.6H646.758V81.6H673.758V33L679.158 27.6H695.358V22.2L700.758 27.6L695.358 33H679.158V81.6L673.758 87H641.358ZM770.817 0.599997L776.217 6V11.4H770.817V6H711.417V81.6H716.817L711.417 87H706.017V0.599997H770.817ZM776.217 22.2H770.817V11.4L776.217 16.8V22.2ZM770.817 22.2L776.217 27.6H738.417V33H770.817L776.217 38.4V43.8H770.817V38.4H738.417L733.017 33V22.2H770.817ZM776.217 54.6H770.817V43.8L776.217 49.2V54.6ZM770.817 54.6L776.217 60V65.4H733.017V54.6H770.817ZM727.617 87H716.817V81.6H733.017L727.617 87ZM733.017 87V81.6H776.217L770.817 87H733.017Z"
              fill="url(#paint0_angular_65_251)"
            />
            <defs>
              <radialGradient
                id="paint0_angular_65_251"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(423 46) scale(540 496.457)"
              >
                <stop stopColor="#7A40C3" />
                <stop offset="1" stopColor="white" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className="w-1/12 min-h-full md:text-xl text-md  justify-around  text-white items-center  flex flex-col ">
          <button
            onClick={() => {
              scrollToSection("nav");
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("about");
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              scrollToSection("themes");
            }}
          >
            Themes
          </button>
          <button
            onClick={() => {
              scrollToSection("teams");
            }}
          >
            Teams
          </button>
          <button
            onClick={() => {
              scrollToSection("faq");
            }}
          >
            FAQ
          </button>
        </div>
      </div>
      <div className="flex sm:w-6/12 w-5/12 gap-10 items-center  justify-center sm:justify-around">
        <div className="flex min-h-full text-3xl cursor-pointer text-purple-500  justify-center gap-4 items-center flex-col">
          <div className="flex gap-2">
            <a
              className="hover:scale-125"
              target="_blank"
              href="https://www.instagram.com/reel/DCRWptPylSa/?igsh=dm00YnR1OWdjeTNz"
            >
              {" "}
              <FaInstagram></FaInstagram>
            </a>
            <span className="xl:block hidden text-lg">hackelite_24</span>
          </div>
          <div className="flex gap-2">
            <a
              className="hover:scale-125"
              target="_blank"
              href="https://www.linkedin.com/company/hackelite-24-jssstu/"
            >
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </a>
            <span className="xl:block hidden text-lg">
              HackElite&apos;24 JSSSTU
            </span>
          </div>
        </div>
        <div className="min-h-full font-bold text-lg md:flex hidden justify-center gap-5    flex-col">
          <div>
            <p className="text-[#9D50FF]">Contact Us</p>
            <span className="text-white">Phone</span>{" "}
            <a href="tel:9508372431" className="text-white">
              +91 9508372431
            </a>
          </div>
          <p className=" text-[#9D50FF]">
            Email{" "}
            <a
              className="text-white"
              href="mailto:hackelitecse2024@jssstuniv.in"
            >
              hackelitecse2024@jssstuniv.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
