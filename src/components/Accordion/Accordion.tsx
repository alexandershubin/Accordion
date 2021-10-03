import React, {useEffect, useRef, useState} from "react";
import {AccordionItem, AnswerStatus} from "./types";
import {block} from 'bem-cn';
import './Accordion.scss';

const b = block('accordion-list');

interface AccordionProps {
    items: AccordionItem[]
}

interface AccordionListItemProps extends AccordionItem {
    index: number;
    key: string
}

const statusesMap: Record<AnswerStatus, string> = {
    correct: 'Заполнено',
    skipped: 'Не заполнено',
    warning: 'Ошибка',
    error: 'Ошибка',
}

export const Accordion = (props: AccordionProps) => {
    return (
        <ul className={b()}>
            {props.items.map((item, index) => {
                return (
                    <AccordionListItem
                        key={item.id}
                        id={item.id}
                        index={index + 1}
                        title={item.title}
                        description={item.description}
                        status={item.status}
                        disabled={item.disabled}
                        opened={item.opened}
                    />)
            })}
        </ul>
    )
}

const AccordionListItem = (props: AccordionListItemProps) => {
    const {
        title,
        description,
        id,
        status,
        disabled,
        opened,
        index
    } = props;

    const [isOpened, setIsOpened] = useState<boolean>(opened || false);
    const [height, setHeight] = useState<string>('0');
    const accordionDescription = useRef<HTMLDivElement>(null);

    const itemClasses = b('item', {disabled, status, isOpened});

    useEffect(() => {
        if (null !== accordionDescription.current) {
            setHeight(isOpened ? `${accordionDescription.current.scrollHeight}px` : '0');
        }
    }, [isOpened]);

    const toggle = () => {
        setIsOpened(!isOpened);
    }

    return (
        <li className={itemClasses} key={id}>
            <span className={b('count')}>{index}</span>
            <div className={b('content')}>
                <div className={b('inner')} onClick={toggle}>
                    <h2 className={b('title')}>{title}</h2>
                    {disabled
                        ? null
                        : <span className={b('status')}>{statusesMap[status]}</span>
                    }
                    <svg
                        className={b('svg', {isOpened})}
                        height="25"
                        width="25"
                        aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"
                        role="img" xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512">
                        <path fill="#19191c"
                              d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                        />
                    </svg>
                </div>
                <hr className={b('line', {isOpened})}/>
                <div ref={accordionDescription}
                     style={{maxHeight: `${height}`}}
                     className={b('wrapper', {isOpened})}>
                    <p className={b('description')}>{description}</p>
                </div>
            </div>
        </li>
    )
}
