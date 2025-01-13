export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS = "") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.authorize = authorize;
        this.pathJS = pathJS;
    }
}

/*
[] -> Tout le monde peut y acceder
 ["disconnected"] -> Réserver aux utilisateurs déconnecté
 ["client"] -> Seul les clients peuvent y acceder
["admin"] -> Seul l'admin peut y acceder
["admin", "client"] -> Seul l'admin ou le client peuvent y acceder
*/