import React from 'react'
import { Container, Carousel, Card } from 'react-bootstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import palet1 from '../../images/palet.jpg';
import palet2 from '../../images/palet2.jpg';
import palet3 from '../../images/palet3.jpg';
import masasandalye from '../../images/masasandalye.jpg';
import euroepal from '../../images/euroepalpalet.jpg';
import sandalye from '../../images/ahşap masa.jpg';
import './hero.css';


const Hero = () => {
  return (
    <div className='hero'>
            <Container>
             <Carousel interval={3000} fade={true} >
       

            
          <Carousel.Item className='w-100'>
            <Card className="bg-dark text-white w-100" style={{width:"100%"}}>
              <Card.Img src={palet1} style={{width:"100%"}} />
        
              <Carousel.Caption  className='carousel1'>
                
                <Card.Title>Sağlam ve Güvenilir Ahşap Paletler</Card.Title>
                <Card.Text> 
                Üstün dayanıklılığı ve sağlam yapısıyla işinizin ihtiyaçlarını karşılayacak en iyi ahşap paletler için doğru yerdesiniz.                 
                </Card.Text>
                
                </Carousel.Caption>
              
            </Card>
          </Carousel.Item>

          <Carousel.Item >
            <Card className="bg-dark text-white">
              <Card.Img src={euroepal}  />
        
              <Carousel.Caption  className='carousel2'>
                
                <Card.Title>Çevre Dostu Ahşap Paletler</Card.Title>
                <Card.Text> 
                Sürdürülebilirlik ve çevre koruması bizim önceliğimizdir. Ahşap paletlerimizle hem işinize hem de doğaya katkı sağlayın.               
                </Card.Text>
                
                </Carousel.Caption>
              
            </Card>
          </Carousel.Item>

          <Carousel.Item >
            <Card className="bg-dark text-white">
              <Card.Img src={sandalye}  />
        
              <Carousel.Caption  className='carousel3'>
                
                <Card.Title>Estetik ve Pratik Masa-Sandalye Seçenekleri</Card.Title>
                <Card.Text> 
                Ev dekorasyonunuzda sadeliği ve şıklığı bir arada yaşamak için özenle tasarlanmış masa ve sandalye koleksiyonlarımızı keşfedin.                
                </Card.Text>
                
                </Carousel.Caption>
              
            </Card>
          </Carousel.Item>

          <Carousel.Item >
            <Card className="bg-dark text-white">
              <Card.Img src={palet3}  />
        
              <Carousel.Caption className='carousel4'>
                
                <Card.Title>Özelleştirilebilir Ahşap Paletler</Card.Title>
                <Card.Text> 
                İşletmenizin ihtiyaçlarına uygun, özel tasarım ahşap paletlerimizle verimliliği ve depolama alanını maksimize edin.                
                </Card.Text>
                
                </Carousel.Caption>
              
            </Card>
          </Carousel.Item>
       
      </Carousel>
    </Container>
    </div>
  )
}

export default Hero
