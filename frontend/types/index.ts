export interface JurosSimplesRequest {
  capital_inicial: number;
  taxa_juros: number;
  tempo: number;
}

export interface JurosSimplesResponse {
  juros: number;
  montante_final: number;
}

export interface JurosCompostoRequest {
  capital_inicial: number;
  taxa_juros: number;
  tempo: number;
}

export interface JurosCompostoResponse {
  juros: number;
}

export interface ValorPresenteRequest {
  valor_futuro: number;
  taxa_juros: number;
  tempo: number;
}

export interface ValorPresenteResponse {
  valor_presente: number;
}

export interface InitialFormState<T> {
  success: boolean;
  data: T | null;
  error: string | null;
}
