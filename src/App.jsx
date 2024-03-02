import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      {/* nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" {...register("nombre")} />

      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email" {...register("email")} />

      {/* password */}
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password")} />

      {/* confirmar password */}
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input type="password" {...register("confirmarPassword")} />

      {/* fecha nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha Nacimiento</label>
      <input type="date" {...register("fechaNacimiento")} />

      {/* pais */}
      <label htmlFor="pais">País</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {/* file */}
      <label htmlFor="foto">Foto</label>
      <input type="file" {...register("foto")} />

      {/* terminos */}
      <label htmlFor="terminos">Términos y condiciones</label>
      <input type="checkbox" {...register("terminos")} />

      <button>Enviar</button>
    </form>
  );
};

export default App;
