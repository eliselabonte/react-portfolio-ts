import './writing.scss';
import { writing } from './data';

export default function Portfolio()   {
    
    return (
            <div className='articlesContainer' id='articles'>
            <h3 className="articles-title">Articles</h3>
                { writing.map((item, i) => {
                    return (
                        <div key={i} className="projectItem">
                            <a href={item.link} rel='noreferrer' target="_blank"><img alt={item.name}src={item.image}/></a>
                            <div className='text'>
                                <h4>{item.name}</h4>
                            </div>
                        </div>
                    )}
                )}
            </div>

    )
}