export default class EmphItem {
    emoji: string
    link: string
    main: string
    secondary: string 

    constructor(emoji : string, main : string, secondary : string = "", link : string = "") {
        this.emoji = emoji
        this.link = link
        this.main = main
        this.secondary = secondary
    }

}
