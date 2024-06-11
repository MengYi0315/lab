import _ from "lodash";
import { Title } from "@mantine/core";
import { connect } from "react-redux";
import PageBanner from "../../../components/pageBanner";
import "../0301Award/Award.scss";
import { useEffect } from "react";

const Award = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div id="Award">
            <PageBanner 
                pathname={window.location.pathname}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // Example
        // GetTestData: _.get(state, "Lab01.TestData", []), 
        // 存在props裡的名稱: _.get(state, "reducer名稱.對應的type存payload的變數", [])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        // Example
        // GET_TestData(payload, callback, loading) {
        //     dispatch({type: "GET_TestData", payload, callback, loading});
        // }, 
        // 存在props裡的function名稱，可自行取，通常會跟下面的type名稱一樣(payload, callback, loading) {
        //     dispatch({type: " saga的takeLatest內對應的變數，在" "裡面 ", payload, callback, loading});
        // },
    };
};

export default  connect(mapStateToProps, mapDispatchToProps)(Award);