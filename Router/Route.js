export default class Route {
    constructor(url, titre, pathHtml, authorize, pathJs = "") {
        this.url = url;
        this.titre = titre;
        this.pathHtml = pathHtml;
        this.pathJs = pathJs;
        this.authorize = authorize;
    }
}