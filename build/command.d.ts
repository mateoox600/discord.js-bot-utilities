import { Message } from 'discord.js';
export declare class Command {
    name: string;
    aliases: Array<string>;
    ownerOnly: boolean;
    description: string;
    execute: (e: Message, args: string[]) => void;
    constructor(name: string, aliases: Array<string>, ownerOnly: boolean, description: string, execute: (e: Message, args: string[]) => void);
}
