import Link from "next/link";

const Footer = () => (
  <footer
    className="lg:h-auto sm:h-40 h-30 max-w-screen-xl xl:mx-auto mx-5 rounded-lg px-5 lg:pt-3 pt-0 pb-3 flex flex-col lg:flex-row space-y-3 lg:space-y-0 justify-between items-center sticky bottom-5 bg-white border-t-4 border-black drop-shadow-lg transition-all ease-in-out duration-150"
  >
    <div className="text-center lg:text-left">
      <p className="font-cal text-lg sm:text-2xl text-black">
      Enjoy the premium experience
      </p>
    </div>
    <div
      className="flex space-y-3 sm:space-y-0 sm:space-x-3 sm:flex-row flex-col lg:w-auto w-full text-center"
    >
      <Link
        className="flex-auto font-cal text-lg bg-black text-white border border-black rounded-md py-1 sm:py-3 px-5 hover:text-black hover:bg-white transition-all ease-in-out duration-150 whitespace-no-wrap"
        href="/paid"
        rel="noreferrer"
        target="_blank"
      >
        Upgrade
      </Link>
    </div>
  </footer>
)

export default Footer;