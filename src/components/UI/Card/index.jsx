import user from "../../../images/icons8-user-100.png";

export default function Card({
  contact_number,
  contact_name,
  deleteContact,
  id,
}) {
  return (
    <div className="card bg-white flex p-5 gap-[30px] items-center justify-start rounded">
      <img src={user} alt="laptop" />

      <div className="flex items-center justify-between w-full">
        <div className="max-w-[600px]">
          <h1 className="text-[32px]">
            {contact_number ? contact_number : "Muhammadjon"}
          </h1>
          <p className="text-[24px]">
            {contact_name ? contact_name : "+998 95 977 40 40"}
          </p>
        </div>
        <button
          onClick={() => deleteContact(id)}
          className="w-40 h-10 bg-red-500 text-white rounded  "
        >
          Delete
        </button>
      </div>
    </div>
  );
}
