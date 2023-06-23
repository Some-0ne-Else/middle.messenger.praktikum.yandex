type ComponentProps = Record<string, unknown>;
type VoidCallback = (...args: ComponentProps[]) => void;
export type EventBusInstance = InstanceType<typeof EventBus>;

// TODO type event as enum

interface Listeners {
  [key: string]: VoidCallback[];
}

class EventBus {
  listeners: Listeners;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: VoidCallback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  off(event: string, callback: VoidCallback) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event] = this.listeners[event].filter((listener) => listener !== callback);
  }

  emit(event: string, ...args: ComponentProps[]) {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }
}

export default EventBus;
