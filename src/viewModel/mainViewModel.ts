import { concatMap, fromEvent, fromEventPattern, ReplaySubject } from 'rxjs';
import MainService from '../service/mainService';
import UserGroupInfo from '@/model/UserGroupInfo';

export default class MainViewModel {
    service = new MainService()

    // Observable
    obUserGroupInfo = new ReplaySubject<UserGroupInfo>()
    
    /**
     * @date 2022-06-08
     * @author 이승인
     * @description 유저정보 호출
     */
    async requestUserGroupInfo(userId?: string) {
        this.service.fetch(await this.service.requestUserGroupInfo(userId), this.obUserGroupInfo)
    }
}