import Route from "./Route.js";

//Définir ici nos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html",),
    new Route("/galerie-jeux-video", "Galerie jeux vidéo", "/pages/galerie-jeux-video.html", [], "/js/galerie-jeux-video.js"),
    new Route("/galerie-jeux-d", "Galerie jeux video moderateur", "/pages/galerie-jeux-d.html", [], "/js/galerie-jeux-video.js"),
    new Route("/galerie-jeux-de-societe", "Galerie jeux de société", "/pages/galerie-jeux-de-societe.html", [], "/js/galerie-jeux-video.js"),
    new Route("/galerie-mangas", "Galerie mangas", "/pages/galerie-mangas.html", [], "/js/galerie-jeux-video.js"),
    new Route("/jeux-ps5", "Jeux PS5", "/pages/Jeux-ps5.html", [], "/js/galerie-jeux-video.js"),
    new Route("/jeux-xbox", "Jeux Xbox", "/pages/Jeux-xbox.html", [], "/js/galerie-jeux-video.js"),
    new Route("/jeux-switch", "Jeux Switch", "/pages/Jeux-switch.html", [], "/js/galerie-jeux-video.js"),
    new Route("/jeux-de-carte", "Jeux de carte", "/pages/Jeux-de-carte.html", [], "/js/galerie-jeux-video.js"),
    new Route("/Les-incontournables", "Jeux de carte", "/pages/Les-incontournables.html", [], "/js/galerie-jeux-video.js"),
    new Route("/Les-mangas", "Jeux de carte", "/pages/Les-mangas.html", [], "/js/galerie-jeux-video.js"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html", [], "/js/galerie-jeux-video.js"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html", [], "/js/galerie-jeux-video.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html", [], "/js/galerie-jeux-video.js"),
    new Route("/editPassword", "Modifier le mot de passe", "/pages/auth/editPassword.html", [], "/js/galerie-jeux-video.js"),];

//Le titre s'affiche comme ceci : Route.titre - Websitename
export const websiteName = "GeekOne";