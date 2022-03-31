export type SecondsOptionTypes = {
    name: string;
    img?: string;
};

export type InnerContents = {
    type: number;
    options?: SecondsOptionTypes[];
};

export type FirstOptionTypes = {
    name: string;
    innerArrayContents?: InnerContents[];
};

export type OneQuestionTypes = {
    title: string;
    type: number;
    options?: FirstOptionTypes[] | undefined;
};

export type OneCardTypes = {
    rowDatas: any[];
};
