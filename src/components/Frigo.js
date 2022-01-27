import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
//-------------------------------------
import Produit from "../Produits";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import FrigoForm from "./FrigoForm";
import { useState, useEffect } from "react";

function Frigo(props) {
  const [frigo, setFrigo] = useState([]);
  useEffect(() => {
    let url = `https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/12/produits`;
    let fetchOptions = { method: "GET" };
    fetch(url, fetchOptions)
      .then((response) => {
        return response.json();
      })
      .then((dataJSON) => {
        setFrigo(dataJSON);
        console.log(dataJSON);
      });
  }, [props]);
  const handlerProduit = (produit) => {
    let f = [...frigo];
    const test = f.find((prod) => prod.nom === produit.nom);
    console.log(test);
    if (test === undefined) {
      f.push(produit);
      console.log(f);
    } else {
      let ajout = parseInt(test.qte);
      let base = parseInt(produit.qte);
      test.qte = base + ajout;
    }
    setFrigo(f);
  };

  const handlerDelete = (index) => {
    let fr = [...frigo];
    fr.splice(index, 1);
    setFrigo(fr);
  };

  const handlerPlusUn = (index) => {
    let fr = [...frigo];
    fr[index].qte = parseInt(fr[index].qte) + 1;
    setFrigo(fr);
  };

  const handlerMoinsUn = (index) => {
    let fr = [...frigo];
    fr[index].qte = parseInt(fr[index].qte) - 1;
    if (fr[index].qte == 0) {
      console.log("delete");
      handlerDelete(index);
    } else {
      setFrigo(fr);
    }
  };

  return (
    <div>
      <List>
        {frigo.map((item, index) => {
          return (
            <ListItem key={item.id}>
              <ListItemText>
                {item.nom} ({item.qte})
              </ListItemText>
              <ListItemIcon>
                <Button onClick={() => handlerDelete(index)}>
                  <DeleteIcon />
                </Button>
                <Button onClick={() => handlerPlusUn(index)}>
                  <AddCircleOutlineIcon />
                </Button>
                <Button onClick={() => handlerMoinsUn(index)}>
                  <RemoveCircleOutlineIcon />
                </Button>
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
      <FrigoForm handlerP={handlerProduit}></FrigoForm>
    </div>
  );
}
export default Frigo;
