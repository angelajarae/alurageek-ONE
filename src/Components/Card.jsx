import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan} from "@fortawesome/free-solid-svg-icons";
import { deleteProduct } from '../api/api';

const Card = ({id,img,name,price}) => {
  return (
    <div className="my-6 flex flex-col gap-3 text-white bg-customColor-purple p-3 border-4 border-solid border-black rounded-lg hover:bg-customColor-pink1 transition ease-in-out duration-300">
      <img src={img} className=" border-4 border-solid border-black w-full h-48 object-cover"/>
      <p>{name}</p>
      <div className="flex justify-between">
        <div className='flex gap-1'>
          <span>$</span>
          <p>{price}</p>
        </div>
        <FontAwesomeIcon onClick={async()=>await deleteProduct(id)}className="h-4 cursor-pointer"icon={faTrashCan} />
      </div>

    </div>
  )
}

export default Card;