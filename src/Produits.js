class Produit {
  constructor(nom, qte) {
    this.nom = nom;
    this.qte = qte;
    this.id = Date.now() + Math.floor(Math.random() * 10);
    // génération d'un id unique
  }
}

export default Produit;
