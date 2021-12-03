class Cadeau {
            constructor(nom, lien, importance = 1, qui = "cedric") {
                if (importance == null) importance = 1;
                this.nom = nom;
                this.lien = lien;
                this.importance = "";
                for (let i = 0; i < importance; i++) {
                    this.importance += "\u2738";
                }
                this.qui = qui;
                this.blocQui = document.getElementById(qui);
                this.print();
            }
            print() {
                this.li = document.createElement("li");
                this.li.classList.add(this.qui);
                this.a = document.createElement("a");
                this.a.textContent = this.nom;
                this.a.style.cursor = "not-allowed";
                if (this.lien != null) {
                    this.a.href = this.lien;
                    this.a.target = "_blank";
                    this.a.style.cursor = "pointer";
                }
                this.li.appendChild(this.a)
                this.star = document.createElement("span");
                this.star.textContent = this.importance;
                this.star.style.border = "1px solid black";
                this.star.style.borderRadius = "25px";
                this.star.style.marginLeft = "1em";
                this.star.style.padding = "0 0.2em";
                this.star.style.color = "red";
                this.star.style.textAlign = "center";
                this.star.style.right = "0";
                this.star.style.backgroundColor = (this.qui == "cedric") ? "blue" : "purple";
                this.star.style.color = "yellow";
                this.star.style.textShadow = "0px 0px 3px black";
                this.star.style.fontSize = "large";
                this.li.style.listStyle = "none";
                this.li.classList.add("liste");
                this.li.appendChild(this.star);
                this.blocQui.appendChild(this.li);
            }

            addCommentaire(comment) {
                this.comment = document.createElement("span");
                this.li.appendChild(this.comment);
                this.comment.textContent = comment;
                this.comment.classList.add("comment");
                this.comment.style.marginLeft = "2em";
                return this;
            }

            warning() {
                this.comment.classList.add("warning");
                return this;
            }

            taken() {
                this.a.style.textDecoration = "line-through";
                this.a.style.color = "black";
                this.a.style.cursor = "not-allowed";
                this.a.removeAttribute("href");
                if (this.star != undefined) this.star.remove();
                if (this.comment != undefined) this.comment.remove();
            }

        }
