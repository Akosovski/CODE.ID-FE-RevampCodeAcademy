import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import {
  UpdateEmailRequest,
  addEmailReq,
} from "@/redux-saga/action/emailAction";

type Modalemail = {
  setRefresh: (value: boolean) => void;
  setOpenModalEdit: (value: boolean) => void;
  setId: any;
  setEmail: any;
};

const CardEditEmail = (props: Modalemail) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      id: props.setId,
      email: props.setEmail,
    },
    onSubmit: async (values) => {
      window.alert("Data Successfully Update");
      try {
        const payload = {
          email: values.email,
        };

        const id = values.id;
        props.setRefresh(true);

        dispatch(UpdateEmailRequest(payload, id));
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Edit Email
      </h2>
      <div className="w-full  bg-white p-3 rounded-md mt-3 mb-3">
        <form>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-4">
              <div className="flex items-center">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900 w-12"
                >
                  <span style={{ display: "inline-block", width: "5rem" }}>
                    Email
                  </span>
                </label>
                <div className="flex-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => props.setOpenModalEdit(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                formik.handleSubmit();
                props.setOpenModalEdit(false);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CardEditEmail;
