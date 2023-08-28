import React from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { changePasswordReq } from "@/redux-saga/action/changePasswordAction";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

type Modalpassword = {
  setRefresh: (value: boolean) => void;
  setOpenModal: (value: string | undefined) => void;
  setDataProfile: any;
};

const CardEditPassword = (props: Modalpassword) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      user_id: props.setDataProfile.userid,
      currentPassword: "",
      newPassword: "",
      retypePassword: "",
    },
    onSubmit: async (values) => {
      try {
        const payload = {
          currentpassword: values.currentPassword,
          newpassword: values.newPassword,
          retypepassword: values.retypePassword,
        };

        const id = values.user_id;
        window.alert("Change Password ");
        dispatch(changePasswordReq(payload, id));
        props.setRefresh(true);
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
      }
    },
    validate: (values) => {
      const errors: Record<string, string> = {};

      if (!values.currentPassword) {
        errors.currentPassword = "Current password is required";
      }

      if (!values.newPassword) {
        errors.newPassword = "New password is required";
      } else if (values.newPassword.length < 3) {
        errors.newPassword = "New password must be at least 3 characters long";
      }

      if (!values.retypePassword) {
        errors.retypePassword = "Retype password is required";
      } else if (values.newPassword !== values.retypePassword) {
        errors.retypePassword = "Passwords do not match";
      }

      return errors;
    },
  });
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Change Password
      </h2>
      <div className="w-full  bg-white p-3 rounded-md mt-3 mb-3">
        <form>
          <div className="border-b border-gray-900/10 pb-12">
            <div className="sm:col-span-4">
              <div className="flex items-center">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 w-30"
                >
                  <span style={{ display: "inline-block", width: "8rem" }}>
                    Current Password
                  </span>
                </label>
                <div className="mt-2 flex-1">
                  <input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.currentPassword}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  {formik.touched.currentPassword &&
                  formik.errors.currentPassword ? (
                    <div>{formik.errors.currentPassword}</div>
                  ) : null}
                </div>
              </div>

              <div className="flex items-center mt-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 w-30"
                >
                  <span style={{ display: "inline-block", width: "8rem" }}>
                    New Password
                  </span>
                </label>
                <div className="mt-2 flex-1">
                  <input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.newPassword}
                  />
                  {formik.touched.newPassword && formik.errors.newPassword ? (
                    <div>{formik.errors.newPassword}</div>
                  ) : null}
                </div>
              </div>
              <div className="flex items-center mt-3">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-6 text-gray-900 w-30"
                >
                  <span style={{ display: "inline-block", width: "8rem" }}>
                    Re-type Password
                  </span>
                </label>
                <div className="mt-2 flex-1">
                  <input
                    id="retypePassword"
                    type="password"
                    placeholder="••••••••"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.retypePassword}
                  />
                  {formik.touched.retypePassword &&
                  formik.errors.retypePassword ? (
                    <div>{formik.errors.retypePassword}</div>
                  ) : null}
                </div>
              </div>
            </div>
            {/* ...other input fields */}
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
              onClick={() => {
                props.setOpenModal(undefined);
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                formik.handleSubmit();
                props.setOpenModal(undefined);
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

export default CardEditPassword;
