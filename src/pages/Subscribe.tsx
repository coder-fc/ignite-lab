import { gql, useMutation } from "@apollo/client";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";

const CREATE_SUBSCRIBE_MUTATION = gql `
    mutation CreateSubscribe($name: String!, $email: String!) {
        createSubscriber(data: {name: $name, email: $email}) {
            id
        }
    }

`

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useMutation(CREATE_SUBSCRIBE_MUTATION);

    async function handleSubscribe(event: FormEvent) {
        event?.preventDefault();
        
        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-10 mx-auto flex-col md:flex-row lg:mt-20">
                <div className="max-w-[640px] md:mr-20">
                    <div className="flex items-center justify-center lg:justify-start ">
                        <Logo />
                    </div>

                    <h1 className="m-6 text-[1.9rem] leading-tight text-center md:m-6 lg:text-left lg:text-[2.5rem] lg:ml-0">
                        Construa uma <strong className="text-blue-500">aplicação completa</strong>, do zero, com <strong className="text-blue-500">React</strong>
                    </h1>
                    <p className="m-6 text-gray-200 leading-relaxed text-center lg:m-0 lg:text-start ">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className="p-8 bg-gray-700 border border-gray-500 md:rounded w-full md:w-auto">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2" w-full>
                        <input 
                            type="text" 
                            placeholder="Seu nome completo"
                            className="bg-gray-900 rounded px-5 h-14" 
                            onChange={event => setName(event.target.value)}
                        />
                        <input 
                            type="email" 
                            placeholder="Digite seu email"
                            className="bg-gray-900 rounded px-5 h-14"
                            onChange={event => setEmail(event.target.value)}
                        />
                        <button 
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-green-500 py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>  
            </div>

            <img src="/src/assets/code-mackup.png" className="mt-10" alt="" />
        </div>
    )
}