import { ValorPresenteRequest, ValorPresenteResponse } from "@/types";

export default async function postValorPresente(
  data: ValorPresenteRequest
): Promise<ValorPresenteResponse> {
  const res = await fetch("http://localhost:8080/valor-presente", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Falha ao calcular valor futuro");

  return res.json();
}
