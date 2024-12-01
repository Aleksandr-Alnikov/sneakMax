import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

const AccordionComponent = () => {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Вопрос 1</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>А это ответ 1: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Вопрос 2</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>А это ответ 2: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>Вопрос 3</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>А это ответ 3: в комплексе функционируют 6 детских садов с площадками, воспитателями и всякими другими людьми</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
};

export default AccordionComponent;