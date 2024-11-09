export default class Route {
    constructor(url, titre, pathHtml, pathJs = "") {
        this.url = url;
        this.titre = titre;
        this.pathHtml = pathHtml;
        this.pathJs = pathJs;
    }
}