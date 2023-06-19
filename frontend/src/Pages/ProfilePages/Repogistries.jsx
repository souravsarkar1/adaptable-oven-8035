import React from 'react'
import styled from 'styled-components';
import ProfilePageNavbar from '../../Components/ProfilePageNavbar';
import { Button, Heading, Text } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import { MdOutlineFollowTheSigns } from 'react-icons/md'
import { SlUserFollow } from 'react-icons/sl'
import { BiCurrentLocation } from 'react-icons/bi'
import { SiGmail } from "react-icons/si"
import RepogistriesCard from '../../Components/RepogistriesCard';
import { Link } from 'react-router-dom';

const workSpaceData = [
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'},
    {title : 'one-ants' , texhstack : 'javascript' , visible : 'public'}
]

const Repogistries = () => {
    return (

        <DIV>
        <br />
        <br />
            <div className='nvabar'> <ProfilePageNavbar /></div>
            <div className='deteals'>
                <div className='profileDeteals'>
                    <img src={'https://avatars.githubusercontent.com/u/112673144?v=4'} alt="" />
                    <Heading>{"Leo Messi"}</Heading>
                    <br />
                    <a href="https://www.google.com/search?q=portfolio+website&oq=portfo&aqs=chrome.2.69i57j69i59j0i67i131i433i650l3j69i65j69i60l2.4407j0j7&sourceid=chrome&ie=UTF-8" target="_blank" rel="noopener noreferrer">
                        <Text>Portfollio.gitlab.io</Text>
                    </a>
                    <br />
                    <Link to={'/editprofile'}> <Button>Edit Profile</Button></Link>
                    <br />
                    <div className='followDiv'>
                        <Text className='followes'><MdOutlineFollowTheSigns style={{ marginTop: "4px" }} /> Followers {0}</Text>
                        <Text className='followes'><SlUserFollow style={{ marginTop: "4px" }} /> Following {0}</Text>
                    </div>
                    <br />
                    <div className='location'><BiCurrentLocation /> <Text style={{ marginLeft: -"10px" }}>{"Kolkata"}</Text></div>
                    <br />
                    <div className='email'><SiGmail /><Text style={{ marginLeft: -"10px" }}>{"sourav123@gmialo.com"}</Text></div>
                    <br />
                    <Heading as='h4' size='md'>Achievements</Heading>
                    <ul style={{listStyle : "none"}}>
                    <li color='red' style={{backgroundColor : "yellow" , width : "30%",color  : " blue" , borderRadius : '6px' ,marginTop : "2px" , marginBottom : '2px' , marginLeft : "auto" , marginRight : "auto" }}>Beta</li>
                    </ul>
                    <br />
                    <hr />
                    <Heading as='h4' size='md'>Organizations</Heading>
                    <ul style={{listStyle : "none"}}>
                    <li color='red' style={{backgroundColor : "red" , width : "30%",color  : " black" , borderRadius : '6px' ,marginTop : "2px" , marginBottom : '2px' , marginLeft : "auto" , marginRight : "auto" }}>Masai</li>
                    </ul>
                    <br />
                    <hr />

                </div>
                <div className='workplaceDetelas'>
                <Heading as='h4' size='md' >Repogistries</Heading>
                    {workSpaceData.map((el,i)=>(
                        <RepogistriesCard {...el} key={i}/>
                    ))}
                    <br />
                    <br />
                    <Heading as='h3' size='md'>Total {345} contribution in this year</Heading>
                    <img src="https://drive.google.com/uc?id=1uXKwGKDAUhGN5zVrYpQ2d-94UJiiuP46" alt="" />
                </div>
              
            </div>
        </DIV>
    )
}

export default Repogistries


// const Div = styled.div`
// `

const DIV = styled.div`
 background: white;
.deteals{
    display: flex;
    /* border: 1px solid red; */
    height: auto;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 20px;
}


.profileDeteals{
    display: flex;
    flex-direction: column;
    /* border: 1px solid blue; */
    height: auto;
    width: 30%;
    /* padding: 10px; */

    img{
       border-radius : 50%;
       height : 300px;
       margin-top: 7px;
        margin-bottom: 5px;
        margin-left: auto;
        margin-right: auto;
    }
}

.workplaceDetelas{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;
    /* border: 1px solid blue; */
    height: auto;
    width: 60%;
}
.followes{
    display: flex;
    flex-direction: row;
    gap: 9px;
   font-size: 20px;
}
.followes:hover{
    text-decoration: underline;
}
.followDiv{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    gap: 10px;
    margin-top: 7px;
        margin-bottom: 5px;
        margin-left: auto;
        margin-right: auto;
   
}

.location{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    gap: -10px;
    margin-top: 7px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    font-size: x-large;
    /* border: 1px solid red; */
    height: auto;
}
.email{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    gap: -10px;
    margin-top: 7px;
    margin-bottom: 5px;
    margin-left: auto;
    margin-right: auto;
    font-size: large;
    /* border: 1px solid red; */
    height: auto;
}
.email:hover{
    text-decoration: underline;
}
/* Styles for phones */
@media (max-width: 767px) {
  /* CSS rules for phones go here */
  .deteals{
    display: flex;
  flex-direction: column;
  }
  
  .profileDeteals{
    margin : auto;
    width: 70%;
  }
  .location .email{
    width: auto;
  }
  .nvabar{
    display: none;
  }
}

/* Styles for tablets */
@media (min-width: 768px) and (max-width: 1023px) {
  /* CSS rules for tablets go here */
  .deteals{
    display: flex;
  flex-direction: column;
  }
  .profileDeteals{
    margin : auto;
    width: 70%;
  }
  .location .email{
    width: auto;
  }
  .nvabar{
    display: none;
  }
}

`