import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage(){

    const {register, handleSubmit, formState: {errors}} = useForm();
    const { signIn} = useAuth();

    const onSubmit = handleSubmit((data) => {
        signIn(data);
    });
    return (
    <div className="h-[calc(100vh-100px)] flex items-center justify-center">
        <form onSubmit={onSubmit}>
                <input type="email" { ...register("email", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                { errors.email && <p className='text-red-500'>El email del usuario es requerido</p>}

                <input type="password" { ...register("password", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Contraseña'
                />
                { errors.password && <p className='text-red-500'>La contraseña del usuario es requerida </p>}

                <button type="submit">
                    Ingresar al sistema
                </button>
            </form>
    </div>
    );
};

export default LoginPage;