import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Item, Container, Header, Segment} from 'semantic-ui-react'

class ValuePropCarousel extends React.Component {
  render() {
    return (
      <Container>
        <CarouselProvider
          naturalSlideWidth={10}
          naturalSlideHeight={15}
          totalSlides={7}
          isPlaying={true}
          interval={3000}
          playDirection='forward'
          id="carousel"
        >
          <Slider id="carousel">
            <Header as='h5'><Slide className='carousel-font' id='carousel' index={0}>"When is the cheapest time to travel?"</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={1}>"When should I travel for the best weather?"</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={2}>"What are the best hotels that fit my preferences?"</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={3}>"Will an AirBnb be better/cheaper than a hotel?"</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={4}>"What are the best restaurants?"</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={5}>"What are the must-see tourist sites?"</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={6}>"What are the top activities that fit my preferences? "</Slide></Header>

            <Header as='h5'><Slide className='carousel-font' id='carousel' index={7}>"When is the busiest time to travel there?"</Slide></Header>

          </Slider>
        </CarouselProvider>
      </Container>
    );
  }
}
export default ValuePropCarousel;
