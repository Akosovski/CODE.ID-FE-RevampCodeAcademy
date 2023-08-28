"use client";
import { Card } from "flowbite-react";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getDataOneUserReq } from "@/redux-saga/action/userAction";
import { useSelector } from "react-redux";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import CardEditProfile from "./edit/cardEditProfile";
import CardPhone from "./cardPhone";
import CardLogin from "./cardLogin";
import CardEmail from "./cardEmail";
import CardAddress from "./cardAddress";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      delete: "hover:bg-red-400",
      edit: "hover:bg-yellow-300  ",
      add: "hover:bg-emerald-300",
    },
  },
};

export const CardProfile = ({ dataProfile }: any) => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const props = { openModal, setOpenModal, email, setEmail };
  const dispatch = useDispatch();
  const id = dataProfile.userid;
  const dataUser = useSelector((state: any) => state.user.oneUser);
  useEffect(() => {
    if (id) {
      dispatch(getDataOneUserReq(id));
    }
  }, [id]);

  return (
    <div className="flex w-1/3 flex-col mr-4">
      <Card className="ml-3">
        {dataUser &&
          dataUser.map((item: any) => (
            <div key={item.userId} className="flex flex-col pb-10">
              <span className="flex justify-end">
                <Flowbite theme={{ theme: customTheme }}>
                  <Button
                    color="edit"
                    className="w-5 h-5"
                    onClick={() => props.setOpenModal("form-elements")}
                  >
                    <svg
                      className="w-3 h-4 text-black"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Zm-10.696 3.59 2.139 2.14 7.138-7.137.007-.005-2.141-2.141-7.143 7.143Zm1.433 4.261L2 12.852.051 18.684a1 1 0 0 0 1.265 1.264L7.147 18l-2.575-2.571Zm14.249-14.25a4.03 4.03 0 0 0-5.693 0L11.7 2.611 17.389 8.3l1.432-1.432a4.029 4.029 0 0 0 0-5.689Z" />
                    </svg>
                  </Button>
                  <Modal
                    show={props.openModal === "form-elements"}
                    size="lg"
                    popup
                    onClose={() => props.setOpenModal(undefined)}
                  >
                    <Modal.Header />
                    <Modal.Body>
                      <CardEditProfile />
                    </Modal.Body>
                  </Modal>
                </Flowbite>
              </span>
              <img
                alt="Bonnie image"
                className="mb-3 rounded-full shadow-lg"
                height="96"
                src="https://cdn.vectorstock.com/i/preview-1x/66/14/default-avatar-photo-placeholder-profile-picture-vector-21806614.jpg"
                width="96"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {`${item.userFirstName} ${item.userLastName}`}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {item.userName}
              </span>
            </div>
          ))}
      </Card>
      <CardLogin />
      <CardEmail />
      <CardPhone />
      <CardAddress />
    </div>
  );
};
