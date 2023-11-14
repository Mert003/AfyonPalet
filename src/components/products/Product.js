
import React from 'react';
import { Card } from 'react-bootstrap';
import "./Product.css";

const Products = () => {
    const products = [
        {
          id: 1,
          name: "Euro & Epal Palet Üretimi",
          description: "Euro ve Epal paletleri, uluslararası taşımacılık ve lojistik endüstrisinde yaygın olarak kullanılan standartlara uygun palet türleridir.",
          price: 100,
          imageUrl: require("../../images/euroepalpalet.jpg")
        },
        {
          id: 2,
          name: "Ceviz Ağacından Masa",
          description: "Ceviz ağacından masa, doğal güzellik ve zarafeti bir araya getiren şık mobilyalar arayanlar için mükemmel bir seçimdir.",
          price: 150,
          imageUrl: require("../../images/ahşap masa.jpg")
        },
        {
          id: 3,
          name: "Sandalyeler",
          description: "Sandalyeler, konforlu oturma alanları oluşturmak için tasarlanmış farklı tarzlarda ve malzemelerde üretilen mobilyalardır.",
          price: 120,
          imageUrl: require("../../images/masasandalye.jpg")
        },
        {
          id: 4,
          name: "Sıfır Palet Üretimi",
          description: "Sıfır paletler, yeniden kullanılmış malzemeler yerine yeni malzemeler kullanılarak üretilen palet türüdür.",
          price: 80,
          imageUrl: require("../../images/palet3.jpg")
        }
      ];

  return (
    <div className="container-fluid" style={{padding:"0" , height:"fit-content"}}>
      <div className='product-urunlerimiz'>  <h1 style={{textDecoration:"underline"}}>Ürünlerimiz</h1></div>
        <div className='row justify-content-evenly' style={{width:"100%"}}>   
      {products.map((product) => (
               <Card key={product.id} style={{marginBottom:"25px"}} className='col-5'>
               <Card.Img src={product.imageUrl} alt={product.name} className="product-image" />
               <Card.Body>
                 <Card.Title>{product.name}</Card.Title>
                 <Card.Text>{product.description}</Card.Text>
               </Card.Body>
             </Card>
     
      ))}
      </div>
    </div>
  );
}

export default Products;
