export interface PartnerItem {
  id: number;
  name: string;
  image: string;
  link: string;
  active?: boolean;
}

/**
 * Lista oficial de parceiros da Coop63.
 *
 * Ao inserir parceiros ativos neste array, o carrossel de "Parceiros" na Home
 * (logo após Contato) e o item "Parceiros" no menu são habilitados automaticamente.
 */
export const partnersData: PartnerItem[] = [
  {
    id: 1,
    name: 'Sistema OCB',
    image: '/assets/aistudio/sistema-ocb_casas_60ed6f4a.svg',
    link: 'https://somoscooperativismo.coop.br/institucional/ocb',
    active: true,
  },
];

export const activePartners: PartnerItem[] = partnersData.filter(
  (partner) => partner.active !== false
);

export const hasPartners: boolean = activePartners.length > 0;
