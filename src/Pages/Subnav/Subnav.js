import React from 'react';
import './Subnav.css';

const Subnav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white rounded-pill">
                <div className="container-fluid">
                    <h3 className="navbar-brand text-dark">Billings</h3>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn common-btn fw-bold rounded-pill" type="submit">Search</button>
                            </form>
                        </ul>

                        <button type="button" className="btn common-btn fw-bold rounded-pill" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add New
                        </button>

                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3 className="modal-title fw-bold title-color" id="exampleModalLabel">Add New Bill</h3>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <form className="row g-3">
                                            <div className="col-12">
                                                <label for="inputFullName" className="form-label">FullName</label>
                                                <input type="text" className="form-control" id="inputFullName" />
                                            </div>
                                            <div className="col-12">
                                                <label for="inputEmail" className="form-label">Email</label>
                                                <input type="email" className="form-control" id="inputEmail" />
                                            </div>
                                            <div className="col-12">
                                                <label for="inputPhone" className="form-label">Phone</label>
                                                <input type="number" className="form-control" id="inputPhone" />
                                            </div>
                                            <div className="col-12">
                                                <label for="inputPaidAmount" className="form-label">Paid Amount</label>
                                                <input type="number" className="form-control" id="inputPaidAmount" />
                                            </div>
                                            <div className="col-12">
                                                <button type="submit" className="btn common-btn fw-bold rounded-pill">Add Billing</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary fw-bold rounded-pill" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Subnav;