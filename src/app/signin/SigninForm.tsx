
import { PasswordInput } from '@/components/inputs/PasswordInput';
import { Button } from '@/components/Buttons/Button'
import { PhoneInput } from '@/components/inputs/PhoneInput';

export const SigninForm = () => {
    return (
        <form action="" className="w-full md:w-1/3 flex flex-col gap-1 mx-auto my-auto">
            <h1 className="text-xl font-bold p-1">Login</h1>
            <PhoneInput />
            <PasswordInput />
            <label className="label cursor-pointer">
                <span className="label-text">Barbeiro</span>
                <input type="checkbox" className="toggle toggle-primary" />
                <span className="label-text">Gerente</span>
            </label>
            <Button variant="primary">Entrar</Button>
        </form>
    )
}