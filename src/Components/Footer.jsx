import Hearts from "../assets/hearts.svg";

const Footer = () => {
    return (
      <div className="text-white gap-3 py-10 bg-customColor-purple flex flex-col justify-center items-center">
        <div className="flex items-center ">
          <img src={Hearts}/>
          <p className="font-press-start text-xl">AluraGeek</p>
        </div>
        <p>Desarrollado por Angela Jara</p>
        <p>Alura Latam- 202X</p>
      </div>
    )
  }
  
  export default Footer;