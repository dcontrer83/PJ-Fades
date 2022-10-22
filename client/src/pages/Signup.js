// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// import { useMutation } from '@apollo/client';
// // need to create ADD_PROFILE mutation
// import { ADD_PROFILE } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Signup = () => {
//     // useState for name, email, and password
//     const [formState, setFormState] = useState({
//         name: '',
//         email: '',
//         password: '',
//     });
//     const [addProfile, { error, data }] = useMutation(ADD_PROFILE);

//     // update state based on form input changes
//     const handleChange = (event) => {
//         const { name, value } = event.target;

//         setFormState({
//             ...formState,
//             [name]: value,
//         });
//     };

//     // submit form
//     const handleFormSubmit = async (event) => {
//         event.preventDefault();
//         console.log(formState);

//         // authetication 
//         try {
//             const { data } = await addProfile({
//                 variables: { ...formState },
//             });

//             Auth.login(data.addProfile.token);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     return (
//         <main>
//             <h2>Sign Up</h2>
//             <div>
//                 {data ? (
//                     <p>
//                         Sing up successful!!! You may now head{' '}
//                         <Link to = "/">back to tthe homepage.</Link>
//                     </p>
//                 ) : (
//                     <form onSubmit={handleFormSubmit}>
//                         <input
//                             // className=""
//                             placeholder="Your username"
//                             name="name"
//                             type="text"
//                             value={formState.name}
//                             onChange={handleChange}
//                         />
//                         <input
//                             // className=""
//                             placeholder="Your email"
//                             name="email"
//                             type="email"
//                             value={formState.email}
//                             onChange={handleChange}
//                         />
//                         <input
//                             // className=""
//                             placeholder="********"
//                             name="password"
//                             type="password"
//                             value={formState.password}
//                             onChange={handleChange}
//                         />
//                         <button
//                             // className=""
//                             // style={{ cursor: 'pointer' }}
//                             type="submit"
//                         >
//                             Submit
//                         </button>
//                     </form>
//                 )}

//                 {error && (
//                     <div>
//                         {error.message}
//                     </div>
//                 )}
//             </div>
//         </main>
//     );
// };

// export default Signup;