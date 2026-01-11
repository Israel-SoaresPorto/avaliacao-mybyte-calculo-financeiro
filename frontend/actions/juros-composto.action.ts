"use server";

import postJurosComposto from "@/services/juros-composto.service";
import { InitialFormState, JurosCompostoResponse } from "@/types";

export default async function jurosSimplesAction(
  prevState: InitialFormState<JurosCompostoResponse>,
  formData: FormData
) {
  const data = {
    capital_inicial: Number(formData.get("capital-inicial")),
    taxa_juros: Number(formData.get("taxa-juros")),
    tempo: Number(formData.get("tempo")),
  };

  try {
    const resultado = await postJurosComposto(data);
    return { data: resultado, success: true, error: null };
  } catch (error) {
    return {
      data: null,
      success: false,
      error: "Falha ao calcular juros simples",
    };
  }
}
