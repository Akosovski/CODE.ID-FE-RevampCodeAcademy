import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";

import { addPhoneReq } from "@/redux-saga/action/phoneAction";
import { addEducationReq } from "@/redux-saga/action/educationAction";

type Modaleducation = {
  setRefresh: (value: boolean) => void;
  setOpenModal: (value: string | undefined) => void;
  setDataProfile: any;
};
const CardAddEducation = (props: Modaleducation) => {
  const dispatch = useDispatch();
  const [selectedDegreeCode, setSelectedDegreeCode] = useState("");
  const handleDegreeCodeChange = (event: any) => {
    setSelectedDegreeCode(event.target.value);
    formik.setFieldValue("degree", event.target.value);
  };

  const [selectedStartCode, setSelectedStartCode] = useState("");
  const handleStartCodeChange = (event: any) => {
    setSelectedStartCode(event.target.value);
    formik.setFieldValue("start", event.target.value);
  };

  const [selectedEndCode, setSelectedEndCode] = useState("");
  const handleEndCodeChange = (event: any) => {
    setSelectedEndCode(event.target.value);
    formik.setFieldValue("end", event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      user_id: props.setDataProfile.userid,
      school: "",
      study: "",
      degree: "",
      grade: "",
      start: "",
      startYear: "",
      end: "",
      endYear: "",
      activies: "",
      description: "",
    },
    onSubmit: async (values) => {
      try {
        const payload = {
          school: values.school,
          study: values.study,
          degree: selectedDegreeCode,
          grade: values.grade,
          start: selectedStartCode,
          startYear: values.startYear,
          end: selectedEndCode,
          endYear: values.endYear,
          activies: values.activies,
          description: values.description,
        };

        const id = values.user_id;
        // window.alert("Data Successfully ");
        dispatch(addEducationReq(payload, id));
        props.setRefresh(true);
        window.location.reload();
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  return (
    <>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        Add Education
      </h2>
      <div className="w-full bg-white p-3 rounded-md mt-3 mb-3">
        <form>
          <div className="border-b border-gray-900/10 pb-12">
            {/* SCHOOL */}
            <div className="sm:col-span-4">
              <div className="flex items-center">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900 w-24"
                >
                  School
                </label>
                <div className="mt-2 flex-1">
                  <input
                    id="school"
                    name="school"
                    type="text"
                    autoComplete="school"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.school}
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* DEGREE*/}
            <div className="sm:col-span-3 mt-3">
              <div className="flex items-center">
                <label
                  htmlFor="degree"
                  className="block text-sm font-medium leading-6 text-gray-900 w-24"
                >
                  Degree
                </label>
                <div className="mt-1">
                  <select
                    id="degree"
                    name="degree"
                    autoComplete="degree"
                    required
                    value={selectedDegreeCode}
                    onChange={handleDegreeCodeChange}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    placeholder="Code Telp."
                  >
                    <option value="Bachelor">Bachelor</option>
                    <option value="Diploma">Diploma</option>
                    <option value="phd">PHD</option>
                    <option value="high_school">High School</option>
                  </select>
                </div>
              </div>
            </div>

            {/* FIELD STUDY*/}
            <div className="sm:col-span-4 mt-3">
              <div className="flex items-center">
                <label
                  htmlFor="study"
                  className="block text-sm font-medium leading-6 text-gray-900 w-24"
                >
                  Field Study
                </label>
                <div className="mt-1 flex-1">
                  <input
                    id="study"
                    name="study"
                    type="text"
                    autoComplete="study"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.study}
                    className="block w-96 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* GRADE*/}
            <div className="sm:col-span-4 mt-3">
              <div className="flex items-center">
                <label
                  htmlFor="grade"
                  className="block text-sm font-medium leading-6 text-gray-900 w-24"
                >
                  Grade
                </label>
                <div className="mt-1">
                  <input
                    id="grade"
                    name="grade"
                    type="text"
                    autoComplete="grade"
                    required
                    onChange={formik.handleChange}
                    value={formik.values.grade}
                    className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            {/* START AND END STUDY */}
            <div className="sm:col-span-4 mt-3 flex items-center">
              <label
                htmlFor="start"
                className="block text-sm font-medium leading-6 text-gray-900 w-24"
              >
                Start
              </label>
              <div className="mt-1">
                <select
                  id="start"
                  name="start"
                  autoComplete="start"
                  required
                  value={selectedStartCode}
                  onChange={handleStartCodeChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  placeholder="Code Telp."
                >
                  <option value="Januari">Januari</option>
                  <option value="Februari">Februari</option>
                  <option value="Maret">Maret</option>
                  <option value="April">April</option>
                  <option value="Mei">Mei</option>
                  <option value="Juni">Juni</option>
                  <option value="Juli">Juli</option>
                  <option value="Agustus">Agustus</option>
                  <option value="September">September</option>
                  <option value="Oktober">Oktober</option>
                  <option value="November">November</option>
                  <option value="Desember">Desember</option>
                </select>
              </div>
              <label
                htmlFor="startYear"
                className="block ml-3 text-sm font-medium leading-6 text-gray-900 w-11"
              >
                Year
              </label>
              <div className="mt-1">
                <input
                  id="startYear"
                  name="startYear"
                  type="text"
                  autoComplete="postal-code"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.startYear}
                  className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <label
                htmlFor="postal-code"
                className="block ml-3 text-sm font-medium leading-6 text-gray-900 w-11"
              >
                Until
              </label>
              <div className="mt-1">
                <select
                  id="end"
                  name="end"
                  autoComplete="end"
                  required
                  value={selectedEndCode}
                  onChange={handleEndCodeChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  placeholder="Code Telp."
                >
                  <option value="Januari">Januari</option>
                  <option value="Februari">Februari</option>
                  <option value="Maret">Maret</option>
                  <option value="April">April</option>
                  <option value="Mei">Mei</option>
                  <option value="Juni">Juni</option>
                  <option value="Juli">Juli</option>
                  <option value="Agustus">Agustus</option>
                  <option value="September">September</option>
                  <option value="Oktober">Oktober</option>
                  <option value="November">November</option>
                  <option value="Desember">Desember</option>
                </select>
              </div>

              <label
                htmlFor="endYear"
                className="block ml-3 text-sm font-medium leading-6 text-gray-900 w-11"
              >
                Year
              </label>
              <div className="mt-1">
                <input
                  id="endYear"
                  name="endYear"
                  type="text"
                  autoComplete="endYear"
                  required
                  onChange={formik.handleChange}
                  value={formik.values.endYear}
                  className="block w-3/4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-4 mt-2">
              <div className="flex items-center">
                <label
                  htmlFor="activies"
                  className="block text-sm font-medium leading-6 text-gray-900 w-24"
                >
                  Activities
                </label>
                <div className="mt-2 flex-1">
                  <textarea
                    name="activies"
                    id="activies"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    required
                    onChange={formik.handleChange}
                    value={formik.values.activies}
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mt-3">
              <div className="flex items-center">
                <label
                  htmlFor="description"
                  className="block text-sm font-medium leading-6 text-gray-900 w-24"
                >
                  Descriptions
                </label>
                <div className="flex-1">
                  <textarea
                    name="description"
                    id="description"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    defaultValue={""}
                    required
                    onChange={formik.handleChange}
                    value={formik.values.description}
                  />
                </div>
              </div>
            </div>
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

export default CardAddEducation;
