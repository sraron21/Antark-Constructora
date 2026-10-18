export interface HousingModel {
  id: string;
  name: string;
  bedrooms: number;
  builtArea: string;
  lotArea: string;
  monthlyEstimate: string;
  badge: string;
  badgeType: 'secondary' | 'primary';
  description: string;
  image: string;
  altText: string;
  features: string[];
  specs: {
    distribution: string;
    bathrooms: string;
    kitchen: string;
    expansion: string;
    parking: string;
  };
}

export interface ProjectStage {
  id: string;
  name: string;
  subtitle: string;
  statusText: string;
  statusType: 'success' | 'active' | 'locked';
  description: string;
  progress: number;
  code: string;
  deliveryYear: string;
  highlight?: boolean;
}

export interface LotItem {
  id: string;
  name: string;
  block: string;
  number: string;
  area: string;
  status: 'disponible' | 'entregado' | 'reservado';
  stage: string;
  model: string;
  description: string;
  priceEstimate?: string;
}

export interface EligibilityAnswers {
  hasFamilyGroup: boolean | null;
  noPriorProperty: boolean | null;
  incomeLimitValid: boolean | null;
}
