"use client";
import { Card } from "flowbite-react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import CardInformation from "./edit/cardEditProfile";
import CardSkill from "./cardSkill";
import CardAddEducation from "./add/cardAddEducation";
import EducationCard from "./educationCard";
import { useEffect, useState } from "react";
import { CardExperiences } from "./cardExperiences";
import { useDispatch, useSelector } from "react-redux";
import { getCookie } from "cookies-next";
import jwt_decode from "jwt-decode";
import { useRouter } from "next/router";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      delete: "hover:bg-red-400",
      edit: "hover:bg-yellow-300  ",
      add: "hover:bg-emerald-300",
    },
  },
};

export const CardProfileRightSide = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  const [refresh, setRefresh] = useState(false);

  const [dataProfile, setDataProfile] = useState("");
  const router = useRouter();
  useEffect(() => {
    const userToken = getCookie("access_token");
    if (typeof userToken === "string") {
      const fetchData = async () => {
        const decodedData: any = jwt_decode(userToken);
        setDataProfile(decodedData);
      };
      console.log(fetchData());
    } else {
      router.push("/signin");
    }
  }, [router]);
  return (
    <div className="flex w-full flex-col mr-4">
      <Card>
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Education
          </h1>
          <span className="flex items-center">
            <Flowbite theme={{ theme: customTheme }}>
              <Button
                color="add"
                className="w-5 h-5"
                onClick={() => props.setOpenModal("education-form-elements")}
              >
                <svg
                  className="w-4 h-4 text-black"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 5.757v8.486M5.757 10h8.486M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </Button>
              <Modal
                show={props.openModal === "education-form-elements"}
                size="5xl"
                popup
                onClose={() => props.setOpenModal(undefined)}
              >
                <Modal.Header />
                <Modal.Body>
                  <CardAddEducation
                    setOpenModal={setOpenModal}
                    setRefresh={setRefresh}
                    setDataProfile={dataProfile}
                  />
                </Modal.Body>
              </Modal>
            </Flowbite>
          </span>
        </div>
        <EducationCard />
      </Card>
      <CardSkill />
      <CardExperiences />
    </div>
  );
};
