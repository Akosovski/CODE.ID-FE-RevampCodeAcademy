import React, { useState, useEffect } from "react";
import { Badge } from "flowbite-react";
import { Card } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";
import { getCookie } from "cookies-next";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import CardEditPassword from "./edit/cardEditPassword";

const customTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      delete: "hover:bg-red-400",
      edit: "hover:bg-yellow-300  ",
      add: "hover:bg-emerald-300",
    },
  },
};

const CardLogin = () => {
  const [openModal, setOpenModal] = useState<string | undefined>();
  const [email, setEmail] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [dataProfile, setDataProfile] = React.useState("");

  const props = {
    openModal,
    setOpenModal,
    email,
    setEmail,
    refresh,
    setRefresh,
  };
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
    <Card className="ml-3 h-30">
      <div className="flex flex-col">
        <div className="mb-4 mt-0 flex items-center justify-between">
          <h1 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Login
          </h1>
          <span className="flex items-center">
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
                  <CardEditPassword
                    setOpenModal={props.setOpenModal}
                    setRefresh={props.setRefresh}
                    setDataProfile={dataProfile}
                  />
                </Modal.Body>
              </Modal>
            </Flowbite>
          </span>
        </div>
        <div className="flex text-gray-900 mb-4 items-center justify-space">
          <p>Change Password</p>
        </div>
      </div>
    </Card>
  );
};

export default CardLogin;
