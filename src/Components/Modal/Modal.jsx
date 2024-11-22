

const Modal = () => {
    const handleForm = (e) =>{
        e.preventDefault();
        const form = new FormData(e.target);
        const firstname = form.get('fname');
        const lastname = form.get('lname');
        const email = form.get('email');
        const date = form.get('date');
        console.log(firstname,lastname,email,date);
        
    }
    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>open modal</button> */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form onSubmit={handleForm} className="space-y-2">
                        <input
                            name="fname"
                            type="text"
                            placeholder="First Name"
                            className="input input-bordered input-secondary w-full max-w-xs" />
                        <input
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            className="input input-bordered input-secondary w-full max-w-xs" />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered input-secondary w-full max-w-xs" />
                        <input
                            type="date"
                            name="date"
                            placeholder="Date"
                            className="input input-bordered input-secondary" />
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered input-secondary w-full max-w-xs" />
                         <button type="submit" className="btn btn-primary">Make Appoinment</button>   
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;