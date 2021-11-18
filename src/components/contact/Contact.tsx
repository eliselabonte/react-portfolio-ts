import './contact.scss';
import Form from './form/Form';
import validateEmail from './utils/helpers';

export default function Contact () {

//     const [email, setEmail] = useState<String>('');
//     const [name, setName] = useState<String>('');
//     const [body, setBody] = useState<String>('');

    
//         } else if (inputType === 'name') {
//             setName(inputValue);
//         } else {
//             setBody(inputValue);
//         }
//         return;
// }

    return  (
        <div className='contact' id='contact'>
            <div className='my-info'>
                <h2>Contact Me</h2>
                <h3>emlabonte714@gmail.com</h3>
                <h3>781-985-1677</h3>
            </div>
            <span className='line-break'></span>
            <div className="their-info"> 
                <h3>or send me a message</h3>
                <Form />
            </div>
        </div>
)
    }