import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Item, Container, Header} from 'semantic-ui-react'

class ValuePropCarousel extends React.Component {
  render() {
    return (
      <Container>
        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={15}
          totalSlides={3}
          isPlaying={true}
          playDirection='forward'
          id="carousel"
        >
          <Slider id="carousel">
            <Header as='h5'><Slide className='carousel-font' id='carousel' index={0}>I am the first Slide.</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={1}>I am the first Slide.</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={2}>I am the first Slide.</Slide></Header>

          </Slider>
        </CarouselProvider>
      </Container>
    );
  }
}
export default ValuePropCarousel;
