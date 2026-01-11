"use client";

import InputField from "@/components/input-field";
import ValorPresenteAction from "@/actions/valor-presente.action";
import { useActionState } from "react";
import { InitialFormState, ValorPresenteResponse } from "@/types";
import ResultCard from "@/components/result-card";

const initialFromState: InitialFormState<ValorPresenteResponse> = {
  success: false,
  error: null,
  data: null,
};

export default function ValorPresentePage() {
  const [state, formAction, pending] = useActionState(
    ValorPresenteAction,
    initialFromState
  );

  return (
    <section className="space-y-8">
      <div className="w-full max-w-sm flex flex-col gap-8 bg-gray-200 p-4 border border-gray-300 rounded-md">
        <h1 className="text-xl font-bold">
          Calculadora de Valor Presente de uma Parcela Futura
        </h1>
        <form action={formAction} className="flex flex-col gap-4">
          <InputField
            label="Valor Futuro (R$)"
            className="flex-1"
            type="number"
            inputMode="decimal"
            name="valor-futuro"
            id="valor-futuro"
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
            title="Valor Presente"
            value={state.data?.valor_presente as number}
            className="bg-violet-600 text-white"
          />
        </article>
      )}
    </section>
  );
}
