import '../css/style.css';
import {AiFillEye} from 'react-icons/ai';


const Login =()=>{
    return(
        <>
        <form>
            <input type="user" name="user" placeholder='username' className='in-border block' required/>
            <input type="password" name="password" placeholder='password' className='in-border block' required/>
            <button type="submit" className='btn'>Submit</button>
            <span className='block'>No account? Create <a href='#'>here</a></span>
        </form>
        </>
    );
};

export default Login;