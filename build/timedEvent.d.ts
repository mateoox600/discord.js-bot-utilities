import { Event } from "./event";
export declare class TimedEvent extends Event {
    timeCreated: number;
    duration: number;
    constructor(event: Event, duration: number);
}
