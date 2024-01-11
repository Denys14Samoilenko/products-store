export enum Category {
  man = "men's clothing",
  woman = "women's clothing",
  jewelery = "jewelery",
  electronic = "electronics",
}

export interface NotifyParams {
  position: string;
  autoClose: number;
  hideProgressBar: boolean;
  closeOnClick: boolean;
  pauseOnHover: boolean;
  draggable: boolean;
  progress: undefined;
  theme: string;
}
