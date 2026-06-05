export interface Keyboard {
  id: number;
  brand: string;
  model: string;
  price: number;
  imageUrl: string;
  specs: KeyboardSpecs;
  features: KeyboardFeatures;
}

export interface KeyboardFeatures {
  wireless: boolean;
  rgb: boolean;
  hotSwap: boolean;
}

export interface KeyboardSpecs {
  layout: string;
  switchType: string;
}

export interface KeyboardCreateRequest {
  brand: string;
  model: string;
  imageUrl: string;
  price: number;
  specs: KeyboardSpecs;
  features: KeyboardFeatures;
}
