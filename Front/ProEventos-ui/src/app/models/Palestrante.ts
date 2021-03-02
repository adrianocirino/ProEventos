import { Evento } from './evento.model';
import { Lote } from './Lote';
import { RedeSocial } from './RedeSocial';
export interface Palestrante {
  id: number;
  nome: string;
  descricao: string;
  imagemURL: string;
  telefone: string;
  email: string;
  lotes: Lote[];
  redesSociais: RedeSocial[];
  palestrantesEventos: Evento[];
}
