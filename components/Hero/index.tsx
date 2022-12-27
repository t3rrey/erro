import CustomContainer from "../Container";
import SearchBar from "../Searchbar";

const Hero = () => {
  return (
    <div className="bg-gray-800 w-full">
      <CustomContainer>
        <h1 className="text-white text-5xl font-sans py-12">Welcome to ERRO</h1>
        <p className="text-white">
          We are trying to have a library of every error solution with high
          quality videos!
        </p>
        <SearchBar />
      </CustomContainer>
    </div>
  );
};

export default Hero;
