import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from '../components/Card';

import cold from '../assets/images/cold-bg.jpg'
import hot from '../assets/images/warm-bg.jpg';
import chair from '../assets/images/chair.jpg';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'My portfolio',
                    subTitle: 'The cookbook for developers',
                    imgSrc: cold,
                    link: 'https://github.com/safat661/My_Portfolio',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Recycler',
                    subTitle: 'YouTube channel',
                    imgSrc: chair,
                    link: 'https://github.com/safat661/Burglar_Alarm',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    imgSrc: hot,
                    link: 'https://github.com/safat661/Curriculum-Vitae',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;