import React, { Component } from 'react'
import Card from './Cards.js'

export class Carousel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             current_card:1
        }
    }

    componentDidMount() {
        let first_card_clone = this.card_container.children[0].cloneNode(true);
        let last_card_clone = this.card_container.children[this.card_container.children.length - 1].cloneNode(true);
    
        this.card_container.insertBefore(last_card_clone,this.card_container.children[0]);
        this.card_container.append(first_card_clone);
        this.card_container.style.transitionDuration = '0.0s';
        this.card_container.style.transform = `translate(-${350}px)`;
        
    }

    handle_next = () => {
        if (this.state.current_card < this.card_container.children.length - 1) {
        let new_current_card = this.state.current_card + 1;

        this.setState({ current_card: new_current_card}, () => {
            this.card_container.style.transitionDuration = '0.2s';
            this.card_container.style.transform = `translate(-${350 * this.state.current_card}px)`;
        
            if (this.state.current_card === this.card_container.children.length - 1) {
                setTimeout(() => {
                this.card_container.style.transitionDuration = '0.2s';
                this.card_container.style.transform = `translate(-${350}px)`;

                this.setState({current_card: 1});
                }, 502);       
            }        
        })
        } else {
        return;
    }
    }

    handle_previous = () => {
        if (this.state.current_card > 0) {
            let new_current_card = this.state.current_card - 1;
    
            this.setState({ current_card: new_current_card}, () => {
                this.card_container.style.transitionDuration = '0.2s';
                this.card_container.style.transform = `translate(-${350 * this.state.current_card}px)`;
            
                if (this.state.current_card === 0) {
                    setTimeout(() => {
                    this.card_container.style.transitionDuration = '0.2s';
                    this.card_container.style.transform = `translate(-${350 * this.card_container.children.length  -1}px)`;
    
                    this.setState({current_card: this.card_container.children.length - 1});
                    }, 502);       
                }        
            })
        } else {
            return;
        }
    }
    
    render() {
        return (
            <div>                
                <div className='view-port' style={styles.view_port}>
                    <button onClick={this.handle_previous}>Previous</button>
                    <button onClick={this.handle_next}>Next</button>                                        
                    <div ref= {ref_id => this.card_container = ref_id} className='card-container' style={styles.card_container}>
                        <Card card_number='Images/img1.png' card_desc='this is capitec' card_hint='capitec'/>
                        <Card card_number='Images/img2.png' card_desc=' this is fnb' card_hint='fnb'/>
                        <Card card_number='Images/img3.jpg' card_desc='this is absa' card_hint='absa'/>
                        <Card card_number='Images/img4.png' card_desc='this is standardbank' card_hint='standardbank'/>
                        <Card card_number='Images/img5.png' card_desc='this is nedbank' card_hint='nedbank'/>
                    </div>                    
                </div>
            </div>
        )
    }
}

const styles = {
    view_port : {
        top: '50%',
        left: '50%',        
        width: "350",
        height: "200",
        overflow: 'hidden'
    },
    card_container: {
        display:'flex',
        flexDirection: 'row',
        width: 'fit-content',
    }
}

export default Carousel

