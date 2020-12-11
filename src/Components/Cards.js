import React from 'react'

const Card = (props) => {
        return (
        <div style={styles.center}>
            <div style={styles.card}>
                <img style={styles.image}src={props.card_number} alt="imgs"useMap="#buttons" />
            </div>
            <p>{props.card_desc}</p>
            <map name="buttons">
                <area shape="rect" coords="0,0,175,200" alt="prev" href=''/>
                <area shape="rect" coords="350,0,175,200" alt="next" href=''/>
            </map>
        </div>
        
    )
}

const styles = {
    card : {
       width: '350px',
       height: '200px',
       backgroundColor: 'black',
       border: '2px solid black',
       boxSizeing: 'border-box',
       },
    image: {
        width: '100%',
        height: '100%'
    },
    center: {
        textAlign: 'center',
    }
}

export default Card;

