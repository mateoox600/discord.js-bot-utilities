/// <reference types="node" />
import { EventEmitter } from "events";
export interface DataTemplate<Key> {
    id: Key;
}
export declare class DataManager<Key, Value extends DataTemplate<Key>> extends EventEmitter {
    data: Map<Key, Value>;
    name: string;
    constructor(name: string);
    load(): void;
    save(id: Key): void;
    private saveData;
    saveAll(): void;
}
