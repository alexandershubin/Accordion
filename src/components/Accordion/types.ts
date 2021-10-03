export interface AccordionItem {
    id: string;
    title: string;
    description: string;
    status: AnswerStatus;
    opened?: boolean;
    disabled?: boolean;
}

export type AnswerStatus = 'correct' | 'warning' | 'error' | 'skipped';

