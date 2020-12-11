import React from 'react'

const Tooltips = (props) => {
        return (
        <div style={styles.tips}>
            <p>{props.card_hint}</p>           
        </div>
        
    )
}
const styles = {
tips : {
    marginLeft: '10px',
    textAlign: 'center',    
    width: '75px',
    height: '50px',
    },
}

export default Tooltips;
