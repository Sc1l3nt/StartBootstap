import React, { Component } from 'react'

export default class Item2 extends Component {
    icon = "cloud-download"
    classIcon = `icon bi bi-${this.icon}`;
    title = 'Free to download';
    info = "As always, Start Bootstrap has a powerful collectin of free templates.";
    render() {
        return (
            <div className='item'>
                <div className="card bg-light border-0 h-100">
                    <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0 position-relative">
                        <div style={{top: "-10%", left: "40%"}} className="px-3 py-2 feature bg-primary bg-gradient text-white rounded rounded-3 position-absolute"> <h2><i className={this.classIcon}></i></h2></div>
                        <h2 className="fs-4 fw-bold" style={{height: '80px'}}>{this.title}</h2>
                        <p className="mb-0" style={{height: '40px'}}>{this.info}</p>
                    </div>
                </div>
            </div>
        )
    }
}
