import { exposeInMainWorld } from './exposeInMainWorld';
import {ipcRenderer} from 'electron';

// Export for types in contracts.d.ts
export const ipc = ipcRenderer;

exposeInMainWorld('ipc', ipc);
