import moment from "moment";
import { atom } from "recoil";
type SelectedTypes = {
    [index: number]: any;
    index: number;
    title: string;
    value: { [name: string]: string[] };
    detailValue: { [name: string]: string[] };
    etc: string;
};
type BasicTypes = {
    [index: string]: any;
    customName: string;
    phone: string;
    email: string;
    address: string;
    building: string;
    date: string;
    fee: string;
    bedRoomCount: string;
    restRoomCount: string;
    salesArea: string;
    actureArea: string;
    callTime: string;
};
export const basicFormAtom = atom<BasicTypes>({
    key: "basicForm",
    default: {
        customName: "",
        phone: "",
        email: "",
        address: "",
        building: "",
        date: moment(new Date()).format("yyyy-MM-DD"),
        fee: "",
        bedRoomCount: "",
        restRoomCount: "",
        salesArea: "",
        actureArea: "",
        callTime: "",
    },
});
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

export const isLoginAtom = atom<boolean>({
    key: "isLoginAtomKey",
    default: false,
});
