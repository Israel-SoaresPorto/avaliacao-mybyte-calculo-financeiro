export function formatarParaMoeda(valor: number) {
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency: "BRL",
  };

  return Intl.NumberFormat("pt-BR", options).format(valor);
}
