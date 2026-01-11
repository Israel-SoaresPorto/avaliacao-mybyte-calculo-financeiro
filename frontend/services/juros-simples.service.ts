import { JurosSimplesRequest, JurosSimplesResponse } from "@/types";

export default async function postJurosSimples(
  data: JurosSimplesRequest
): Promise<JurosSimplesResponse> {
  const res = await fetch("http://localhost:8080/juros-simples", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Falha ao calcular juros simples");

  return res.json();
}
