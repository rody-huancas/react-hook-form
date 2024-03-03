import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue, reset } = useForm({
    // defaultValues: {
    //   nombre: "rody",
    //   correo: "rody@correo.com",
    // }
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);

    alert("enviado datos")

    // setValue("nombre", ""); // limpiar solo el nombre
    reset(); //limpiar todos los campos

  });

  return (
    <form onSubmit={onSubmit}>
      {/* nombre */}
      <label htmlFor="nombre">Nombre</label>
      <input type="text" {...register("nombre", {
          required: {
            value: true,
            message: "El nombre es requerido",
          },
          minLength: {
            value: 2,
            message: "El nombre debe tener al menos 2 caracteres",
          },
          maxLength: {
            value: 20,
            message: "El nombre no debe tener más de 20 caracteres",
          },
        })}
      />
      {errors.nombre && <span>{errors.nombre.message}</span>}

      {/* correo */}
      <label htmlFor="correo">Correo</label>
      <input type="email" {...register("correo", {
          required: {
            value: true,
            message: "El correo es requerido",
          },
          pattern: {
            value: /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/,
            message: "El correo no es válido",
          },
        })}
      />
      {errors.correo && <span>{errors.correo.message}</span>}

      {/* password */}
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password", {
          required: {
            value: true,
            message: "La contraseña es requerida",
          },
          minLength: {
            value: 8,
            message: "La contraseña debe tener al menos 8 caracteres",
          }
        })}
      />
      {errors.password && <span>{errors.password.message}</span>}

      {/* confirmar password */}
      <label htmlFor="confirmarPassword">Confirmar Password</label>
      <input
        type="password"
        {...register("confirmarPassword", { 
          required: {
            value: true,
            message: "Confirmar contraseña es requerida",
          },
          validate: (value) => value === watch("password") || 'Las contraseñas no coinciden'
        })}
      />
      {errors.confirmarPassword && <span>{errors.confirmarPassword.message}</span>}

      {/* fecha nacimiento */}
      <label htmlFor="fechaNacimiento">Fecha Nacimiento</label>
      <input type="date" {...register("fechaNacimiento", {
          required: {
            value: true,
            message: "La fecha de nacimiento es requerida",
          },
          validate: (value) => {
            const fechaNacimiento = new Date(value);
            const fechaActual = new Date();
            const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

            return edad > 18 || "Debe ser mayor de edad"
          },
        })}
      />
      {errors.fechaNacimiento && <span>{errors.fechaNacimiento.message}</span>}

      {/* pais */}
      <label htmlFor="pais">País</label>
      <select {...register("pais")}>
        <option value="mx">Mexico</option>
        <option value="co">Colombia</option>
        <option value="ar">Argentina</option>
      </select>

      {
        watch("pais") === "ar" && (
          <>
            <input type="text" placeholder="provincia" { ...register("provincia", {
              required: {
                value: true,
                message: "La provincia es requerida",
              }
            }) } />
            {errors.provincia && <span>{errors.provincia.message}</span>}
          </>
        )
      }

      {/* file */}
      <label htmlFor="foto">Foto</label>
      <input type="file" {...register("foto")} onChange={e => {
        console.log(e.target.files[0])
        setValue('fotoDelUsuario', e.target.files[0].name)
      }} />

      {/* terminos */}
      <label htmlFor="terminos">Términos y condiciones</label>
      <input type="checkbox" {...register("terminos", { required: {
        value: true,
        message: "Debes aceptar los términos y condiciones",
      } })} />
      {errors.terminos && <span>{errors.terminos.message}</span>}

      <button>Enviar</button>

      <pre>
        {
          JSON.stringify(watch(), null, 2)
        }
      </pre>
    </form>
  );
};

export default App;
