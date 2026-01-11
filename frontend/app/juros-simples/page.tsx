"use client";

import InputField from "@/components/input-field";
import jurosSimplesAction from "@/actions/juros-simples.action";
import { useActionState } from "react";
import { InitialFormState, JurosSimplesResponse } from "@/types";
import ResultCard from "@/components/result-card";

const initialFromState: InitialFormState<JurosSimplesResponse> = {
  success: false,
  error: null,
  data: null,
};

export default function JurosCompostoPage() {
  const [state, formAction, pending] = useActionState(
    jurosSimplesAction,
    initialFromState
  );

  return (
    <section className="space-y-8">
      <div className="w-full max-w-sm flex flex-col gap-8 bg-gray-200 p-4 border border-gray-300 rounded-md">
        <h1 className="text-xl font-bold">Calculadora de Juros Simples</h1>
        <form action={formAction} className="flex flex-col gap-4">
          <InputField
            label="Capital Inicial (R$)"
            className="flex-1"
            type="number"
            inputMode="decimal"
            name="capital-inicial"
            id="capital-inicial"
            required
            step="0.01"
            placeholder="00,01"
          />
          <InputField
            label="Taxa de Juros (%)"
            className="flex-1"
            type="number"
            inputMode="decimal"
            name="taxa-juros"
            id="taxa-juros"
            required
            step="0.01"
            placeholder="0,01"
          />
          <InputField
            label="Tempo (em meses)"
            className="flex-1"
            type="number"
            inputMode="numeric"
            name="tempo"
            id="tempo"
            required
            placeholder="1"
          />
          <button
            type="submit"
            className="bg-violet-600 text-white py-2 px-3 rounded-sm"
          >
            {pending ? (
              <span className="animate-spin size-6"></span>
            ) : (
              "Calcular"
            )}
          </button>
        </form>

        {!state.success && state.error && (
          <output className="text-red-800">Erro: {state.error}</output>
        )}
      </div>

      {state.success && (
        <article className="bg-gray-200 p-4 border border-gray-300 rounded-md space-y-4">
          <h2 className="font-bold text-lg">Resultado</h2>
          <ResultCard
            title="Total de Juros"
            value={state.data?.juros as number}
            className="bg-violet-600 text-white"
          />
          <ResultCard
            title="Montante Final"
            value={state.data?.montante_final as number}
            className="bg-zinc-50"
          />
        </article>
      )}
    </section>
  );
}
