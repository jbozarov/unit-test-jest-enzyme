import React, { Component } from 'react'
import './Headline.css'

export class Headline extends Component {
   constructor() {
      super(); 

      this.state = {}
   }
   render() {
      const { header, desc } = this.props; 

      if (!header) {
         return null; 
      }
      return (
         <div data-test='headlineComponent' className='headline' >
            <h1 data-test='header' > {header} </h1>
            <p data-test='desc' >
               {desc}
            </p>
         </div>
      )
   }
}

export default Headline
