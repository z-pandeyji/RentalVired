/* footer component */
import React, { Component } from 'react';
import '../styles/footer.css';

export default class footer extends Component {
    render() {
        return (
            <div className="footer-parent">
                <div className="footer">
                    <p>Email us: <a href="mailto:rentalvired@gmail.com">rentalvired@gmail.com</a></p>
                    <p>Call us: (91) 34567895</p>
                    <p>Visit us:Rental Vired</p>
                </div>
            </div>
        )
    }
}
