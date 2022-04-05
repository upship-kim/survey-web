export type CardTypes = {
    id: number;
    title: string;
    rows: OneCardTypes;
};

export type OneCardTypes = OneQuestionTypes[];

export interface OneQuestionTypes {
    id: number;
    title: string;
    //하위 타입에 대한 명시
    type: number;
    options?: FirstOptionTypes[];
}

export interface FirstOptionTypes {
    id: number;
    name: string;
    //하위 타입에 대한 명시
    type: number;
    detailTitle: string;
    options?: SecondsOptionTypes[];
}

export interface SecondsOptionTypes {
    id: number;
    name: string;
    img?: string;
}
