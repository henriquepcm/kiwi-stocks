export interface ModalsAndMenuState {
     manageStocks: { isOpen: boolean };
     manageIndicators: { isOpen: boolean };
     menu: { isOpen: boolean };
}

export interface ToggleModalPayload {
     modalName: keyof ModalsAndMenuState;
     isOpen: boolean;
}
