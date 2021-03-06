import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getData(key: string): any {
    const storageData = localStorage.getItem(key);
    return storageData !== null ? JSON.parse(storageData) : null;
  }

  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
