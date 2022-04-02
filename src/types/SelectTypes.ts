export type OneCardTypes = OneQuestionTypes[];

export interface OneQuestionTypes {
    title: string;
    //하위 타입에 대한 명시
    type: number;
    options?: FirstOptionTypes[];
}

export interface FirstOptionTypes {
    name: string;
    //하위 타입에 대한 명시
    type: number;
    detailTitle: string;
    options?: SecondsOptionTypes[];
}

export interface SecondsOptionTypes {
    name: string;
    img?: string;
}
