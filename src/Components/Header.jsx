import Hearts from "../assets/hearts.svg";

const Header = () => {
  return (
    <div className="w-full bg-customColor-purple flex justify-center py-3 items-center">
        <img src={Hearts}/> 
        <p className="font-press-start text-white text-xl">AluraGeek</p>
    </div>
  )
}

export default Header;