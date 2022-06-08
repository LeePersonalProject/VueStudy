export default class Util {

    /**
     * @date 2021-09-10
     * @author 이승인
     * @description 배포모드일 시, console.log 생략
     * @param message 로그값
     */
    static console(message?: any) {
        if (process.env.NODE_ENV === 'production') return;
        console.log(message);
    }
}