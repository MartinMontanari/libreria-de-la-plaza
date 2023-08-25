import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage(){
    const { register, handleSubmit, formState: {errors} } = useForm();
    const { signUp, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();
    useEffect(()=> {
        if(isAuthenticated){
            navigate("/list-articles");
        }
    }, [isAuthenticated]);

    const onSubmit = handleSubmit(async (values) => {
        signUp(values);
    })
    return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            {
                registerErrors.map((error, i)=> {
                    <div className='bg-red-500 p-2 text-white' key={i}>
                        {error}
                    </div>
                })
            }
            <form onSubmit={onSubmit}>
                <input type="text" { ...register("username", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Nombre de usuario'
                />
                { errors.username && <p className='text-red-500'>El nombre de usuario es requerido</p>}
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
                    Registrar
                </button>
            </form>

    </div>
    );
};

export default RegisterPage;