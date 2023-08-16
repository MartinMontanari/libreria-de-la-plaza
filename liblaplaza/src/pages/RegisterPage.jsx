import { useForm } from 'react-hook-form';
import { registerUserRequest } from '../api/auth';

function RegisterPage(){
    const { register, handleSubmit } = useForm();
    const onSubmit = handleSubmit(async (values) => {
        await registerUserRequest(values);
    })
    return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
            <form onSubmit={onSubmit}>
                <input type="text" { ...register("username", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Nombre de usuario'
                />
                <input type="email" { ...register("email", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Email'
                />
                <input type="password" { ...register("password", {required: true})}
                    className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2'
                    placeholder='Contraseña'
                />
                <button type="submit">
                    Registrar
                </button>
            </form>

    </div>
    );
};

export default RegisterPage;