import "./index.scss";
import { useRef } from "react";

function Modal({ setOpenModal, setContact, contact }) {
  const numberInputRef = useRef("");
  const nameInputRef = useRef("");
  function addContact() {
    const newContact = {
      id: Date.now(),
      contactName: nameInputRef.current.value,
      contactNumber: numberInputRef.current.value,
    };
    setContact([...contact, newContact]);
    setOpenModal(false);
  }
  return (
    <div className="modal">
      <div className="modal_wrapper ">
        <div className="modal_wrapper_header flex justify-end">
          <i
            onClick={() => setOpenModal(false)}
            className="bx bx-x cursor-pointer"
          ></i>
        </div>

        <div className="modal_wrapper_body p-5">
          <h1 className="text-[28px] font-bold">Enter new Contact</h1>
          <input
            ref={numberInputRef}
            className="input"
            type="tel"
            name="phone"
            id=""
            placeholder="Enter phone number"
          />
          <input
            ref={nameInputRef}
            className="input"
            type="text"
            name="name"
            id=""
            placeholder="Enter contact namer"
          />
        </div>
        <div className="modal_wrapper_footer">
          <div>
            <button className="w-[100px] h-[40px] bg-red-500 text-white rounded  ">
              Cancel
            </button>
            <button
              onClick={() => addContact()}
              className="w-40 h-10 bg-blue-500 text-white rounded  "
            >
              Add Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
