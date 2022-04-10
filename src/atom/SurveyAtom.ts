import { atom } from "recoil";
type SelectedTypes = {
    [index: number]: any;
    index: number;
    title: string;
    value: { [name: string]: string[] };
    detailValue: { [name: string]: string[] };
    etc: string;
};
export const selectedFormAtom = atom<SelectedTypes[]>({
    key: "selectedForm",
    default: [],
});

export const selectedTitleAtom = atom<string | null>({
    key: "selectedTitle",
    default: null,
});

export const selectedCardIndexAtom = atom<number | null>({
    key: "selectedCardIndex",
    default: null,
});
