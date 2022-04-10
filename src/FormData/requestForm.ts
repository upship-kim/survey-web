import { basicFormAtom } from "./../atom/SurveyAtom";
import { useRecoilValue } from "recoil";
import moment from "moment";
export const requestForm = [
    {
        id: 0,
        title: "고객명",
        isRequire: true,
        type: "input",
        props: {
            type: "text",
            name: "customName",
        },
    },
    {
        id: 1,
        title: "연락처",
        isRequire: true,
        type: "input",
        props: {
            type: "tell",
            name: "phone",
        },
    },
    {
        id: 2,
        title: "이메일",
        isRequire: true,
        type: "input",
        props: {
            type: "email",
            name: "email",
        },
    },
    {
        id: 3,
        title: "공사현장주소",
        isRequire: true,
        type: "input",
        props: {
            type: "text",
            name: "address",
        },
    },
    {
        id: 4,
        title: "건물구분",
        isRequire: true,
        type: "select",
        props: {
            name: "building",
            options: [
                { name: "아파트" },
                { name: "오피스텔" },
                { name: "빌라" },
                { name: "단독주택" },
                { name: "상가" },
            ],
        },
    },
    {
        id: 5,
        title: "공사예정일",
        isRequire: true,
        type: "input",
        props: {
            type: "date",
            name: "date",
            value: moment().format("yyyy-MM-DD"),
            min: moment().format("yyyy-MM-DD"),
        },
    },
    {
        id: 6,
        title: "예산",
        isRequire: true,
        type: "select",
        props: {
            name: "fee",
            options: [
                { name: "1,000만원 이하" },
                { name: "1,000만원 ~ 2,000만원" },
                { name: "3,000만원 ~ 4,000만원" },
                { name: "4,000만원 ~ 5,000만원" },
                { name: "5,000만원 ~ 6,000만원" },
                { name: "6,000만원 이상" },
            ],
        },
    },
    {
        id: 7,
        title: "침실개수",
        isRequire: true,
        type: "select",
        props: {
            name: "bedRoomCount",
            options: [
                { name: "1개" },
                { name: "2개" },
                { name: "3개" },
                { name: "4개" },
                { name: "5개" },
                { name: "6개" },
                { name: "7개" },
                { name: "8개" },
                { name: "9개" },
                { name: "10개" },
            ],
        },
    },
    {
        id: 8,
        title: "화장실 개수",
        isRequire: true,
        type: "select",
        props: {
            name: "restRoomCount",
            options: [
                { name: "1개" },
                { name: "2개" },
                { name: "3개" },
                { name: "4개" },
                { name: "5개" },
                { name: "6개" },
                { name: "7개" },
                { name: "8개" },
                { name: "9개" },
                { name: "10개" },
            ],
        },
    },
    {
        id: 9,
        title: "분양면적",
        isRequire: true,
        type: "input",
        props: {
            name: "salesArea",
            placeholder: "단위: 평형",
        },
    },
    {
        id: 10,
        title: "전용면적",
        isRequire: true,
        type: "input",
        props: {
            name: "actureArea",
            placeholder: "단위: 평형",
        },
    },
    {
        id: 11,
        title: "연락가능시간",
        isRequire: true,
        type: "select",
        props: {
            name: "callTime",
            options: [
                { name: "상시 가능" },
                { name: "오전(09시 이전)" },
                { name: "오전(09시 ~ 12시)" },
                { name: "점심시간(12시 ~ 13시)" },
                { name: "오후(13시 ~ 18시)" },
                { name: "오후(18시 이후)" },
            ],
        },
    },
];
