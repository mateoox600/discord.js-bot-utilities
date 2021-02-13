/// <reference types="node" />
import { Client, ClientOptions, Snowflake } from 'discord.js';
import { EventEmitter } from 'events';
import { Command } from './command';
import { Event } from './event';
import { TimedEvent } from './timedEvent';
export declare class Bot extends EventEmitter {
    client: Client;
    prefix: string;
    ownerId: Snowflake;
    commands: Map<string, Command>;
    uniqueCommands: Map<string, Command>;
    private guildDataManager;
    constructor(prefix: string, ownerId: Snowflake, options?: ClientOptions);
    changeGuildPrefix(id: Snowflake, newPrefix: string): this;
    changePrefix(newPrefix: string): this;
    loadCommandsInFolder(folder: string): this;
    addCommand(command: Command): this;
    addCommands(...commands: Command[]): this;
    loadEventsInFolder(folder: string): this;
    registerEvent(event: Event): this;
    registerEvents(...events: Event[]): this;
    registerTimedEvent(event: TimedEvent): this;
    login(token: string): this;
    stop(): void;
}
