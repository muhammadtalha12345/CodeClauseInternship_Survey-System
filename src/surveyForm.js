import React, { useState } from "react";

const SurveyForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        phoneNo: '',
        email: '',
        address: '',
        language: '',
        Sports:'',
        institution:'',
    });
    let name, value;
    let postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value });
    }
    const submitData = async (event) => {
        event.preventDefault();
        const { name, phoneNo, email, address, language, Sports, institution } = userData;
        if (name && phoneNo && email && address && language && Sports && institution) {
            const res = fetch('https://survey-system-3c0ca-default-rtdb.firebaseio.com/userData.json',
                {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        name, phoneNo, email, address, language, Sports, institution
                    }),
                }
            );

            if (res) {
                alert('Data is stored');
                setUserData({
                    name: '',
                    phoneNo: '',
                    email: '',
                    address: '',
                    language:'',
                    Sports:'',  
                    institution:'',
                })
            } else {
                alert('Plz fill the data')
            }
        } else {
            alert('plz filled the data');
        }
    };
    return (
        <>
            <div className="card">
                <form method="POST">
                    <p>Name: </p>
                    <input
                        name="name"
                        placeholder="Enter your Name"
                        value={userData.name}
                        onChange={postUserData}
                    />
                    <p>Phone no: </p>
                    <input
                        name="phoneNo"
                        placeholder="Enter your Phone Number"
                        value={userData.phoneNo}
                        onChange={postUserData}
                    />
                    <p>Email: </p>
                    <input
                        name="email"
                        placeholder="Enter your Email"
                        value={userData.email}
                        onChange={postUserData}
                    />

                    <p>Institution name: </p>
                    <input
                        name="institution"
                        placeholder="Enter your Email"
                        value={userData.institution}
                        onChange={postUserData}
                    />
                                    <p>Address: </p>
                                    <input
                                        name="address"
                                        placeholder="Enter your Address"
                                        value={userData.address}
                                        onChange={postUserData}
                                    />
                                    <p>What is your favourite language</p>
                                    <label><input type="checkbox" name="language" value='C#' onChange={postUserData} />C#</label>
                                    <label><input type="checkbox" name="language" value='Java' onChange={postUserData}/>Java</label>
                                    <label><input type="checkbox" name="language" value='Javascript' onChange={postUserData}/>Javascript</label>
                                    <label><input type="checkbox" name="language" value='Python' onChange={postUserData}/>Python</label>
                                    
                                    <p>What is your favourite sports</p>
                                    <label><input type="checkbox" name="Sports" value='Cricket' onChange={postUserData} />Cricket</label>
                                    <label><input type="checkbox" name="Sports" value='Hockey' onChange={postUserData}/>Hockey</label>
                                    <label><input type="checkbox" name="Sports" value='Football' onChange={postUserData}/>Football</label>
                                    <label><input type="checkbox" name="Sports" value='Batminton' onChange={postUserData}/>Batminton</label>
                                    


                                    <input type="submit" onClick={submitData} />
                </form>
            </div>


        </>
    );
}
export default SurveyForm;