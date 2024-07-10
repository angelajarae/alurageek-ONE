import { useForm } from "react-hook-form";
import { postProduct } from "../api/api";

const Forms = () => {
  const { register, handleSubmit, reset } = useForm();

  async function onSubmit (data){
    await postProduct(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}className="flex w-2/5 flex-col  gap-10 items-center">
      <h1 className="uppercase font-press-start text-xl text-center">Agregar <br />producto:</h1>
      <input type="text"
        className="placeholder-customColor-blue text-customColor-blue w-full border-solid border-customColor-blue border-4 rounded-3xl p-2"
        placeholder="nombre..."
        required
        {...register("name", { required: true })}
      />
      <input type="text"
        className="placeholder-customColor-blue text-customColor-blue w-full border-solid border-customColor-blue border-4 rounded-3xl p-2"
        placeholder="precio..."
        required
        {...register("price", { required: true })}
      />
      <input type="text"
        className="placeholder-customColor-blue text-customColor-blue w-full border-solid border-customColor-blue border-4 rounded-3xl p-2"
        placeholder="imagen..." {...register("img", { required: true })}
        required
      />
      <div className="flex gap-4 justify-between w-full ">
        <button className="transition ease-in-out duration-300 w-1/2 p-3 rounded-xl text-white bg-customColor-blue font-bold hover:bg-customColor-pink3"
          type="submit">
          Enviar
        </button>
        <button className="transition ease-in-out duration-300 w-1/2 p-3 rounded-xl text-customColor-blue border-4 border-solid font-bold border-customColor-blue hover:border-customColor-pink3 hover:text-customColor-pink3"
          type="button"
          onClick={()=>reset()}>
          Limpiar
        </button>
      </div>
    </form>
  )
}

export default Forms;