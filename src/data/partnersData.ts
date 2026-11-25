export interface PartnerItem {
  id: number;
  name: string;
  category: string;
  description: string;
  benefit?: string;
  logo?: string;
  website?: string;
  whatsapp?: string;
  address?: string;
  active?: boolean;
}

/**
 * Lista oficial de parceiros e convênios da Coop63.
 *
 * Ao inserir o primeiro parceiro ativo neste array, a seção "Parceiros" na Home
 * (logo após Contato) e o item "Parceiros" no menu são habilitados automaticamente.
 */
export const partnersData: PartnerItem[] = [];

export const activePartners: PartnerItem[] = partnersData.filter(
  (partner) => partner.active !== false
);

export const hasPartners: boolean = activePartners.length > 0;
