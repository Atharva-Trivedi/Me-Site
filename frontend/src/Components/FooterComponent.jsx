import React, { Component } from 'react';

class FooterComponent extends Component {
    render() {
        return (
            
            <div className='container position-absolute bottom-0 mx-auto text-center' >
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <div className='card h-10 w-10 mx-auto'>
                    <div className='card-body' >
                    <a href="https://www.linkedin.com/in/atharva-trivedi-b35788182/" class="fa fa-linkedin">&ensp;</a>
                    <a href='https://github.com/Atharva-Trivedi' class='fa fa-github '>&ensp;</a>
                    <a href='https://www.instagram.com/atharvatrivedi/' class='fa fa-instagram '> </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default FooterComponent;