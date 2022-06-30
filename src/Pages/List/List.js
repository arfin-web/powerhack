import React from 'react';
import './List.css';

const List = () => {
    return (
        <>
            <table className="table bg-white rounded-4 mt-4">
                <thead>
                    <tr>
                        <th scope="col">Biiling ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Paid Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button type="button" className="btn edit-btn fw-bold rounded-pill me-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Edit
                            </button>

                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h3 className="modal-title fw-bold title-color2" id="exampleModalLabel">Edit Bill</h3>
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
                                                    <button type="submit" className="btn common-btn fw-bold rounded-pill">Confirm</button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary fw-bold rounded-pill" data-bs-dismiss="modal">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="btn delete-btn rounded-pill fw-bold">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default List;