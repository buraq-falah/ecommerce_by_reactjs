import FooterData from "../../static/footer_data.json";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {new Date().getFullYear()}{" "} 
          <a href={`${FooterData.url}`} className="hover:underline">
            {FooterData.website}™
          </a>
          . {FooterData.copy_right}.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
