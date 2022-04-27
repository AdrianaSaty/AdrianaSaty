import React from 'react';
import './SoftskillsCheckout.scss';
import '../../components/Accordion/Accordion'
import Accordion from '../../components/Accordion/Accordion';

interface Question {
    title: string,
    description: string
}

interface Questions extends Array<Question>{}

const questions: Questions = [
    {
        title: "Teste",
        description:
            "Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium. Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.Tenetur ullam rerum ad iusto possimus sequi mollitia dolore sunt quam praesentium.",
    },
    {
        title: "Teste",
        description:
            "Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque. Aperiam ab atque incidunt dolores ullam est, earum ipsa recusandae velit cumque.",
    },
    {
        title: "Teste",
        description:
            "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
];

function SoftskillsCheckout() {
    return (
        <div>
            {questions.map((item: Question, i: number) => (
                <Accordion title={item.title} description={item.description} key={i}/>
            ))}
        </div>
    )
}

export default SoftskillsCheckout;