type VoidCallback = (...args: unknown[]) => void;

// TODO type event as enum

interface Listeners {
  [key: string]: VoidCallback[];
}

class EventBus {
  listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  subscribe(event: string, callback: VoidCallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  unsubscribe(event: string, callback: VoidCallback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventBus;
