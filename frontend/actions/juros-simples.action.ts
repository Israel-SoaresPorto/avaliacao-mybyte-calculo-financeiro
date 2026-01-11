"use server";

import postJurosSimples from "@/services/juros-simples.service";
import { InitialFormState, JurosSimplesResponse } from "@/types";

export default async function jurosSimplesAction(
  prevState: InitialFormState<JurosSimplesResponse>,
  formData: FormData
) {

  const data = {
    capital_inicial: Number(formData.get("capital-inicial")),
    taxa_juros: Number(formData.get("taxa-juros")),
    tempo: Number(formData.get("tempo")),
  };

  try {
    const resultado = await postJurosSimples(data);
    return { data: resultado, success: true, error: null };
  } catch (error) {
    return {
      data: null,
      success: false,
      error: "Falha ao calcular juros simples",
    };
  }
}
