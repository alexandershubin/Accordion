import {AccordionItem} from "./components/Accordion/types";
import {nanoid} from "nanoid";

export const dataAccordion: AccordionItem[] = [
    {
        id: nanoid(),
        title: 'Заголовок аккордеона',
        description: 'Текст',
        status: 'correct'
    },
    {
        id: nanoid(),
        title: 'Заголовок аккордеона',
        description: 'Текст',
        status: 'skipped',
        opened: true,
    },
    {
        id: nanoid(),
        title: 'Заголовок аккордеона',
        description: 'Текст',
        status: 'warning',
    },
    {
        id: nanoid(),
        title: 'Заголовок аккордеона',
        description: 'Текст',
        status: 'error',
    },
    {
        id: nanoid(),
        title: 'Заголовок аккордеона',
        description: 'Текст',
        disabled: true,
        status: 'skipped'
    }
];
