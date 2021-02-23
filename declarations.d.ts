declare module '*.png';
declare module '*.scss';
declare module '*.svg';
declare module '*.ts';
declare module '*.tsx';

declare interface Window {
  // App.tsx
  openInventory: any;
  refreshInventory: any;
  openDoubleInventory: any;
  closeInventory: any;

  openHud: any;
  refreshHud: any;
  closeHud: any;

  setAlert: any;

  // HudApp.tsx
  setPlayerRank: any;
  setPlayerAvatar: any;
  setPlayerBuffs: any;
  setPlayerIndicators: any;
  setTime: any;
  setNetwork: any;
  openCar: any;
  closeCar: any;
  setSpeed: any;
  setFuel: any;
  openPhone: any;
  closePhone: any;
  openInteractions: any;
  closeInteractions: any;
  openCorporations: any;
  closeCorporations: any;

  // Phone.tsx
  phone_openIncomingCall: any;
  phone_openLastMessages: any;

  //actions/hud/phone.ts
  phone_openCalls: any;
  phone_openContacts: any;
  phone_openChats: any;
  phone_openChat: any;
  phone_openSettings: any;
  phone_abortIncomingCall: any;
  phone_openCurrentCall: any;
  phone_abortCall: any;

  // Corporations.tsx
  corporations_openPermissions: any;
  corporations_openTreasury: any;
  corporations_openLogs: any;
  corporations_tasks_openCurrentTasks: any;
  corporations_tasks_openNewTask: any;
  corporations_openStaff: any;

  // LogsTab.tsx
  corporations_logs_openPage: any;
}

interface Mp {
  trigger(name: string, ...args: any[]): void;
}

declare const mp: Mp;
