import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GoRepo } from "react-icons/go";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Flex,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Text,
  Textarea,
  border,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { MdOutlineModeEditOutline, MdOutlineCancel } from "react-icons/md";
import { BiLink } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const SingleCode = () => {
  const { id } = useParams();
const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [content, setContent] = useState("");
  const [codeEdit, setCodeEdit] = useState(true);
  const [detailsEdit, setDetailsEdit] = useState(true);

  const toast = useToast();
  const [language, setlanguage] = useState("");
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [aboutEdit, SetAboutedit] = useState(true);

  const aboutRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:4500/code/singlecode/${id}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkOTUwN2U1NmIwYWUxMWVlMmNiYTQiLCJ1c2VyIjoiU2hpdmEiLCJpYXQiOjE2ODcwNTY2NjR9.wD0CskI96tSaFaPpeyT__GSB5r_mSuUg2NOzGq26Qg4",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setdata(data.data);
        setContent(data.data.content);
        setAbout(data.data.about);
        setTitle(data.data.title);
        setlanguage(data.data.language);
      })
      .catch((error) => console.log(error));
  }, [id, codeEdit, detailsEdit, aboutEdit]);

  const handleCodeEdit = () => {
    setCodeEdit(false);
  };
  const handleDetailsEdit = () => {
    setDetailsEdit(false);
  };

  const handleCodeChange = (e) => {
    setContent(e.target.value);
  };

  const handleUpdatecode = () => {
    fetch(`http://localhost:4500/code/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkOTUwN2U1NmIwYWUxMWVlMmNiYTQiLCJ1c2VyIjoiU2hpdmEiLCJpYXQiOjE2ODcwNTY2NjR9.wD0CskI96tSaFaPpeyT__GSB5r_mSuUg2NOzGq26Qg4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("codeedit", data);
        toast({
          title: "Code Updated.",
          description: "The Code was Successfully Updated",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        setCodeEdit(true);
      })
      .catch((error) => console.log(error));
  };

  const handletitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handlelangChange = (e) => {
    setlanguage(e.target.value);
  };

  const handleUpdateDetails = () => {
    const payload = {
      title,
      language,
    };

    fetch(`http://localhost:4500/code/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkOTUwN2U1NmIwYWUxMWVlMmNiYTQiLCJ1c2VyIjoiU2hpdmEiLCJpYXQiOjE2ODcwNTY2NjR9.wD0CskI96tSaFaPpeyT__GSB5r_mSuUg2NOzGq26Qg4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("detailsedit", data);
        toast({
          title: "Details Updated.",
          description: "Details was Successfully Updated",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        setDetailsEdit(true);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateAbout = () => {
    fetch(`http://localhost:4500/code/update/${id}`, {
      method: "PATCH",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkOTUwN2U1NmIwYWUxMWVlMmNiYTQiLCJ1c2VyIjoiU2hpdmEiLCJpYXQiOjE2ODcwNTY2NjR9.wD0CskI96tSaFaPpeyT__GSB5r_mSuUg2NOzGq26Qg4",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ about }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("aboutedit", data);
        toast({
          title: "About Section is Updated.",
          description: "Successfully Updated",
          status: "success",
          duration: 6000,
          isClosable: true,
        });
        SetAboutedit(true);
      })
      .catch((error) => console.log(error));
  };

  const handleAboutEdit = () => {
    aboutRef.current.focus();
    console.log(aboutRef);
    SetAboutedit(false);
  };

  const OverlayTwo = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayTwo />);


  const handleDeletecode = ()=>{

    fetch(`http://localhost:4500/code/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDhkOTUwN2U1NmIwYWUxMWVlMmNiYTQiLCJ1c2VyIjoiU2hpdmEiLCJpYXQiOjE2ODcwNTY2NjR9.wD0CskI96tSaFaPpeyT__GSB5r_mSuUg2NOzGq26Qg4",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("delete", data);
        navigate("/")
        toast({
          title: `Deleted`,
          status: "error",
          isClosable: true,
        })
      })
      .catch((error) => console.log(error));

  }

  return (
    <div>
      <div style={{ height: "80px" }}></div>
      <DIV>
        <div className="title_div">
          <div className="title">
            <GoRepo />
            <span>{data.username?.replace(/\s/g, "_")}</span>
            <span>/</span>
            <span>{data.title?.replace(/\s/g, "_")}</span>
          </div>
          <div>
            <Button
              border={"0.2px solid #7d8590"}
              mr={"10px"}
              leftIcon={<RiDeleteBin6Line />}
              colorScheme="red"
              variant="solid"
              onClick={() => {
                SetAboutedit(true);
                setOverlay(<OverlayTwo />);
                onOpen();
              }}
            >
              Delete
            </Button>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Are Your Sure You Want To Delete ?</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Flex w={"200px"}>
                  <Button
              border={"0.2px solid #7d8590"}
              mr={"10px"}
              leftIcon={<RiDeleteBin6Line />}
              colorScheme="red"
              variant="solid"
              onClick={handleDeletecode}
            >
              Yes, Delete it
            </Button>
                    <Spacer/>
                    <Button colorScheme="blue" onClick={onClose}>No</Button>
                  </Flex>
                </ModalBody>
                <ModalFooter></ModalFooter>
              </ModalContent>
            </Modal>
          </div>
        </div>

        <div className="code-div">
          <div className="code">
            <div>
              <div className="header">
                <Button
                  colorScheme={"#21262D"}
                  border={"0.5px solid #7d8590"}
                  ml={"10px"}
                  onClick={() => setCodeEdit(true)}
                >
                  {codeEdit ? "Code" : "Cancel"}
                </Button>
                <div>
                  {!codeEdit && (
                    <Button
                      position={"relative"}
                      bottom={"10px"}
                      right={"10px"}
                      bgColor={"#26a641"}
                      mt={"20px"}
                      color={"white"}
                      _hover={{ bgColor: "#39d353" }}
                      onClick={handleUpdatecode}
                    >
                      Update Code
                    </Button>
                  )}
                  <Button
                    border={"0.2px solid #7d8590"}
                    mr={"10px"}
                    leftIcon={<MdOutlineModeEditOutline />}
                    colorScheme="#21262D"
                    variant="solid"
                    onClick={handleCodeEdit}
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <Textarea
                className="code-view"
                rows={content?.split("\n").length + 2}
                value={content}
                disabled={codeEdit}
                backgroundColor={"#0D1117"}
                onChange={handleCodeChange}
              ></Textarea>
            </div>

            {/* ****************************About Section *****************************/}

            <div className="about">
              <div className="About-header">
                <Button
                  colorScheme={"#21262D"}
                  border={"0.5px solid #7d8590"}
                  ml={"10px"}
                >
                  About
                </Button>
                <div>
                  {!aboutEdit && (
                    <Button
                      position={"relative"}
                      bottom={"10px"}
                      right={"10px"}
                      bgColor={"#26a641"}
                      mt={"20px"}
                      color={"white"}
                      _hover={{ bgColor: "#39d353" }}
                      onClick={handleUpdateAbout}
                    >
                      Update Details
                    </Button>
                  )}

                  {aboutEdit ? (
                    <Button
                      border={"0.2px solid #7d8590"}
                      mr={"10px"}
                      leftIcon={<MdOutlineModeEditOutline />}
                      colorScheme="#21262D"
                      variant="solid"
                      onClick={handleAboutEdit}
                    >
                      Edit
                    </Button>
                  ) : (
                    <Button
                      border={"0.2px solid #7d8590"}
                      mr={"10px"}
                      leftIcon={<MdOutlineCancel />}
                      colorScheme="red"
                      variant="solid"
                      onClick={() => SetAboutedit(true)}
                    >
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
              <div className="about-title">
                <BiLink />
                <Heading>{title?.replace(/\s/g, "_")}</Heading>
              </div>
              <div>
                <Textarea
                  className="about-text"
                  rows={about?.split("\n").length + 3}
                  value={about}
                  backgroundColor={"#0D1117"}
                  border={aboutEdit ? "none" : "0.5px solid #7d8590"}
                  onChange={(e) => setAbout(e.target.value)}
                  ref={aboutRef}
                  disabled={aboutEdit}
                ></Textarea>
              </div>
            </div>
          </div>

          <div className="details-div">
            <div className="details-header">
              <Button
                colorScheme={"#21262D"}
                border={"0.5px solid #7d8590"}
                ml={"10px"}
                onClick={() => setDetailsEdit(true)}
              >
                {detailsEdit ? "Details" : "Cancel"}
              </Button>
              <div>
                {!detailsEdit && (
                  <Button
                    position={"relative"}
                    bottom={"10px"}
                    right={"10px"}
                    bgColor={"#26a641"}
                    mt={"20px"}
                    color={"white"}
                    _hover={{ bgColor: "#39d353" }}
                    onClick={handleUpdateDetails}
                  >
                    Update Details
                  </Button>
                )}
                <Button
                  border={"0.2px solid #7d8590"}
                  mr={"10px"}
                  leftIcon={<MdOutlineModeEditOutline />}
                  colorScheme="#21262D"
                  variant="solid"
                  onClick={handleDetailsEdit}
                >
                  Edit
                </Button>
              </div>
            </div>
            <div className="details">
              <div>
                <label htmlFor="title">Code Title:</label>
                <br />
                <Input
                  value={title}
                  border={detailsEdit ? "none" : "1px solid #7d8590"}
                  fontSize={!detailsEdit ? "1rem" : "1.8rem"}
                  name={"title"}
                  disabled={detailsEdit}
                  onChange={handletitleChange}
                />
                <br />
                <label htmlFor="language">Language:</label>
                <br />
                <Input
                  value={language}
                  border={detailsEdit ? "none" : "1px solid #7d8590"}
                  fontSize={!detailsEdit ? "1rem" : "1.8rem"}
                  name="language"
                  disabled={detailsEdit}
                  onChange={handlelangChange}
                />
              </div>
            </div>
          </div>
        </div>
      </DIV>
    </div>
  );
};

export default SingleCode;

const DIV = styled.div`
  .title_div {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
  }

  .title {
    color: white;
    display: flex;
    justify-content: space-around;
    align-items: center;

    span {
      font-size: 1.2rem;
      margin-right: 4px;
    }

    svg {
      margin-right: 5px;
    }
    .title > span {
      color: #2f81da;
    }
  }

  .code-div {
    display: flex;
    margin: auto;
    width: 80%;
    margin-top: 50px;
    .code {
      height: 500px;
      width: 110%;
    }

    .details-div {
      width: 50%;
      margin-left: 20px;
    }
  }

  .code {
    .header {
      width: 100%;
      height: 50px;
      border: 0.5px solid #7d8590;
      background-color: #161b22;
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .code-view {
      border: 0.5px solid #7d8590;
      color: white;
      border-bottom-right-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
      padding-top: 20px;

      text-align: center;
    }

    textarea:disabled {
      color: whitesmoke;
      cursor: text;
      background-color: #0d1117;
    }
  }

  .details-header {
    width: 100%;
    height: 50px;
    border: 0.5px solid #7d8590;
    background-color: #161b22;
    border-top-right-radius: 0.5rem;
    border-top-left-radius: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .details {
    height: 280px;
    border: 0.5px solid #7d8590;
    color: white;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: #0d1117;
    label {
      margin-right: 210px;
    }

    input {
      margin-top: 10px;
      margin-bottom: 20px;
      width: 320px;
    }
    div {
      margin-top: 40px;
      input:disabled {
        color: whitesmoke;
        cursor: text;
      }
    }
  }

  .about {
    margin-top: 20px;
    border: 0.5px solid #7d8590;
    width: 100%;
    background-color: #0d1117;
    border-radius: 0.5rem;
    .About-header {
      width: 100%;
      height: 60px;
      border: 0.5px solid #7d8590;
      background-color: #161b22;
      border-top-right-radius: 0.5rem;
      border-top-left-radius: 0.5rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .about-title {
      color: white;
      display: flex;
      justify-content: start;
      padding: 10px;
      margin-left: 20px;
      margin-top: 20px;
      border-bottom: 0.5px solid #7d8590;
      cursor: pointer;
      width: 96%;
      svg {
        width: 45px;
        height: 45px;
        margin-right: 10px;
      }
    }
    .about-text {
      margin-top: 30px;
      padding: 20px;
      color: white;
    }
    .about-text:disabled {
      color: yellow;
      cursor: text;
      background-color: #0d1117;
    }
  }
`;
