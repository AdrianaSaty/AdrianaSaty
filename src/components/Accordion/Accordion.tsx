import React, {useState} from 'react';
import './Accordion.scss';
import arrow from '../../img/svgs/arrow.svg';


const info = [
  {
    question: "Teste",
    answer:
      "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
  },
  {
    question: "Teste",
    answer:
      "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
  },
  {
    question: "Teste",
    answer:
      "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
  },
];

function Accordion() {

    const [selected, setSelected] = useState(null)

    const toggle = (i:any) => {
        if (selected === i) {
            return setSelected(null)
        }
        setSelected(i)
    }


    return (
        <div className='wrapper'>
            <div className='accordion'>
                {info.map((item, i) => (
                    <div className='item'>
                        <div className='title' onClick={() => toggle(i)}>
                            <h2>{item.question}</h2>
                            <span>
                                {selected === i ? <img src={arrow} className='arrow-expanded'></img> : <img src={arrow} className='arrow-collapsed'></img>}
                            </span>
                        </div>
                        <div className={selected === i ? 'content show' : 'content'}>{item.answer}</div>
                    </div>
                ))}
            </div>
        </div>
    ) 
}

export default Accordion;