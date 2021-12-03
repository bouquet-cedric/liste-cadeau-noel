        window.onload = function() {
            new Cadeau("Deck Magic", "https://www.play-in.com/produit/359433-kit_de_demarrage_arena_2021-_magic_fr", 3).taken();
            new Cadeau(
                "120 protèges-carte pour les cartes Magic",
                "https://www.play-in.com/produit/337610-100_pochettes_dual_matte_format_standard_eucalyptus_-_dragon_shield", 3, "cedric").addCommentaire(
                "Format standard").warning();
            new Cadeau("Pantalon", null, 3, "loriane");
            new Cadeau("Pyjama", null, 1, "loriane");
            new Cadeau("Concert R3D", null, 1, "loriane").addCommentaire("=> Steve");
            new Cadeau("Concert Greenday - Fallout Boy", null, 1, "loriane").addCommentaire("Place assise").warning();
            new Cadeau("Table de ping-pong", null, 1, "futur");
            new Cadeau("Canapé", null, 3, "futur");
            new Cadeau("Lit", null, 2, "futur");
            new Cadeau("Lave-vaisselle", null, 3, "futur");
            new Cadeau("Vélo", null, 2, "futur").addCommentaire("pour Loriane");
            new Cadeau("Housse de protection voiture + volant", null, 2, "adeux");
            new Cadeau("Lots de boules de pétanque", "https://www.obut.com/fr/boules-de-petanque/boules-de-petanque-loisir-inox/3-boules-de-petanque-obut-tatou.html", 2, "cedric").addCommentaire("Des boules un peu lourdes");
        }
