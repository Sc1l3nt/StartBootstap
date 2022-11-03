import React, { Component } from 'react'
import Item1 from './Item1'
import Item2 from './Item2'
import Item3 from './Item3'
import Item4 from './Item4'
import Item5 from './Item5'
import Item6 from './Item6'

export default class ListItem extends Component {
    render() {
        return (
            <section className='list-item'>
                <div className='row gx-lg-5'>
                    <div className='col-xxl-4 col-lg-4 mb-5'>
                        <Item1/>
                    </div>
                    <div className='col-xxl-4 col-lg-4 mb-5'>
                        <Item2/>
                    </div>
                    <div className='col-xxl-4 col-lg-4 mb-5'>
                        <Item3/>
                    </div>
                    <div className='col-xxl-4 col-lg-4 mb-5'>
                        <Item4/>
                    </div>
                    <div className='col-xxl-4 col-lg-4 mb-5'>
                        <Item5/>
                    </div>
                    <div className='col-xxl-4 col-lg-4 mb-5'>
                        <Item6/>
                    </div>
                </div>
            </section>
        )
    }
}
