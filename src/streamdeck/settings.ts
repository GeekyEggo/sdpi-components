import { ActionInfo, Info } from "./streamDeck";

/**
 * Provides global settings for the Stream Deck.
 */
export default abstract class Settings {
    static info: Info;
    static actionInfo: ActionInfo;
    
    /**
     * Initializes the global settings.
     * @param inInfo A json object containing information about the application.
     * @param inActionInfo A json object containing information about the action.
     */
    static Init(inInfo: string, inActionInfo: string): void {
        Settings.info = JSON.parse(inInfo)
        Settings.actionInfo = JSON.parse(inActionInfo);
    }
}
