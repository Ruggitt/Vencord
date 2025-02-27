/*
 * Vencord, a modification for Discord's desktop app
 * Copyright (c) 2022 Vendicated and contributors
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


declare global {
    /**
     * This exists only at build time, so references to it in patches should insert it
     * via String interpolation OR use different replacement code based on this
     * but NEVER reference it inside the patched code
     *
     * @example
     * // BAD
     * replace: "IS_WEB?foo:bar"
     * // GOOD
     * replace: IS_WEB ? "foo" : "bar"
     * // also good
     * replace: `${IS_WEB}?foo:bar`
     */
    export var IS_WEB: boolean;
    export var IS_DEV: boolean;
    export var IS_STANDALONE: boolean;

    export var VencordNative: typeof import("./VencordNative").default;
    export var Vencord: typeof import("./Vencord");
    export var appSettings: {
        set(setting: string, v: any): void;
    };
    /**
     * Only available when running in Electron, undefined on web.
     * Thus, avoid using this or only use it inside an {@link IS_WEB} guard.
     *
     * If you really must use it, mark your plugin as Desktop App only via
     * `target: "DESKTOP"`
     */
    export var DiscordNative: any;

    interface Window {
        webpackChunkdiscord_app: {
            push(chunk: any): any;
            pop(): any;
        };
        [k: string]: any;
    }
}

export { };
