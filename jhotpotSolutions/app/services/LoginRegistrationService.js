import Global from '../common/Global';
import CommonFunction from "../common/CommonFunction"

export default class LoginRegistrationService {

    static async user_registration(division_id,district_id,police_station_id) {
        try {

            let mobile_number=await CommonFunction.getSession_mobile_number();
            let full_name=await CommonFunction.get_full_name();
            let device_tken=await CommonFunction.get_device_token();
            let device_os=await CommonFunction.get_device_os_type();

            let response = await fetch(Global.BASE_URL+Global.API_USER_REGISTRATION, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mobile_number: mobile_number,
                    ful_name: full_name,
                    device_token:device_tken,
                    device_type_id:device_os=="android"?1:2,
                    division_id:division_id,
                    district_id:district_id,
                    police_station_id:police_station_id,
                }),

            });
            let responseJsonData = await response.json();
            return responseJsonData;

        }
        catch (error) {

            return null;
        }
    }
}