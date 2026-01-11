"use server";

import postValorPresente from "@/services/valor-presente.service";
import { InitialFormState, ValorPresenteResponse } from "@/types";

export default async function jurosSimplesAction(
  prevState: InitialFormState<ValorPresenteResponse>,
  formData: FormData
) {
  const data = {
    valor_futuro: Number(formData.get("valor-futuro")),
    taxa_juros: Number(formData.get("taxa-juros")),
    tempo: Number(formData.get("tempo")),
  };

  try {
    const resultado = await postValorPresente(data);
    return { data: resultado, success: true, error: null };
  } catch (error) {
    return {
      data: null,
      success: false,
      error: "Falha ao calcular valor futuro",
    };
  }
}
