import Card from "./components/UI/Card";
import { useState } from "react";
import Modal from "./components/UI/Modal";
function App() {
  const [openModal, setOpenModal] = useState(false);
  const [contact, setContact] = useState([]);

  console.log(contact);
  return (
    <>
      <div className="container mx-auto ">
        <div className="flex justify-end">
          <button
            className="w-40 h-10 bg-blue-500 text-white rounded mt-10 "
            onClick={() => setOpenModal(true)}
          >
            Add Contact
          </button>
        </div>
        {openModal ? (
          <Modal
            setOpenModal={setOpenModal}
            setContact={setContact}
            contact={contact}
          />
        ) : (
          ""
        )}

        <div className="wrapper bg-gray-400 py-5 px-5 rounded mt-5 flex flex-col gap-5">
          {contact.length ? (
            contact.map((item, index) => {
              console.log(item);
              return (
                <Card
                  key={index}
                  contact_name={item.contactName}
                  contact_number={item.contactNumber}
                />
              );
            })
          ) : (
            <h1 className="text-center text-[24px]">Contacts not found</h1>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
