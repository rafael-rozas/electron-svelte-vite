import { ipcMain } from 'electron';

ipcMain.on('msj',(event, data)=>{
    console.log(data);
});