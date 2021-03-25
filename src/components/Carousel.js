import React from 'react';

import Card from '../components/Card';

import GitHub from '../assets/images/GitHub.png';
import TJ from '../assets/images/TJ.jpeg';
import LinkedIn from '../assets/images/LinkedIn.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'GitHub',
                    subTitle: 'Checkout my Projects',
                    imgSrc: GitHub,
                    link: 'https://github.com/tanjaingit',
                    selected: true
                },
                {
                    id: 1,
                    title: 'Tanisha Jain',
                    //subTitle: '',
                    imgSrc: TJ,
                    //link: '',
                    selected: false
                },
                {
                    id: 2,
                    title: 'LinkedIn',
                    subTitle: 'Checkout my Profile',
                    imgSrc: LinkedIn,
                    link: 'https://www.linkedin.com/in/tanisha-jain-1a662616b/',
                    selected: true 
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