import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full max-w-xl flex flex-col gap-4 items-center justify-center">
      <h1 className="text-xl font-bold">Bem vindo á calculadora financeira</h1>
      <p>Escolha uma das calculadoras</p>
      <div className="flex flex-col gap-4 items-center text-center">
        <Link
          href="/juros-simples"
          className="w-full bg-violet-600 text-white py-2 px-3 rounded-sm"
        >
          Juros Simples
        </Link>
        <Link
          href="/juros-composto"
          className="w-full bg-violet-600 text-white py-2 px-3 rounded-sm"
        >
          Juros Compostos
        </Link>
        <Link
          href="/valor-presente"
          className="w-full bg-violet-600 text-white py-2 px-3 rounded-sm"
        >
          Valor Presente de Parcela Futura
        </Link>
      </div>
    </section>
  );
}
