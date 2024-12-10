import {
  useState,
  type FormEvent,
  type ChangeEvent,
} from "react";

export const CargaCV = () => {
  const [fileUploaded, setFileUploaded] =
    useState(false);

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Uploaded file:", file);

      // Cambiar el estado a true
      setFileUploaded(true);
    } else {
      // Cambiar el estado a false si no hay archivo
      setFileUploaded(false);
    }
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const values = Object.fromEntries(
      formData.entries()
    );

    console.log("Form Values:", values);

    if (fileUploaded) {
      console.log(
        "Archivo cargado correctamente."
      );
    } else {
      console.log(
        "Por favor, cargue un archivo."
      );
    }
  };

  return (
    <form
      className="bg-primary shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl md:col-span-2"
      onSubmit={handleSubmit}
    >
      <div className="px-4 py-6 sm:p-8">
        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-primary-contrast"
            >
              Nombre y Apellido
            </label>
            <div className="mt-2">
              <div className="flex items-center rounded-md bg-primary-dark pl-3 outline outline-1 -outline-offset-1 outline-primary-contrast focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm"
                  placeholder="Franco Acosta"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="about"
              className="block text-sm font-medium text-primary-contrast"
            >
              Sobre vos
            </label>
            <div className="mt-2">
              <textarea
                name="about"
                id="about"
                rows={3}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm"
              ></textarea>
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="file-upload"
              className="block text-sm font-medium text-primary-contrast"
            >
              Cargar CV
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-primary-contrast/25 px-6 py-10">
              <div className="text-center">
                <svg
                  className="mx-auto size-12 text-gray-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <div className="mt-4 flex text-sm text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-secondary-dark p-2 font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span className="text-secondary-contrast">
                      Upload a file
                    </span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileChange}
                    />
                  </label>
                  <p className="pl-1 content-center text-primary-contrast">
                    or drag and drop
                  </p>
                </div>
                <p
                  className={`mt-4 text-sm ${
                    fileUploaded
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {fileUploaded
                    ? "Archivo cargado correctamente."
                    : "Por favor, cargue un archivo."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
        <button
          type="submit"
          className="rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};
