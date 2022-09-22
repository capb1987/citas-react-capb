import Swal from "sweetalert2";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  //destructuring del objeto
  const { nombre, propietario, email, fecha, sintomas, id } = paciente;

  const handleEliminar = () => {
    Swal.fire({
      title: "Desea eliminar este paciente?",
      text: "Esta decisión no tiene reversa!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6F38C5",
      cancelButtonColor: "#d33",
      confirmButtonText: "BORRAR",
      cancelButtonText: "CANCELAR",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarPaciente(id);
        Swal.fire("Borrado!", "El archivo fue borrado con exito!!.", "success");
      }
    });
  };
  return (
    <div className="mt-5 bg-white shadow-md  px-5 py-10 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario:{" "}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Alta: <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between flex-col md:flex-row gap-2">
        <button
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg uppercase font-bold"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white rounded-lg uppercase font-bold"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
