import { Observable } from 'rxjs';
import CommonService from "../common/CommonService"
import UserGroupInfo from "../model/UserGroupInfo"

export default class HomeService extends CommonService {

    /**
     * @date 2022-09-10
     * @author 이승인
     * @description 그룹정보 확인
     * @param userId 계정
     * @returns Observable<UserGroupInfo>
     */
    requestUserGroupInfo(userId: string): Observable<UserGroupInfo> {   
        const param = {
            "header":{},
            "payload": {
                "userId": userId
            }
        }
        return super.post("mg/mgr/service/common/userGroupInfo", param)
    }
    
}
