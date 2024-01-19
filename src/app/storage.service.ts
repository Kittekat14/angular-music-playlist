import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage;

  constructor() {
    this.storage = window.localStorage; // can be changed to sessionStorage if needed
  }

  setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string): any {
    const item = this.storage.getItem(key);
    return item ? JSON.parse(item) : null;
  }
}
