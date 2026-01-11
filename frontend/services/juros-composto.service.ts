import { JurosCompostoRequest, JurosCompostoResponse } from "@/types";

export default async function postJurosComposto(
  data: JurosCompostoRequest
): Promise<JurosCompostoResponse> {
  const res = await fetch("http://localhost:8080/juros-composto", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Falha ao calcular juros composto");

  return res.json();
}
