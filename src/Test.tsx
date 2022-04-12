import React from "react";
import { selecte } from "./FormData/dummyTest";

const Test = () => {
    return (
        <div style={{ listStyle: "none", lineHeight: "30px", padding: "1rem" }}>
            <h2>고객정보</h2>
            <hr></hr>
            <li>고객명: `customName`</li>
            <li>연락처: phone</li>
            <li>이메일: `email`</li>
            <li>공사현장주소: `address`</li>
            <li>건물구분: `building`</li>
            <li>공사예정일: `date`</li>
            <li>예산: `fee`</li>
            <li>침실 수: `bedRoomCount`</li>
            <li>화장실 수: `restRoomCount`</li>
            <li>분양면적: `salesArea`</li>
            <li>전용면적: `actureArea`</li>
            <li>연락가능시간: `callTime`</li>
            <br></br>
            <h2>선택 정보</h2>
            <hr></hr>
            {selecte.map((item, index) => (
                <div style={{ background: "#eeeeee" }}>
                    <h4>
                        {index + 1}. 설문 항목: {item.title}
                    </h4>
                    {Object.entries(item.value).map((a, index) => (
                        <li style={{ marginLeft: "12px" }}>
                            - {a[0]}: {a[1].join(", ")}
                        </li>
                    ))}
                    {Object.entries(item.detailValue).map((a, index) => (
                        <ol style={{ listStyle: "initial" }}>
                            {a[0]}: {a[1].join(", ")}
                        </ol>
                    ))}
                    {/* <li>냉장고 유형 선택: value</li> */}
                </div>
            ))}
        </div>
    );
};

export default Test;
