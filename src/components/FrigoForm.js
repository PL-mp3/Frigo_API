import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// ------------------------------
import React from "react";
import Produit from "../Produits";
import { useState } from "react";

function FrigoForm(props) {
  const [texte, setTexte] = useState("");
  const [qte, setQte] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (setTexte(texte) !== "" && setQte(qte) !== "") {
      const produit = new Produit(texte, qte);
      props.handlerP(produit);
      setTexte("");
      setQte("");
    }
  };
  const handleChangeTexte = (event) => {
    setTexte(event.target.value);
  };
  const handleChangeQte = (event) => {
    setQte(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="outlined-basic"
        label="Aliment"
        variant="outlined"
        type="text"
        placeholder="nom"
        value={texte}
        onChange={handleChangeTexte}
      />
      <TextField
        id="outlined-basic"
        label="Quantité"
        variant="outlined"
        type="number"
        placeholder="qte"
        value={qte}
        onChange={handleChangeQte}
      />
      <Button type="submit" variant="contained">
        Valider
      </Button>
    </form>
  );
}

export default FrigoForm;
