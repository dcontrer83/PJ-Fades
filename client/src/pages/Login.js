// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// // need to create LOGIN_USER mutation
// import { LOGIN_USER } from '../utils/mutations';

// import Auth from '../utils/auth';

// const Login = (props) => {
//     // useState for email and password
//     const [formState, setFormState] = useState({ email: '', password: ''});
//     const [login, {error, data }] = useMutation(LOGIN_USER);

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
//         // authentication 
//         try {
//             const { data } = await login({
//                 variables: { ...formState },
//             });

//             Auth.login(data.login.token);
//         } catch (err) {
//             console.error(err);
//         }

//         // set formState clean
//         setFormState({
//             email: '',
//             password: '',
//         });
//     };

//     return (
//         <main>
//             <h2>Login</h2>
//             <div>
//                 { data ? (
//                     <p>
//                         Login in successful!!! You may now head{' '}
//                         <Link to = "/">back to tthe homepage.</Link>
//                     </p>
//                 ) : (
//                     <form onSubmit={handleFormSubmit}>
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

// export default Login;